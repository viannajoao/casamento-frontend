const { createHash } = require('node:crypto');
const convites = require('../server/convidados.json');

function normalizar(nome) {
  return nome.trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .toLowerCase().replace(/\s+/g, ' ');
}

module.exports = async function presenca(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end();
  }
  if (!req.headers['content-type']?.startsWith('application/json')) return res.status(415).end();
  const { acao, codigo, nome, vai, tentativa } = req.body || {};
  if (acao === 'nome' && typeof nome === 'string' && nome.length <= 150) {
    const consulta = normalizar(nome);
    const existe = Object.values(convites).some(nomes => nomes.some(item => normalizar(item) === consulta));
    return res.status(existe ? 200 : 404).json(existe ? { existe } : { erro: 'CONVITE_NAO_ENCONTRADO' });
  }

  const chave = typeof codigo === 'string' ? codigo.replace(/[-\s]/g, '').toUpperCase() : '';
  if (!/^[A-Z0-9]{1,100}$/.test(chave)) return res.status(404).json({ erro: 'CONVITE_NAO_ENCONTRADO' });
  const hash = createHash('sha256').update(chave).digest('hex');
  const convite = Object.entries(convites).find(([id]) =>
    id.startsWith('sha256:') ? id === 'sha256:' + hash : id.replace(/[-\s]/g, '').toUpperCase() === chave
  );
  if (!convite) return res.status(404).json({ erro: 'CONVITE_NAO_ENCONTRADO' });
  const nomes = convite[1];
  if (acao === 'buscar') return res.status(200).json({ nomes, nome: nomes.length === 1 ? nomes[0] : undefined });
  // Aceita também a página antiga para convites individuais.
  const respostas = req.body.respostas ?? (nomes.length === 1 ? [{ nome: nomes[0], vai }] : []);
  if (acao !== 'responder' || !Array.isArray(respostas) || respostas.length !== nomes.length ||
      !nomes.every((nome, i) => respostas[i]?.nome === nome && typeof respostas[i]?.vai === 'boolean') ||
      typeof tentativa !== 'string' || !/^[a-f0-9-]{36}$/i.test(tentativa)) return res.status(400).json({});

  const { RESEND_API_KEY, RSVP_EMAIL_DE, RSVP_EMAIL_PARA } = process.env;
  if (!RESEND_API_KEY || !RSVP_EMAIL_DE || !RSVP_EMAIL_PARA) return res.status(503).json({});
  const resumo = respostas.map(item => item.nome + (item.vai ? ' confirmou presença.' : ' não poderá ir.')).join('\n');
  try {
    const envio = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: 'Bearer ' + RESEND_API_KEY,
        'Content-Type': 'application/json',
        'Idempotency-Key': [hash, tentativa, createHash('sha256').update(resumo).digest('hex')].join('/')
      },
      body: JSON.stringify({
        from: RSVP_EMAIL_DE,
        to: [RSVP_EMAIL_PARA],
        subject: 'Casamento | ' + nomes[0] + (nomes.length > 1 ? ' e família' : ''),
        text: resumo
      }),
      signal: AbortSignal.timeout(10000)
    });
    if (!envio.ok) return res.status(502).json({});
    return res.status(200).json({ enviado: true });
  } catch {
    return res.status(503).json({});
  }
};

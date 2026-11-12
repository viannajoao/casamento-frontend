const http = require('node:http');
const presenca = require('./api/presenca');

// O ng serve usa a mesma função de produção em um servidor local privado.
const api = http.createServer(async (req, res) => {
  if (req.url !== '/api/presenca') {
    res.writeHead(404).end();
    return;
  }
  try {
    let body = '';
    for await (const chunk of req) {
      body += chunk;
      if (body.length > 8192) {
        res.writeHead(413).end();
        return;
      }
    }
    req.body = body ? JSON.parse(body) : {};
    res.status = code => { res.statusCode = code; return res; };
    res.json = data => {
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(data));
    };
    await presenca(req, res);
  } catch {
    res.writeHead(400).end();
  }
});
const pronto = new Promise((resolve, reject) => {
  api.once('error', reject);
  api.listen(0, '127.0.0.1', () => resolve('http://127.0.0.1:' + api.address().port));
});
module.exports = [{ context: ['/api/presenca'], router: () => pronto }];

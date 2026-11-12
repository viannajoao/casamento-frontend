export interface WeddingGift {
  id: string; name: string; image: string; description: string; value: number | null; link: string | null;
}
// Dados públicos de recebimento. Nunca inclua tokens ou credenciais aqui.
export const GIFT_PAYMENT = {
  pixCopyPaste: '00020126580014br.gov.bcb.pix01366c1c144e-05c4-4acd-ac68-59163f555b2a5204000053039865802BR5924JOAO VICTOR ALVES VIANNA6007CAJAMAR62070503***6304A651',
  pixQrCodeImage: 'assets/images/pix-qrcode.svg',
  creditCardUrl: 'https://link.mercadopago.com.br/joaovianna'
};
// Adicione ou remova objetos para atualizar os cards automaticamente.
// value é a meta, não uma cobrança. link substitui o link geral para o presente.
export const GIFTS: WeddingGift[] = [
  { id: 'pc', name: 'Upgrade do PC do noivo', image: 'assets/images/gift-card-1.jpg', description: 'Uma ajudinha para deixar o PC do noivo pronto para novas aventuras!', value: 4000, link: null },
  { id: 'brinde', name: 'Bebidas para a festa', image: 'assets/images/kiko-bebendo.jpg', description: 'Para brindar ao amor e às boas histórias que vamos viver juntos.', value: 800, link: null },
  { id: 'buffet', name: 'Buffet do casamento', image: 'assets/images/buffet.jpg', description: 'Sabemos que as familias dos dois lados comem demais! ', value: 1200, link: null },
  { id: 'noiva', name: 'Vestido da noiva', image: 'assets/images/vestido-noiva.jpg', description: 'A noiva é tão linda que se ela ir de pijama, ela já é linda.Mas vamos dar um vestido maravilho para essa princesa da Disney!', value: 1300 , link: null },
  { id: 'noivo', name: 'Dia do noivo', image: 'assets/images/dia-do-noivo.jpg', description: 'Ajude o noivo a conseguir tirar essa cara de tacho', value: 1200, link: null },
  { id: 'DJ', name: 'Compra do DJ abençoado', image: 'assets/images/dj.jpg', description: 'Não pode faltar uma musica de qualidade para comemorar esse dia', value: 1200, link: null },
  { id: 'INSS', name: 'Ajuda na aposentadoria dos noivos', image: 'assets/images/inss.jpg', description: 'Se depender do Governo, nunca vamos nos aposentar. Então bora ajudar! kkk', value: 1200, link: null },
  { id: 'aluguel', name: '14 meses de aluguel!', image: 'assets/images/aluguel.jpg', description: '🤣😂 não tem muito o que dizer, ta caro viver né!', value: 500, link: null },



  { id: 'noivo', name: 'Terno do noivo', image: 'assets/images/terno-noivo.jpg', description: 'O noivo precisa estar bonito pelo menos no casamento', value: 500, link: null },
  { id: 'aleatorio', name: 'Só para dizer que não dei nada', image: 'assets/images/', description: 'Só na ajuda de custos', value: 100, link: null },
  { id: 'casa', name: 'Panela de pressão eletrica', image: 'assets/images/', description: 'Para a noiva não explicar a casa com a Panela de pressão tradicional', value: 350, link: null },
  { id: 'casa', name: 'Ferro a vapor', image: 'assets/images', description: 'Sem roupas amarrotadas dentro de casa!', value: 100, link: null },
  { id: 'tech', name: 'Alexa', image: 'assets/images/', description: 'Para a noiva não mandar só no noivo', value: 300, link: null },
  { id: 'casa', name: 'Kit Cama', image: 'assets/images/', description: 'Para uma noite de sono tranquila', value: 150, link: null },
  { id: 'casa', name: 'Kit Toalha', image: 'assets/images/', description: 'São muitos banheiros kkk precisa uma toalha para tu secar a mão quando vier em casa', value: 100, link: null },
  { id: 'noiva', name: 'Dia da Noiva', image: 'assets/images/', description: 'Para a noiva não ter que se preocupar com as maquiagens', value: 300, link: null },
  { id: 'casa', name: 'Jogo de Jantar', image: 'assets/images/', description: 'Para refeições especiais durante o casamento', value: 250, link: null },
  { id: 'casa', name: 'Cortina', image: 'assets/images/cortina.jpg', description: 'Para dar um toque especial na decoração da casa', value: 150, link: null },
  { id: 'casa', name: 'Tapete', image: 'assets/images/tapete.jpg', description: 'Para cobrir o chão e adicionar conforto à sala', value: 80, link: null },
  { id: 'casa', name: 'Colchão novo', image: 'assets/images/colchao.jpg', description: 'Para um sono tranquilo e confortável', value: 500, link: null },
  { id: 'God', name: 'Deus te abençoou e você resolveu dar uma ajudinha na Lua de Mel', image: 'assets/images/', description: 'Uma forma de agradecer pelas bênçãos recebidas', value: 1000, link: null },
  { id: 'casa', name: 'Robô aspirador', image: 'assets/images', description: 'Para manter a casa limpa com facilidade', value: 400, link: null },
  { id: 'casa', name: '15 dias de faxina para a noiva', image: 'assets/images/', description: 'Para ajudar a noiva a manter a casa limpa antes do casamento', value: 250, link: null },
  { id: 'tech', name: 'Playstation 5 😁', image: 'assets/images/', description: 'Um lugar de conforto longe da noiva 😂', value: 700, link: null },
  { id: 'casa', name: 'Jogo de Banheiro', image: 'assets/images/', description: 'Para uma experiência de banheiro mais confortável 💩', value: 80, link: null },
  { id: 'noiva', name: 'Dialogo da noiva com o noivo', image: 'assets/images/', description: 'Quando o noivo dizer que ele que está certo', value: 90, link: null },
  { id: 'casa', name: 'Controle extra', image: 'assets/images/', description: 'Para os noivos não se matarem por um controle só', value: 55, link: null },
  { id: 'noiva', name: 'Calmantes para o casamento', image: 'assets/images/', description: 'Para a noiva não surta e enforcar o noivo', value: 50, link: null },
  { id: 'aleatorio', name: 'Aumente 30% de chance de pegar o buquê', image: 'assets/images/', description: 'Vai que assim te ajudar a achar alguem para casar também 😂', value: 150, link: null },
  { id: 'casa', name: 'jogo de Panelas moderno', image: 'assets/images/', description: 'Para os noivos fazer algo legal de final de semana', value: 300, link: null },
  { id: 'aleatorio', name: 'Cota para peguntar quando teremos filhos', image: 'assets/images/', description: 'Isso não te dará um resposta, mas vamos ter mais paciencia contigo', value: 600, link: null },
  { id: 'aleatorio', name: 'Prioridade na fila do Buffet', image: 'assets/images/', description: 'Sempre tem um com mais fome né 💀', value: 150, link: null },
  { id: 'casa', name: 'Ajuda nos boletos', image: 'assets/images/', description: 'Esse vai dar uma boa divida 😂😕 ', value: 300, link: null },
  { id: 'casamento', name: 'Poder levar alguém que não foi convidado', image: 'assets/images/', description: 'Convidado não convida né, mas se pagar... que mal tem?', value: 900, link: null },
  { id: 'noivo', name: 'Cueca de um grande guerreiro', image: 'assets/images/', description: 'Uma baita de uma cueca resistente', value: 70, link: null },
  { id: 'aleatorio', name: 'Grande oportunidade de ser nosso parente favorito', image: 'assets/images/', description: 'Ja te consideramos muito, mas ajudando no casamento, ai ficará no top 😍😂', value: 150, link: null },
  { id: 'casamento', name: 'Permissão de pedir uma música', image: 'assets/images/', description: 'Sempre terá alguem pedindo música né', value: 80, link: null },
  { id: 'bencao', name: 'Todo dinheiro que você ajudar, vai voltar em dobro', image: 'assets/images/', description: 'Não por nós 😂😂 Deus é dono do ouro e da prata, então como vocês nos abençoou, será abençoado em dobro', value: 800, link: null },
  { id: 'noivo', name: 'Vale night do noivo', image: 'assets/images/', description: 'A saideira né', value: 50, link: null },
  { id: 'noivo', name: 'Tampão de ouvido para o noivo', image: 'assets/images/', description: 'A noiva ronca demais, cê ta doidooooo', value: 40, link: null },
  { id: 'noiva', name: 'Para a noiva não se atrasar', image: 'assets/images/', description: 'Mulher tem o dom de se atrasar quando está se arrumando, então o Uber será necessario.', value: 100, link: null },
  { id: 'amora', name: 'Matricula da Amora na natação', image: 'assets/images/', description: 'É a minha capiravinha 😂😂', value: 50, link: null },
  { id: 'noivo', name: 'Capacete para proteger o noivo do Dialogo', image: 'assets/images/', description: 'A noiva já tem uma boa ideia de dialogo, mas tambem preciso de uma boa estratégia 😂', value: 50, link: null },
  { id: 'casal', name: 'Jantar romantico para os noivos', image: 'assets/images/', description: 'Aquele MCDonalds 😂 brincadeira, vou levar ela no Habbibs', value: 120, link: null },
  { id: 'God', name: 'Se Deus tocar no seu coração 😁🥰', image: 'assets/images/', description: 'Até paro de jogar... mentira, mas ficariamos muito gratos 😂', value: 3000, link: null },
  { id: 'noivo', name: 'Bolinha de estresse para o noivo', image: 'assets/images/', description: 'Agora fica a dúvida, o estresse vem do trabalho ou da noiva? 🤔', value: 50, link: null },
];

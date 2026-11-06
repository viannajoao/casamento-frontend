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
  { id: 'aluguel', name: '14 meses de aluguel!', image: 'assets/images/aluguel.jpg', description: 'kkkkkkk não tem muito o que dizer, ta caro viver né!', value: 1200, link: null },
];

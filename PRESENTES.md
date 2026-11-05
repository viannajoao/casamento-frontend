# Configuração dos presentes

Os cards são criados a partir de `src/app/components/wedding-gift-card/wedding-gifts.config.ts`.

- `name`: título do card.
- `description`: texto do presente.
- `image`: caminho dentro de `assets/images/` (sem `src/`).
- `value`: meta em reais; use `null` para mostrar “Valor livre”.
- `link`: link de pagamento específico ou `null` para usar o Mercado Pago geral.
- `id`: identificador único do presente.

Duplique um objeto da lista `GIFTS` para adicionar um presente. A grade usa uma coluna em celular, duas a partir de 640px e três a partir de 1024px.

O bloco `GIFT_PAYMENT` reúne o Pix Copia e Cola, o caminho da imagem do QR Code e o link geral do Mercado Pago. Ao mudar o Pix, substitua tanto o código quanto a imagem pelo mesmo pagamento.

O Pix atual foi gerado com a chave aleatória informada, o nome JOAO VICTOR ALVES VIANNA e a cidade CAJAMAR, sem valor definido. A estrutura e o CRC foram conferidos conforme o Manual BR Code do Banco Central: https://cdn-www.bcb.gov.br/content/estabilidadefinanceira/spb_docs/ManualBRCode.pdf

Antes de publicar, leia o QR Code no aplicativo do banco e confira o destinatário, sem precisar concluir uma transferência. A estrutura válida não verifica o cadastro da chave no banco. Confira também as opções de cartão disponíveis no seu link do Mercado Pago.

Os presentes são contribuições simbólicas: o site não confirma pagamentos, reserva itens nem acompanha o valor arrecadado. Isso exigiria integração com um backend e notificações do provedor de pagamento.

Para visualizar: `npm start` e abra http://localhost:4200/#presentes.
Para compilar: `npm run build`.
Para testar o componente: `npm test -- --watch=false --browsers=ChromeHeadless --include=src/app/components/wedding-gift-card/wedding-gift-card.component.spec.ts`.

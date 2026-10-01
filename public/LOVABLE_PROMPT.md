Crie uma landing page de captura de leads em português do Brasil, com React, TypeScript e Tailwind, e duas rotas: "/" (captura) e "/obrigado" (obrigado). Mobile first, sem emoji, sem gradientes.

IDENTIDADE
- Fontes (Google Fonts): títulos em "Bricolage Grotesque" (800), textos em "DM Sans" (400/500/700).
- Cores: fundo #FFF4F7; rosa claro #FFE1EA; rosa principal (botões) #D1185E; rosa escuro (destaques e hover) #B0124F; texto #2B1620; texto secundário #4A2A36; cinza rosado #6B4C58; borda #E7C3CF; seção escura #2B1620.
- Cantos bem arredondados (cards 20 a 28px, botões 14px). Botões em caixa alta e negrito.

PÁGINA "/" (CAPTURA), nesta ordem:
1. Faixa no topo, fundo #2B1620, texto claro em caixa alta: "Aula ao vivo e gratuita · 19 e 20 de outubro · 20h · no Instagram".
2. Hero em 2 colunas (empilha no celular). Esquerda: selo "Com a Mafê, da Mafê Donuts"; H1 "Da cozinha de casa para R$ 2 mil por mês"; subtítulo "Aula ao vivo e gratuita: o passo a passo do donut que custa centavos e vende a R$ 15, mesmo que você nunca tenha feito um doce."; card branco com formulário (id "inscricao"): título "Garanta sua vaga gratuita", campos Nome ("Como você quer ser chamada"), WhatsApp ("(00) 00000-0000"), E-mail ("voce@email.com"), botão "QUERO MINHA VAGA GRATUITA" e o texto "Depois do cadastro, você entra no grupo do WhatsApp onde vai receber o link da aula." Direita: foto de donuts rosa (donuts-rosa.jpg), proporção 4:5, com um selo branco sobreposto no canto inferior esquerdo: "Centavos → R$ 15" / "o custo da massa e o preço de venda".
3. Seção branca "O que você vai ver nas duas noites", título "A massa no primeiro dia. O donut pronto no segundo." e 2 cards:
   - "Dia 1 · Segunda, 19/10, 20h" / "A massa do zero, com o que você já tem em casa" / "Batedeira comum, panela e fogão. Eu faço a massa ao vivo, explico o ponto, a fermentação, e congelo na sua frente."
   - "Dia 2 · Terça, 20/10, 20h" / "Do freezer para a vitrine, e como vender" / "A massa sai do freezer e vira donut recheado, ao vivo. E eu te mostro como vender pelo WhatsApp e pelo Instagram."
4. Seção "Pra quem é" / "Essa aula é pra você se..." com 4 itens com ícone de check rosa:
   - "Você quer uma renda extra, mas trava no 'vender o quê?'."
   - "Você nunca fez donut, nem doce nenhum, e quer aprender do zero."
   - "Você tem pouco tempo e não dá pra ficar na cozinha todo dia."
   - "Você quer um produto diferente, que quase ninguém vende na sua rua."
5. Seção escura (#2B1620) "Quem vai te ensinar": 2 fotos lado a lado (primeiros-donuts.jpg com legenda "Meus primeiros donuts, na cozinha de casa" e mafe-avental.jpg com legenda "A Mafê hoje"), título "Oi, eu sou a Mafê. Eu comecei exatamente onde você está." e os textos "Há seis anos, eu fiz meus primeiros donuts com uma batedeira comum, na cozinha da minha casa. Hoje esse doce é o meu negócio: a Mafê Donuts vende pelo WhatsApp e pelo Instagram, e mais de 400 mil pessoas acompanham meu trabalho." e "Nessa aula eu vou te mostrar o caminho que eu fiz, sem enrolação."
6. Seção "Quem já aprendeu comigo": depoimento grande "Já tinha comprado outros cursos e não deu certo. A sua receita deu de primeira. Fiz e vendi no mesmo dia.", assinado "Aluno da Mafê", e um espaço reservado (borda tracejada) para prints de alunos.
7. CTA final em fundo #FFE1EA: "Na sua cozinha já tem tudo que você precisa pra começar." / "Aula ao vivo e gratuita · 19 e 20 de outubro, às 20h, no Instagram." / botão "QUERO MINHA VAGA GRATUITA" que rola até o formulário.
8. Rodapé: "Mafê Donuts · José Bonifácio, SP · Política de privacidade".

COMPORTAMENTO DO FORMULÁRIO
- Todos os campos obrigatórios; se faltar algo, mostrar "Preenche todos os campos pra garantir sua vaga."
- Ao enviar: POST em JSON para uma URL de webhook configurável (vazia por padrão) com nome, whatsapp, email, as UTMs da URL (utm_source, utm_medium, utm_campaign, utm_content, utm_term) e fbclid; disparar fbq('track','Lead') se o Meta Pixel existir; redirecionar para /obrigado.

PÁGINA "/obrigado"
- Selo "Falta só um passo", H1 "Sua vaga está quase garantida!", texto "Entra agora no grupo do WhatsApp. É lá que eu vou mandar o link das aulas e uns bônus antes do dia 19.", botão grande "ENTRAR NO GRUPO DO WHATSAPP" (link configurável, abre em nova aba) e "Sem o grupo, você pode perder o link da aula."
- 3 cards numerados: "1 · Entra no grupo · É só aviso: link da aula, lembretes e bônus."; "2 · Ativa o lembrete da live · No meu Instagram, @mafedonuts. Dias 19 e 20, às 20h."; "3 · Me conta sobre você · Responde a pesquisa rapidinha, pra eu preparar a aula pensando em você." com link "Responder agora" (configurável).
- Faixa final rosa claro: "Pra acompanhar a Aula 1, deixa separado: batedeira comum, farinha de trigo, ovos, fermento biológico, açúcar e óleo."

Deixe o link do grupo, o link da pesquisa e o webhook em src/config.ts para eu editar depois.

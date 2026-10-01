# Página de captura | Aula gratuita Mafê Donuts

Página de captura (`/`) e página de obrigado (`/obrigado`) do lançamento "Da cozinha de casa para R$ 2 mil por mês" (aulas 19 e 20/10).

Stack: Vite + React + TypeScript + Tailwind + React Router (o mesmo que o Lovable usa).

## Como subir no Lovable

**Opção A: via GitHub (recomendado, fica idêntico ao mockup)**
1. Crie um repositório no GitHub e suba o conteúdo desta pasta.
2. No Lovable, conecte o projeto a esse repositório.
3. Dali você edita por prompt ou código e publica.

**Opção B: por prompt**
1. Crie um projeto novo no Lovable.
2. Cole o conteúdo de `LOVABLE_PROMPT.md`.
3. Envie as 3 imagens de `public/images/` no chat do Lovable.

## Antes de publicar (obrigatório)

Edite `src/config.ts`:
- `linkGrupoWhatsApp`: link de convite do grupo.
- `linkPesquisa`: link da pesquisa de leads.
- `webhookLeads`: URL que recebe os leads (ActiveCampaign, RD, n8n, Make, Zapier...). Envia nome, whatsapp, email, UTMs e fbclid em JSON.

Em `index.html`: cole o código base do Meta Pixel do cliente. O evento `Lead` já dispara no envio do formulário.

Pendências de conteúdo:
- Trocar `public/images/mafe-avental.jpg` por uma foto atual da Mafê na loja.
- Prints de alunos vendendo (bloco tracejado em "Quem já aprendeu comigo").
- Nome do aluno no depoimento, se autorizado.
- Link da política de privacidade no rodapé.

## Rodar localmente

```
npm install
npm run dev
```

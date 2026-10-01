# Restaurar a landing page da Mafê Donuts

## Objetivo
Fazer o conteúdo já sincronizado do GitHub aparecer no preview, preservando as duas páginas, as imagens e o comportamento descrito no projeto.

## Alterações
- Restaurar a configuração compatível do projeto sem apagar o conteúdo importado.
- Adaptar a página de captura para a rota `/` e a página de confirmação para `/obrigado`.
- Incorporar o visual rosa, as fontes, os textos e as imagens existentes ao sistema visual atual.
- Manter validação do formulário, captura de UTMs, evento de Lead, envio opcional ao webhook e redirecionamento.
- Manter links do grupo, pesquisa e webhook centralizados na configuração existente.
- Adicionar títulos e descrições próprios para cada página.

## Verificação
- Conferir as duas páginas no computador e no celular.
- Testar a mensagem de campos obrigatórios e o redirecionamento após preencher o formulário.
- Confirmar que as imagens carregam e que não há erros visíveis.

## Detalhes técnicos
- A navegação antiga baseada em React Router será convertida para as rotas nativas deste projeto.
- O CSS antigo será migrado para o Tailwind atual, usando os tokens semânticos da identidade da Mafê Donuts.
- Arquivos duplicados dentro de `public` não participarão da aplicação; os conteúdos válidos em `src` serão a fonte principal.

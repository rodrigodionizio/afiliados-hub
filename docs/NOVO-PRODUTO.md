# Adicionar um produto novo ao nicho

1. **Cadastrar o link** em `nichos/<nicho>/src/data/products.ts`:
   ```ts
   {
     slug: 'nome-do-produto',
     name: 'Nome do Produto',
     network: 'clickbank',
     affiliateId: 'quirinos84',
     offerUrl: 'https://HOPLINK-APROVADO...&tid={tid}',
     approved: true,
   }
   ```
   Isso já cria o redirecionamento `/go/nome-do-produto`.

2. **Criar a página** copiando `src/pages/prodentim/index.astro` para `src/pages/nome-do-produto/index.astro`
   e reescrever o conteúdo. Manter: aviso de afiliado (vem do layout), seção "who should talk to a doctor",
   prós e contras honestos, fontes com link, FAQ.

3. **Listar na home**: adicionar o artigo no array `articles` de `src/pages/index.astro`.

4. **Testar**: `npm run build` e conferir `/nome-do-produto` e `/go/nome-do-produto`.

5. **Commit e push** na branch `main` → a Vercel publica sozinha.

## Novo nicho

Copiar a pasta `nichos/saude` para `nichos/<novo-nicho>`, ajustar `src/site.config.ts`,
apagar as pré-sells antigas e criar um novo projeto Vercel com **Root Directory** = `nichos/<novo-nicho>`.

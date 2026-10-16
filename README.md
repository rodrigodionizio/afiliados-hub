# afiliados-hub

Repositório master das pré-sells de afiliados (mercado **EUA**, conteúdo em **inglês**).
Cada **nicho** é um site Astro independente, publicado como um **projeto Vercel** próprio, com domínio próprio.
Cada **produto** é uma página dentro do nicho.

```
afiliados-hub/
├── nichos/
│   └── saude/                     ← site "The Healthy Notebook" (projeto Vercel, root = nichos/saude)
│       ├── src/site.config.ts     ← nome do site, e-mail de contato, IDs de rastreamento
│       ├── src/data/products.ts   ← cadastro de produtos e links de afiliado
│       ├── src/pages/prodentim/   ← pré-sell do ProDentim  →  /prodentim
│       ├── src/pages/go/[slug]    ← redirecionamento        →  /go/prodentim
│       └── src/pages/*.astro      ← about, contact, privacy, terms, disclosures
└── docs/
    ├── PLAYBOOK.md                ← regras de conformidade e fluxo de trabalho
    └── NOVO-PRODUTO.md            ← passo a passo para adicionar um produto
```

## Rodar localmente

```bash
cd nichos/saude
npm install
npm run dev      # http://localhost:4321
```

## Variáveis de ambiente (Vercel → Project → Settings → Environment Variables)

| Variável | Exemplo | Para quê |
|---|---|---|
| `SITE_URL` | `https://thehealthynotebook.com` | URL canônica e sitemap |
| `PUBLIC_GA4_ID` | `G-XXXXXXX` | Google Analytics 4 |
| `PUBLIC_GADS_ID` | `AW-123456789` | Tag do Google Ads |
| `PUBLIC_GADS_CLICK_LABEL` | `AbCdEf123` | Rótulo da conversão "clique na oferta" |

Sem as variáveis, o site funciona normalmente, só sem os scripts de medição.

## Rastreamento de vendas (ClickBank `tid`)

O anúncio leva para `/prodentim?utm_source=google&utm_campaign=NOME&utm_content=ANUNCIO`.
O botão leva para `/go/prodentim`, que monta o `tid` (`g x campanha x anúncio`, só letras e números) e redireciona ao hoplink.
No Google Ads, use o modelo de URL de rastreamento:
`{lpurl}?utm_source=google&utm_campaign={campaignid}&utm_content={creative}`

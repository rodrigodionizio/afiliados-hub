/**
 * Cadastro de produtos do nicho.
 * Cada produto gera o redirecionamento /go/<slug>.
 *
 * offerUrl: link de afiliado. Use {tid} onde o Tracking ID da ClickBank deve entrar.
 * Enquanto a afiliação não for aprovada, o link aponta para a página oficial com o
 * nickname, apenas para teste. TROQUE pelo hoplink gerado após a aprovação.
 */
export type Product = {
  slug: string;
  name: string;
  network: 'clickbank' | 'other';
  affiliateId: string;
  offerUrl: string;
  approved: boolean;
};

export const products: Product[] = [
  {
    slug: 'prodentim',
    name: 'ProDentim',
    network: 'clickbank',
    affiliateId: 'quirinos84',
    // TODO: substituir pelo hoplink oficial após aprovação (manter &tid={tid} no final)
    offerUrl: 'https://prodentim101.com/text.php?hop=quirinos84&tid={tid}',
    approved: false,
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

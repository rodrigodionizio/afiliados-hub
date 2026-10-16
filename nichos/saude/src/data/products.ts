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
  /**
   * Imagens oficiais do produto. Hoje apontam para o servidor do vendedor.
   * Para hospedar localmente: salve os arquivos em public/img/<slug>/ e troque
   * as URLs por '/img/<slug>/arquivo.png'. Após a aprovação, prefira o kit de
   * imagens que o vendedor envia aos afiliados.
   */
  images?: {
    product?: string;
    bundle3?: string;
    bundle6?: string;
    guarantee?: string;
  };
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
    images: {
      product: 'https://myprodentim101.com/statics/img/main-product-img.png',
      bundle3: 'https://prodentim101.com/statics/img/prodentim3-bottle.png',
      bundle6: 'https://prodentim101.com/statics/img/fe_6_bottle_mob.png',
      guarantee: 'https://prodentim101.com/statics/img/guarantee_badge.png',
    },
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

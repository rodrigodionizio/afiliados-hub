/**
 * Configuração do site do nicho SAÚDE.
 * Tudo o que aparece como "marca" no site sai daqui.
 * Para criar um novo nicho, copie a pasta nichos/saude e ajuste este arquivo.
 */
export const site = {
  name: 'The Healthy Notebook',
  tagline: 'Plain-spoken notes on everyday health products, for adults 35 and up.',
  language: 'en-US',
  // TODO: trocar por um e-mail que funcione ANTES de pedir afiliação / rodar anúncios.
  contactEmail: 'editor@thehealthynotebook.com',
  // Quem responde pelo site (aparece em About e Contact).
  publisher: 'The Healthy Notebook editorial team',
  country: 'United States',
};

/** IDs de rastreamento — vêm das variáveis de ambiente da Vercel. Vazio = script não carrega. */
export const tracking = {
  ga4Id: import.meta.env.PUBLIC_GA4_ID ?? '',
  googleAdsId: import.meta.env.PUBLIC_GADS_ID ?? '', // ex: AW-123456789
  googleAdsClickLabel: import.meta.env.PUBLIC_GADS_CLICK_LABEL ?? '', // rótulo da conversão "clique na oferta"
};

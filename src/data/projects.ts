import language from '@data/i18n/es.json'

const { PROJECTS } = language.PAGES

export interface DataEntryMap {
  monitoringGallery: Asset[];
  monitoringAssets: Asset[];
  porticoGallery: Asset[];
  porticoAssets: Asset[];
  alemania4inmobiliariaGallery: Asset[];
  alemania4inmobiliariaAssets: Asset[];
  anilloGallery: Asset[];
  anilloAssets: Asset[];
  etherGallery: Asset[];
  etherAssets: Asset[];
};

export interface Asset {
  id: string;
  data: {
    width: number;
    height: number;
    context: any;
    public_id: string;
    secure_url: string;
  }
  digest: string;
  collection: string;
  // otros campos según sea necesario
}

export interface Project {
  id: string;
  seoTitle: string;
  seoDescription: string;
  title: string;
  description: string;
  descriptionAlt: string;
  featuresTitle: string;
  features: string[];
  logo: string;
  slug: string;
  imagesTitle: string;
  bgColor: string;
  titleColor: string;
  client: string;
  tags: string[];
  ctaTitle: string;
  ctaText: string;
}

export const PROJECTS_DATA = PROJECTS;
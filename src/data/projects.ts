import language from '@data/i18n/es.json'

const { PROJECTS } = language.PAGES

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
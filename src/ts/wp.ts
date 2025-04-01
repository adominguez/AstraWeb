interface seo {
  title: string;
  description: string;
}

interface author {
  name: string;
  avatar: string;
  slug: string;
}

interface image {
  thumbnail: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
  large: {
    src: string;
    width: number;
    height: number;
    alt: string;
  };
}

export interface BasePost {
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
  slug: string;
  date: string;
  _embedded: Record<string, any>;
  yoast_head_json: Record<string, any>;
}


export interface ProcessedPost {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  date: string;
  image: image;
  seo: seo;
  author: author;
}
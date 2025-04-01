import type { BasePost } from '@ts/wp';

const domain = import.meta.env.WP_DOMAIN;
const apiUrl = `${domain}/wp-json/wp/v2`;



const processData = (data: BasePost) => {
  const {
    title: { rendered: title },
    content: { rendered: content },
    excerpt: { rendered: excerpt },
    slug,
    date,
    yoast_head_json: seo,
    _embedded
  } = data;
  const result = { title, content, excerpt, slug, date, image: {}, author: {}, seo: {} };
  if (_embedded['wp:featuredmedia']?.[0]) {
    const { alt_text: alt, media_details: {sizes : { thumbnail, large }} } = _embedded['wp:featuredmedia'][0];
    result.image = {
      thumbnail: {
        src: thumbnail.source_url,
        width: thumbnail.width,
        height: thumbnail.height,
        alt,
      },
      large: {
        src: large.source_url,
        width: large.width,
        height: large.height,
        alt,
      }
    };
  }
  if (_embedded['author']?.[0]) {
    result.author = {
      name: _embedded['author'][0].name,
      avatar: _embedded['author'][0].avatar_urls['96'],
      slug: _embedded['author'][0].slug
    };
  }

  if (seo) {
    result.seo = {
      title: seo.title,
      description: seo.description
    }
  }
  return result;
}

export const getPageInfo = async (slug: string) => {
  const res = await fetch(`${apiUrl}/pages?slug=${slug}`);
  if (!res.ok) throw new Error('Failed to fetch page');
  const [data] = await res.json();
  return processData(data);
};

export const getPostInfo = async (slug: string) => {
  const res = await fetch(`${apiUrl}/posts?slug=${slug}&_embed`);
  if (!res.ok) throw new Error('Failed to fetch post');
  const [data] = await res.json();
  if (data) {
    return processData(data);
  }
  return [];
};

export const getPosts = async ({ perPage = 9 }: { perPage: number }) => {
  const res = await fetch(`${apiUrl}/posts?per_page=${perPage}&_embed`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data.map(processData);
};

export const getAllPostsSlugs = async () => {
  const res = await fetch(`${apiUrl}/posts?per_page=100`);
  if (!res.ok) throw new Error('Failed to fetch posts');
  const data = await res.json();
  return data.map((post: any) => post.slug);
}
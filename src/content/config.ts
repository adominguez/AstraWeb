import { defineCollection } from "astro:content";
import { cldAssetsLoader } from "astro-cloudinary/loaders";

export const collections = {
  monitoringGallery: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/monitoring/gallery',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
  monitoringAssets: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/monitoring/assets',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
  porticoGallery: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/portico/gallery',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
  porticoAssets: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/portico/assets',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
  alemania4inmobiliariaGallery: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/alemania4inmobiliaria/gallery',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
  alemania4inmobiliariaAssets: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/alemania4inmobiliaria/assets',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
  anilloGallery: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/anillo/gallery',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
  anilloAssets: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/anillo/assets',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
  etherGallery: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/ether/gallery',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
  etherAssets: defineCollection({
    loader: cldAssetsLoader({
      folder: 'AstraWeb/projects/ether/assets',
      fields: ['width', 'height', 'context', 'public_id', 'secure_url']
    })
  }),
}
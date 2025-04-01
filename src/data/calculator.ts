export const SITE_OPTIONS = [
  {
    value: 'LANDING',
    label: 'Landing Page',
    imageUrl: '/services/landing/landing.svg',
    basePrice: 500
  },
  {
    value: 'CORPORATIVE',
    label: 'Web Corporativa',
    imageUrl: '/services/corporative/corporative-web-design.svg',
    basePrice: 1000
  },
  {
    value: 'ECOMMERCE',
    label: 'Tienda Online',
    imageUrl: '/services/ecommerce/ecommerce-web.svg',
    basePrice: 1500
  },
  {
    value: 'CUSTOM',
    label: 'Desarrollo a Medida',
    imageUrl: '/services/custom/custom-web-development.svg',
    basePrice: 2000
  }
];

export const auditSEO = {
  name: 'auditSEO',
  label: '¿Realizar Auditoría SEO antes de empezar? (Muy recomendable)',
  hours: 10
};

export const PRICE_CALCULATOR = {
  landing: {
    value: 'landing',
    label: 'Landing Page',
    imageUrl: '/services/landing/landing.svg',
    basePrice: 500,
    auditSEO: {
      ...auditSEO,
      hours: 10
    },
    types: {
      name: 'landingDesign',
      label: 'Diseño de la Landing',
      options: [
        {
          value: 'basic',
          label: 'Básico',
          imageUrl: '/calculator/basic.svg',
          hours: 0
        },
        {
          value: 'premium',
          label: 'Premium',
          imageUrl: '/calculator/profesional.svg',
          hours: 4
        },
        {
          value: 'custom',
          label: 'Personalizado',
          imageUrl: '/calculator/custom.svg',
          hours: 10
        }
      ]
    }
  },
  corporative: {
    value: 'corporative',
    label: 'Web Corporativa',
    imageUrl: '/services/corporative/corporative-web-design.svg',
    basePrice: 1000,
    auditSEO: {
      ...auditSEO,
      hours: 15
    },
    types: {
      name: 'corporativeDesign',
      label: 'Diseño de la Web Corporativa',
      options: [
        {
          value: 'profesional',
          label: 'Plantilla profesional',
          imageUrl: '/calculator/profesional.svg',
          hours: 8
        },
        {
          value: 'custom',
          label: 'Diseño a medida',
          imageUrl: '/calculator/custom.svg',
          hours: 20
        }
      ]
    }
  },
  ecommerce: {
    value: 'ecommerce',
    label: 'Tienda Online',
    imageUrl: '/services/ecommerce/ecommerce-web.svg',
    basePrice: 1500,
    auditSEO: {
      ...auditSEO,
      hours: 20
    },
    types: {
      name: 'ecommerceDesign',
      label: 'Diseño de la Tienda Online',
      options: [
        {
          value: 'profesional',
          label: 'Plantilla profesional',
          imageUrl: '/calculator/profesional.svg',
          hours: 8
        },
        {
          value: 'custom',
          label: 'Diseño a medida',
          imageUrl: '/calculator/custom.svg',
          hours: 20
        }
      ]
    }
  },
  custom: {
    value: 'custom',
    label: 'Desarrollo a Medida',
    imageUrl: '/services/custom/custom-web-development.svg',
    basePrice: 2000,
    auditSEO: {
      ...auditSEO,
      hours: 20
    },
    types: {
      name: 'customDesign',
      label: 'Diseño a Medida',
      options: [
        {
          value: 'profesional',
          label: 'Plantilla profesional',
          imageUrl: '/calculator/profesional.svg',
          hours: 20
        },
        {
          value: 'custom',
          label: 'Diseño a medida',
          imageUrl: '/calculator/custom.svg',
          hours: 30
        }
      ]
    }
  }
}
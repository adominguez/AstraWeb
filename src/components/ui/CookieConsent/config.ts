import type { CookieConsentConfig } from 'vanilla-cookieconsent';
import language from "@data/i18n/es.json";

const translations = language.COOKIE_CONSENT;

export const config: CookieConsentConfig = {
  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom',
    },
    preferencesModal: {
      layout: 'box',
      position: 'right',
      equalWeightButtons: true,
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {
      services: {
        facebookPixel: {
          label: 'Facebook',
          cookies: [
            {
              name: /^_fbp/,
            },
          ],
        },
        hotjar: {
          label: 'Hotjar',
          cookies: [
            {
              name: /^_hj/,
            },
          ],
        },
      }
    },
  },
  language: {
    default: 'es',
    autoDetect: 'browser',
    translations: {
      es: translations,
    },
  },
};

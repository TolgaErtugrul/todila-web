import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: { translation: { "welcome": "Todila'ya Hoş Geldiniz", "products": "Ürünler" } },
      en: { translation: { "welcome": "Welcome to Todila", "products": "Products" } }
    },
    fallbackLng: "tr",
    interpolation: { escapeValue: false }
  });

export default i18n;
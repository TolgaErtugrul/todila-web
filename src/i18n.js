import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      tr: {
        translation: {
          "nav_products": "Ürünler",
          "nav_apps": "Uygulamalar",
          "nav_docs": "Teknik Dokümanlar",
          "nav_contact": "İletişim",
          "hero_subtitle": "İnşaat & Yalıtım Teknolojileri",
          "docs_title": "Teknik Dokümanlar & Belgeler",
          "docs_quality": "Kalite Belgeleri",
          "docs_test": "Test Raporları",
          "docs_tables": "Teknik Tablolar",
          "contact_address": "Adres",
          "contact_phone": "Telefon & E-posta"
        }
      },
      en: {
        translation: {
          "nav_products": "Products",
          "nav_apps": "Applications",
          "nav_docs": "Technical Documents",
          "nav_contact": "Contact",
          "hero_subtitle": "Construction & Insulation Technologies",
          "docs_title": "Technical Documents & Certificates",
          "docs_quality": "Quality Certificates",
          "docs_test": "Test Reports",
          "docs_tables": "Technical Charts",
          "contact_address": "Address",
          "contact_phone": "Phone & E-mail"
        }
      }
    },
    fallbackLng: "tr",
    interpolation: { escapeValue: false }
  });

export default i18n;
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en.json';
import ar from './locales/ar.json';

export const SUPPORTED_LANGUAGES = ['en', 'ar'];
export const RTL_LANGUAGES = ['ar'];

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ar: { translation: ar },
    },
    fallbackLng: 'en',
    supportedLngs: SUPPORTED_LANGUAGES,
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'almaani_lang',
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
    returnObjects: true,
  });

/** Keep <html> lang/dir in sync with the active language. */
export function applyDocumentLanguage(lng) {
  if (typeof document === 'undefined') return;
  const isRtl = RTL_LANGUAGES.includes(lng);
  const root = document.documentElement;
  root.setAttribute('lang', lng);
  root.setAttribute('dir', isRtl ? 'rtl' : 'ltr');
}

applyDocumentLanguage(i18n.resolvedLanguage || 'en');
i18n.on('languageChanged', applyDocumentLanguage);

export default i18n;

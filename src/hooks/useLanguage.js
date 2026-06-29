import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { RTL_LANGUAGES } from '../i18n';

// Convenience hook exposing the active language, direction, and a toggler.
export default function useLanguage() {
  const { i18n } = useTranslation();
  const lang = i18n.resolvedLanguage || i18n.language || 'en';
  const isRtl = RTL_LANGUAGES.includes(lang);

  const changeLanguage = useCallback(
    (next) => {
      i18n.changeLanguage(next);
    },
    [i18n]
  );

  const toggleLanguage = useCallback(() => {
    i18n.changeLanguage(lang === 'ar' ? 'en' : 'ar');
  }, [i18n, lang]);

  return { lang, isRtl, changeLanguage, toggleLanguage };
}

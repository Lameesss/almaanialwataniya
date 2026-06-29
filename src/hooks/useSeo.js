import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { applySeo } from '../utils/seo';

// Sets per-page SEO metadata, re-applying when the language changes.
export default function useSeo(titleKey, descKey) {
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const brand = t('brand.name');
    const title = titleKey ? `${t(titleKey)} | ${brand}` : brand;
    applySeo({
      title,
      description: descKey ? t(descKey) : undefined,
      lang: i18n.resolvedLanguage,
    });
  }, [t, i18n.resolvedLanguage, titleKey, descKey]);
}

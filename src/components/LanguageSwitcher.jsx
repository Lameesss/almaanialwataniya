import { motion, AnimatePresence } from 'framer-motion';
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useLanguage from '../hooks/useLanguage';

// Toggle button between English and Arabic with a subtle crossfade.
export default function LanguageSwitcher({ light = false, className = '' }) {
  const { t } = useTranslation();
  const { lang, toggleLanguage } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t('nav.language')}
      className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 ease-premium ${light
          ? 'border-white/30 bg-white/10 text-white hover:bg-white/20'
          : 'border-slate-200 bg-white text-ink hover:border-primary-300 hover:text-primary-700'
        } ${className}`}
    >
      <Globe className="h-4 w-4 transition-transform duration-500 group-hover:rotate-12" />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={lang}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25 }}
          className="min-w-[3.5rem] text-center"
        >
          {t('nav.language')}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

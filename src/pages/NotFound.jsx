import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/ui/PageTransition';

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-surface px-5">
        <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.5]" />
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-100/50 blur-3xl" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="relative text-center"
        >
          <p className="text-[7rem] font-black leading-none text-primary-600 sm:text-[10rem]">
            404
          </p>
          <h1 className="mt-2 text-2xl font-bold text-ink sm:text-3xl">
            {t('nav.home') === 'Home' ? 'Page not found' : 'الصفحة غير موجودة'}
          </h1>
          <p className="mx-auto mt-3 max-w-md text-ink-soft">
            {t('nav.home') === 'Home'
              ? 'The page you are looking for doesn’t exist or has been moved.'
              : 'الصفحة التي تبحث عنها غير موجودة أو تم نقلها.'}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className="btn-primary group">
              <Home className="h-4 w-4" />
              {t('nav.home')}
            </Link>
            <button onClick={() => window.history.back()} className="btn-ghost">
              <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              {t('common.readMore') === 'Read More' ? 'Go back' : 'العودة'}
            </button>
          </div>
        </motion.div>
      </section>
    </PageTransition>
  );
}

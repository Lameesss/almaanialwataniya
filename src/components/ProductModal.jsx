import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getLocalized } from '../data/products';
import useLanguage from '../hooks/useLanguage';
import ProductVisual from './ui/ProductVisual';

// Product details modal — matches site-wide theme: border-slate-200/80, plum accents, primary-900 text.
export default function ProductModal({ product, onClose }) {
  const { t } = useTranslation();
  const { lang } = useLanguage();

  // Close on Escape + lock scroll while open.
  useEffect(() => {
    if (!product) return undefined;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  const p = product ? getLocalized(product, lang) : null;

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={p.localizedName}
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-primary-950/50 backdrop-blur-md"
            onClick={onClose}
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 10 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            className="relative z-10 grid max-h-[88vh] w-full max-w-[56rem] overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-2xl md:grid-cols-[1fr_1.1fr]"
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              aria-label={t('products.modal.close')}
              className="absolute end-3 top-3 z-20 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-ink-muted shadow-sm backdrop-blur transition-colors duration-200 hover:border-plum-300 hover:text-primary-900"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Image panel */}
            <div className="relative bg-primary-50/40 border-b border-slate-100 md:border-b-0 md:border-e">
              <ProductVisual
                src={product.image}
                alt={p.localizedName}
                className="min-h-[220px] h-full md:min-h-full"
              />
            </div>

            {/* Details panel */}
            <div className="flex max-h-[88vh] flex-col overflow-y-auto p-6 sm:p-8 md:p-10">
              {/* Category */}
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-plum-500">
                {t(`products.filters.${product.category}`)}
              </span>

              {/* Title */}
              <h2 className="mt-3 text-xl font-bold leading-tight text-primary-900 sm:text-2xl">
                {p.localizedName}
              </h2>

              {/* Divider */}
              <span className="mt-4 block h-px w-12 bg-plum-300" />

              {/* Description */}
              <p className="mt-4 text-sm leading-relaxed text-ink-soft">
                {p.localizedDescription}
              </p>

              {/* Key Features */}
              <h3 className="mt-7 text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                {t('products.modal.keyFeatures')}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {p.localizedFeatures.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-plum-50 text-plum-600">
                      <Check className="h-3 w-3" strokeWidth={2.5} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                to="/contact"
                onClick={onClose}
                className="btn-primary group mt-8 w-full"
              >
                {t('products.modal.enquire')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

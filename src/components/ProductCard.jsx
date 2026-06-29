import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp } from '../animations/variants';
import { getLocalized } from '../data/products';
import useLanguage from '../hooks/useLanguage';
import ProductVisual from './ui/ProductVisual';

// Editorial product card — matches Home page card style (border-slate-200/80, shadow patterns, plum accents).
export default function ProductCard({ product, onSelect }) {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  const p = getLocalized(product, lang);

  return (
    <motion.button
      type="button"
      layout
      variants={fadeUp}
      onClick={() => onSelect(product)}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-start shadow-soft transition-all duration-500 ease-premium hover:border-plum-200 hover:shadow-card-hover hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-plum-500 focus-visible:ring-offset-2"
    >
      {/* Image Area */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-primary-50/40">
        <ProductVisual
          src={product.image}
          alt={p.localizedName}
          className="h-full w-full"
          imgClassName="transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col border-t border-slate-100 px-5 py-5">
        {/* Category label */}
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-plum-500">
          {t(`products.filters.${product.category}`)}
        </span>

        <h3 className="mt-2 text-[15px] font-bold leading-snug text-primary-900 transition-colors duration-300 group-hover:text-plum-700">
          {p.localizedName}
        </h3>

        <p className="mt-2 line-clamp-2 flex-1 text-[13px] leading-relaxed text-ink-muted">
          {p.localizedDescription}
        </p>

        {/* View details link */}
        <span className="mt-4 inline-flex items-center gap-1.5 text-[13px] font-semibold text-primary-900 transition-colors duration-300 group-hover:text-plum-600">
          {t('common.viewDetails')}
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
        </span>
      </div>
    </motion.button>
  );
}

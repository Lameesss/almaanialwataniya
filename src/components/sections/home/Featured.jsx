import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { products } from '../../../data/products';
import { productFilters } from '../../../data/categories';
import { staggerContainerFast, viewportOnce } from '../../../animations/variants';
import SectionHeading from '../../ui/SectionHeading';
import ProductCard from '../../ProductCard';
import ProductModal from '../../ProductModal';

// Curated showcase spanning all three categories.
const featuredIds = [
  'ultrasound-system',
  'hb112-color-doppler',
  'ua1020-bp-monitor',
  'electric-suction-machine',
  '4-motor-hospital-bed',
  'electric-wheelchair-6004',
  'nursing-trolley',
  'commode-chair',
  'first-aid-kit-hd803',
  'nitrile-gloves',
  'kn95-facemask',
  'luer-lock-syringe',
];

export default function Featured() {
  const { t } = useTranslation();
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState(null);

  const featuredPool = useMemo(
    () => featuredIds.map((id) => products.find((p) => p.id === id)).filter(Boolean),
    []
  );
  const filtered = useMemo(
    () =>
      active === 'all'
        ? featuredPool.slice(0, 8)
        : featuredPool.filter((p) => p.category === active).slice(0, 8),
    [active, featuredPool]
  );

  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        <div className="flex flex-col items-center gap-8">
          <SectionHeading
            eyebrow={t('home.featured.eyebrow')}
            title={t('home.featured.title')}
            subtitle={t('home.featured.subtitle')}
          />

          {/* Filter pills */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {productFilters.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActive(f.id)}
                className={`relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  active === f.id ? 'text-white' : 'text-ink-soft hover:text-primary-700'
                }`}
              >
                {active === f.id && (
                  <motion.span
                    layoutId="featured-pill"
                    className="absolute inset-0 rounded-full bg-primary-600 shadow-sm"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{t(`products.filters.${f.key}`)}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div
          layout
          variants={staggerContainerFast}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} onSelect={setSelected} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Link to="/products" className="btn-ghost group">
            {t('common.viewAll')}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
          </Link>
        </div>
      </div>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}

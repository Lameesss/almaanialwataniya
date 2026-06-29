import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, PackageSearch } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/ui/PageTransition';
import PageHero from '../components/ui/PageHero';
import useSeo from '../hooks/useSeo';
import { products, getLocalized } from '../data/products';
import { productFilters } from '../data/categories';
import { staggerContainerFast, fadeUp } from '../animations/variants';
import useLanguage from '../hooks/useLanguage';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

export default function Products() {
  const { t } = useTranslation();
  const { lang } = useLanguage();
  useSeo('nav.products', 'products.hero.subtitle');

  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [selected, setSelected] = useState(null);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesCategory = category === 'all' || p.category === category;
      if (!matchesCategory) return false;
      if (!q) return true;
      const loc = getLocalized(p, lang);
      return (
        loc.localizedName.toLowerCase().includes(q) ||
        loc.localizedDescription.toLowerCase().includes(q) ||
        p.name.en.toLowerCase().includes(q)
      );
    });
  }, [query, category, lang]);

  const hasFilters = query || category !== 'all';

  return (
    <PageTransition>
      <PageHero
        badge={t('products.hero.badge')}
        title={t('products.hero.title')}
        subtitle={t('products.hero.subtitle')}
      />

      <section className="section-pad bg-surface">
        <div className="container-px">
          {/* ── Controls Bar ── */}
          <div className="flex flex-col items-center gap-8">

            {/* Search – editorial underline input */}
            <div className="relative mx-auto w-full max-w-lg">
              <Search className="pointer-events-none absolute start-0 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-ink-muted" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t('products.search.placeholder')}
                aria-label={t('products.search.placeholder')}
                className="w-full border-b-2 border-primary-100 bg-transparent py-3 ps-8 pe-10 text-sm text-ink placeholder:text-ink-muted/60 transition-colors duration-300 focus:border-plum-500 focus:outline-none"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery('')}
                  aria-label={t('products.search.clear')}
                  className="absolute end-0 top-1/2 inline-flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-ink-muted transition-colors hover:bg-primary-50 hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Tabs – editorial underline style */}
            <div className="relative flex flex-wrap items-center justify-center gap-1 sm:gap-0">
              {productFilters.map((f) => {
                const isActive = category === f.id;
                return (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setCategory(f.id)}
                    className={`relative px-5 py-2.5 text-sm font-medium transition-colors duration-300 ${
                      isActive
                        ? 'text-primary-900'
                        : 'text-ink-muted hover:text-primary-700'
                    }`}
                  >
                    {t(`products.filters.${f.key}`)}
                    {isActive && (
                      <motion.span
                        layoutId="products-tab"
                        className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-plum-600"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                  </button>
                );
              })}
              {/* baseline */}
              <span className="absolute inset-x-0 -bottom-px h-px bg-primary-50" />
            </div>

            {/* Results Count */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-medium uppercase tracking-widest text-ink-muted">
                {t('products.search.resultsCount', { count: filtered.length })}
              </span>
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => {
                    setQuery('');
                    setCategory('all');
                  }}
                  className="text-xs font-semibold text-plum-600 underline underline-offset-2 transition-colors hover:text-plum-800"
                >
                  {t('products.search.clear')}
                </button>
              )}
            </div>
          </div>

          {/* ── Product Grid ── */}
          {filtered.length > 0 ? (
            <motion.div
              layout
              variants={staggerContainerFast}
              initial="hidden"
              animate="visible"
              className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((product) => (
                  <ProductCard key={product.id} product={product} onSelect={setSelected} />
                ))}
              </AnimatePresence>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-20 flex flex-col items-center text-center"
            >
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-2xl border border-primary-50 bg-primary-50/50 text-ink-muted">
                <PackageSearch className="h-9 w-9" strokeWidth={1.5} />
              </span>
              <p className="mt-5 text-lg font-semibold text-ink">
                {t('products.search.noResults')}
              </p>
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  setCategory('all');
                }}
                className="mt-4 text-sm font-semibold text-plum-600 underline underline-offset-2 transition-colors hover:text-plum-800"
              >
                {t('products.search.clear')}
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <ProductModal product={selected} onClose={() => setSelected(null)} />
    </PageTransition>
  );
}

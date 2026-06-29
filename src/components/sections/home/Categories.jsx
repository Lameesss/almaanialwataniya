import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { categories } from '../../../data/categories';
import { fadeUp, staggerContainer, viewportOnce } from '../../../animations/variants';
import Icon from '../../ui/Icon';

export default function Categories() {
  const { t } = useTranslation();

  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        {/* Section header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600">
              <span className="h-px w-5 bg-plum-500" />
              {t('home.categories.eyebrow')}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
              {t('home.categories.title')}
            </h2>
          </motion.div>
          <motion.p
            variants={fadeUp}
            className="max-w-md text-sm leading-relaxed text-ink-soft lg:text-base"
          >
            {t('home.categories.subtitle')}
          </motion.p>
        </motion.div>

        {/* Category rows — divided by light rules */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="divide-y divide-slate-100"
        >
          {categories.map((cat, i) => (
            <motion.div key={cat.id} variants={fadeUp}>
              <Link
                to="/products"
                id={`category-row-${cat.id}`}
                className="group flex items-center gap-6 py-7 transition-all duration-300 sm:py-8 lg:gap-10"
              >
                {/* Index number */}
                <span className="hidden w-10 flex-none text-right text-sm font-bold text-primary-200 transition-colors duration-300 group-hover:text-plum-500 sm:block">
                  0{i + 1}
                </span>

                {/* Icon badge */}
                <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl border border-slate-100 bg-primary-50 text-primary-700 transition-all duration-300 group-hover:border-plum-200 group-hover:bg-plum-50 group-hover:text-plum-600">
                  <Icon name={cat.icon} className="h-5 w-5" strokeWidth={1.5} />
                </span>

                {/* Text content */}
                <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:gap-10">
                  <h3 className="text-lg font-bold text-primary-900 transition-colors duration-300 group-hover:text-plum-700 lg:w-52 lg:flex-none lg:text-xl">
                    {t(`home.categories.items.${cat.key}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-ink-muted transition-colors duration-300 group-hover:text-ink-soft lg:flex-1">
                    {t(`home.categories.items.${cat.key}.desc`)}
                  </p>
                </div>

                {/* Category image (small, right-end) */}
                <div className="hidden h-16 w-16 flex-none overflow-hidden rounded-xl border border-slate-100 bg-primary-50 lg:block">
                  <img
                    src={cat.image}
                    alt=""
                    aria-hidden="true"
                    loading="lazy"
                    className="h-full w-full object-contain p-2 opacity-70 transition-all duration-500 group-hover:opacity-100"
                  />
                </div>

                {/* Arrow */}
                <ArrowUpRight className="h-5 w-5 flex-none text-primary-200 transition-all duration-300 group-hover:text-plum-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { Award, ShieldCheck, BadgeCheck, FileCheck2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, staggerContainer, viewportOnce } from '../../../animations/variants';

const items = [
  { key: 'iso13485', Icon: Award },
  { key: 'iso9001', Icon: ShieldCheck },
  { key: 'ce', Icon: BadgeCheck },
  { key: 'fda', Icon: FileCheck2 },
];

export default function Certifications() {
  const { t } = useTranslation();

  return (
    <section className="section-pad bg-white">
      <div className="container-px">
        {/* Section header — compact, centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600">
            <span className="h-px w-5 bg-plum-500" />
            {t('home.certifications.eyebrow')}
            <span className="h-px w-5 bg-plum-500" />
          </span>
          <h2 className="mt-3 text-2xl font-extrabold text-primary-900 sm:text-3xl lg:text-4xl">
            {t('home.certifications.title')}
          </h2>
          <p className="mt-3 mx-auto max-w-xl text-sm leading-relaxed text-ink-soft sm:text-base">
            {t('home.certifications.subtitle')}
          </p>
        </motion.div>

        {/* Certification badges — horizontal row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4"
        >
          {items.map(({ key, Icon: Ic }) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white px-6 py-5 shadow-soft transition-all duration-300 hover:border-plum-200 hover:shadow-card"
            >
              <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50 text-primary-800 transition-colors duration-300 group-hover:bg-plum-50 group-hover:text-plum-600">
                <Ic className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <div className="text-start">
                <p className="text-base font-bold text-primary-900">
                  {t(`home.certifications.items.${key}.title`)}
                </p>
                <p className="mt-0.5 max-w-[14rem] text-xs leading-relaxed text-ink-muted">
                  {t(`home.certifications.items.${key}.desc`)}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

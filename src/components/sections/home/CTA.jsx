import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Phone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, staggerContainer, viewportOnce } from '../../../animations/variants';

export default function CTA() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-white">
      {/* Soft background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary-50/60 via-white to-plum-50/40" />
      <div className="pointer-events-none absolute -end-24 top-0 h-64 w-64 rounded-full bg-plum-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -start-24 bottom-0 h-64 w-64 rounded-full bg-primary-100/40 blur-3xl" />

      <div className="container-px relative py-20 sm:py-24 lg:py-28">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Decorative pill */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mb-6">
            <span className="h-px w-10 bg-plum-200" />
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-plum-200 bg-plum-50 text-plum-600">
              <Phone className="h-3.5 w-3.5" />
            </span>
            <span className="h-px w-10 bg-plum-200" />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl font-extrabold leading-tight text-primary-900 sm:text-4xl lg:text-5xl"
          >
            {t('home.cta.title')}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {t('home.cta.subtitle')}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link
              to="/contact"
              id="cta-main-button"
              className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-primary-900 px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:bg-primary-800 hover:-translate-y-0.5 hover:shadow-xl sm:w-auto"
            >
              {t('home.cta.button')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Link>
            <a
              href="tel:+218910200962"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-8 py-4 text-sm font-semibold text-ink-soft shadow-sm transition-all duration-300 hover:border-plum-300 hover:text-plum-700 hover:-translate-y-0.5 hover:shadow-md sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {t('contact.info.phone.value')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

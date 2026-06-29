import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { fadeUp, fadeSide, staggerContainer, viewportOnce } from '../../../animations/variants';
import useLanguage from '../../../hooks/useLanguage';

const itemKeys = ['quality', 'partnerships', 'distribution', 'pricing', 'support', 'trusted'];

export default function WhyUs() {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="container-px">
        <div className="flex flex-col gap-16 lg:flex-row lg:gap-20">

          {/* Left — editorial section label + number */}
          <motion.div
            variants={fadeSide(isRtl ? 40 : -40)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:w-80 lg:flex-none"
          >
            <span className="block text-[5rem] font-black leading-none text-primary-50 select-none sm:text-[8rem]">
              02
            </span>
            <div className="-mt-6 sm:-mt-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600">
                <span className="h-px w-5 bg-plum-500" />
                {t('home.whyUs.eyebrow')}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary-900 sm:text-4xl">
                {t('home.whyUs.title')}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
                {t('home.whyUs.subtitle')}
              </p>
            </div>
          </motion.div>

          {/* Right — numbered list of reasons */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex-1 divide-y divide-slate-100"
          >
            {itemKeys.map((key, i) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="group flex items-start gap-6 py-6 transition-colors duration-200 hover:bg-slate-50/60 sm:px-4 sm:rounded-xl"
              >
                <span className="mt-0.5 min-w-[2rem] text-sm font-bold text-primary-200 transition-colors duration-300 group-hover:text-plum-400">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-base font-bold text-primary-900 sm:text-lg">
                    {t(`home.whyUs.items.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">
                    {t(`home.whyUs.items.${key}.desc`)}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

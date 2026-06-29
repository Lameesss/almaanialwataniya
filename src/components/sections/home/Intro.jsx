import { motion } from 'framer-motion';
import { Globe2, Stethoscope, Truck, LifeBuoy } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, fadeSide, staggerContainer, viewportOnce } from '../../../animations/variants';
import useLanguage from '../../../hooks/useLanguage';

const featureIcons = {
  sourcing: Globe2,
  expertise: Stethoscope,
  distribution: Truck,
  support: LifeBuoy,
};

const features = ['sourcing', 'expertise', 'distribution', 'support'];

export default function Intro() {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <section className="section-pad relative overflow-hidden bg-white">
      {/* Thin top rule */}
      <div className="container-px">
        {/* Section label row */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col gap-16 lg:flex-row lg:items-start lg:gap-24"
        >
          {/* Left — editorial number + heading */}
          <motion.div
            variants={fadeSide(isRtl ? 40 : -40)}
            className="lg:w-[42%] lg:flex-none"
          >
            <span className="block text-[5rem] font-black leading-none text-primary-50 select-none sm:text-[8rem]">
              01
            </span>
            <div className="-mt-6 sm:-mt-8">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600">
                <span className="h-px w-5 bg-plum-500" />
                {t('home.intro.eyebrow')}
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
                {t('home.intro.title')}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg">
                {t('home.intro.paragraph1')}
              </p>
              <p className="mt-4 text-base leading-relaxed text-ink-soft">
                {t('home.intro.paragraph2')}
              </p>
            </div>
          </motion.div>

          {/* Right — 2×2 feature grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid flex-1 grid-cols-2 gap-3 sm:gap-6"
          >
            {features.map((key, i) => {
              const Ic = featureIcons[key];
              return (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 sm:p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card ${
                    i === 0 ? 'sm:col-span-1' : ''
                  }`}
                >
                  {/* Hover accent top bar */}
                  <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-plum-500 transition-transform duration-500 group-hover:scale-x-100" />
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-800 transition-colors duration-300 group-hover:bg-plum-50 group-hover:text-plum-600">
                    <Ic className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-4 text-base font-bold text-primary-900">
                    {t(`home.intro.features.${key}.title`)}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                    {t(`home.intro.features.${key}.desc`)}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

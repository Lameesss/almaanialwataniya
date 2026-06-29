import { motion } from 'framer-motion';
import { Globe2, SearchCheck, Ship, HeartHandshake } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, staggerContainer, viewportOnce } from '../../../animations/variants';

const steps = [
  { key: 'sourcing', Icon: Globe2 },
  { key: 'inspection', Icon: SearchCheck },
  { key: 'logistics', Icon: Ship },
  { key: 'distribution', Icon: HeartHandshake },
];

export default function Process() {
  const { t } = useTranslation();

  return (
    <section className="section-pad relative overflow-hidden bg-white">
      <div className="container-px relative">
        {/* Section heading — centered */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mb-16 max-w-2xl text-center sm:mb-20"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600"
          >
            <span className="h-px w-5 bg-plum-300" />
            {t('about.process.eyebrow')}
            <span className="h-px w-5 bg-plum-300" />
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-3xl font-extrabold leading-tight text-primary-900 sm:text-4xl lg:text-5xl"
          >
            {t('about.process.title')}
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {t('about.process.subtitle')}
          </motion.p>
        </motion.div>

        {/* Timeline-style process steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="relative"
        >
          {/* Vertical connecting line — desktop */}
          <div className="absolute start-[2.25rem] top-0 hidden h-full w-px bg-gradient-to-b from-plum-200 via-primary-200 to-transparent lg:block" />

          {/* Horizontal connecting line — mobile/tablet */}
          {/* On mobile, we use vertical layout, so a vertical line works. Hidden on desktop. */}

          <div className="flex flex-col gap-8 lg:gap-0">
            {steps.map(({ key, Icon: Ic }, i) => {
              const isEven = i % 2 === 0;
              return (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className="relative flex flex-col lg:flex-row lg:items-center lg:gap-0"
                >
                  {/* Step number + icon — always left on mobile, alternates on desktop */}
                  <div className={`flex items-start gap-5 lg:w-1/2 ${!isEven ? 'lg:order-2 lg:flex-row-reverse lg:text-end' : ''} lg:items-center`}>
                    {/* Step dot on timeline */}
                    <div className="relative z-10 flex flex-none flex-col items-center">
                      <span className="flex h-[4.5rem] w-[4.5rem] items-center justify-center rounded-2xl border border-slate-100 bg-white shadow-soft transition-all duration-300 group-hover:shadow-card">
                        <Ic className="h-7 w-7 text-plum-600" strokeWidth={1.5} />
                      </span>
                    </div>

                    {/* Step content — mobile and tablet */}
                    <div className="flex-1 lg:hidden">
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-900 text-[11px] font-bold text-white">
                          {i + 1}
                        </span>
                        <h3 className="text-lg font-bold text-primary-900">
                          {t(`about.process.steps.${key}.title`)}
                        </h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                        {t(`about.process.steps.${key}.desc`)}
                      </p>
                    </div>
                  </div>

                  {/* Step content — desktop only */}
                  <div className={`hidden lg:flex lg:w-1/2 lg:flex-col ${isEven ? 'lg:ps-12' : 'lg:pe-12 lg:items-end lg:text-end'}`}>
                    <div className="max-w-md">
                      <div className={`flex items-center gap-3 ${!isEven ? 'justify-end' : ''}`}>
                        <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary-900 text-[11px] font-bold text-white ${!isEven ? 'order-2' : ''}`}>
                          {i + 1}
                        </span>
                        <h3 className="text-xl font-bold text-primary-900">
                          {t(`about.process.steps.${key}.title`)}
                        </h3>
                      </div>
                      <p className="mt-2 text-base leading-relaxed text-ink-soft">
                        {t(`about.process.steps.${key}.desc`)}
                      </p>
                    </div>
                  </div>

                  {/* Spacer for the spacing between steps on desktop */}
                  {i < steps.length - 1 && (
                    <div className="hidden lg:block lg:h-16" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

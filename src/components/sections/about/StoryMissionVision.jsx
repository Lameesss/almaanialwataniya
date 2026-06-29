import { motion } from 'framer-motion';
import { Target, Eye, Quote } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, fadeSide, staggerContainer, viewportOnce } from '../../../animations/variants';
import useLanguage from '../../../hooks/useLanguage';

export default function StoryMissionVision() {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <>
      {/* ── Our Story ────────────────────────────────────────── */}
      <section className="section-pad relative overflow-hidden bg-white">
        {/* Subtle grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(22,16,24,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,16,24,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        <div className="container-px relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-12 lg:flex-row lg:items-start lg:gap-20"
          >
            {/* Left — editorial number + story text */}
            <motion.div
              variants={fadeSide(isRtl ? 40 : -40)}
              className="lg:w-[55%] lg:flex-none"
            >
              <span className="block text-[5rem] font-black leading-none text-primary-50 select-none sm:text-[8rem]">
                01
              </span>
              <div className="-mt-6 sm:-mt-10">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600">
                  <span className="h-px w-5 bg-plum-500" />
                  {t('about.story.eyebrow')}
                </span>
                <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
                  {t('about.story.title')}
                </h2>
                <p className="mt-6 text-base leading-relaxed text-ink-soft sm:text-lg">
                  {t('about.story.paragraph1')}
                </p>
                <p className="mt-4 text-base leading-relaxed text-ink-soft">
                  {t('about.story.paragraph2')}
                </p>

                {/* Pull-quote */}
                <motion.blockquote
                  variants={fadeUp}
                  className="group relative mt-8 overflow-hidden rounded-2xl border border-primary-100 bg-gradient-to-br from-primary-50/80 to-plum-50/40 p-6 sm:p-8"
                >
                  <Quote className="absolute -top-1 start-5 h-10 w-10 text-plum-200/60 rtl:-scale-x-100 sm:h-12 sm:w-12" />
                  <p className="relative text-base font-medium italic leading-relaxed text-primary-800 sm:text-lg">
                    {t('about.story.highlight')}
                  </p>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-plum-500 to-plum-300 transition-transform duration-700 group-hover:scale-x-100" />
                </motion.blockquote>
              </div>
            </motion.div>

            {/* Right — Mission + Vision stacked cards */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-1 flex-col gap-6"
            >
              {[
                {
                  key: 'mission',
                  Icon: Target,
                  gradient: 'from-primary-900 to-primary-800',
                  iconBg: 'bg-white/15',
                  borderColor: 'border-primary-800',
                  accentBar: 'bg-primary-700',
                },
                {
                  key: 'vision',
                  Icon: Eye,
                  gradient: 'from-plum-700 to-plum-600',
                  iconBg: 'bg-white/15',
                  borderColor: 'border-plum-500',
                  accentBar: 'bg-plum-500',
                },
              ].map(({ key, Icon: Ic, gradient, iconBg, accentBar }) => (
                <motion.div
                  key={key}
                  variants={fadeUp}
                  className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 shadow-card transition-all duration-500 hover:shadow-glow sm:p-8`}
                >
                  {/* Animated accent bar on top */}
                  <span className={`absolute inset-x-0 top-0 h-1 ${accentBar} opacity-60`} />

                  {/* Decorative corner number */}
                  <span className="absolute -end-2 -top-4 text-[5rem] font-black leading-none text-white/[0.04] select-none sm:text-[6rem]">
                    {key === 'mission' ? 'M' : 'V'}
                  </span>

                  <span className={`relative z-10 inline-flex h-12 w-12 items-center justify-center rounded-xl ${iconBg} text-white`}>
                    <Ic className="h-6 w-6" strokeWidth={1.5} />
                  </span>
                  <h3 className="relative z-10 mt-5 text-xl font-bold text-white sm:text-2xl">
                    {t(`about.${key}.title`)}
                  </h3>
                  <p className="relative z-10 mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                    {t(`about.${key}.desc`)}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

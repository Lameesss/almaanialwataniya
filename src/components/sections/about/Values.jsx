import { motion } from 'framer-motion';
import { ShieldCheck, Sparkles, Lightbulb, Anchor, Gem, Users } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, staggerContainer, viewportOnce } from '../../../animations/variants';

const items = [
  { key: 'integrity', Icon: ShieldCheck },
  { key: 'excellence', Icon: Sparkles },
  { key: 'innovation', Icon: Lightbulb },
  { key: 'reliability', Icon: Anchor },
  { key: 'quality', Icon: Gem },
  { key: 'customerFocus', Icon: Users },
];

export default function Values() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-primary-900 py-20 sm:py-24 lg:py-32">
      {/* Background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      />
      {/* Plum glow */}
      <div className="pointer-events-none absolute -end-40 top-0 h-[30rem] w-[30rem] rounded-full bg-plum-700/20 blur-3xl" />
      <div className="pointer-events-none absolute -start-32 bottom-0 h-[24rem] w-[24rem] rounded-full bg-plum-800/15 blur-3xl" />

      <div className="container-px relative">
        {/* Section header — left-aligned editorial style */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 max-w-2xl sm:mb-16"
        >
          <motion.span
            variants={fadeUp}
            className="block text-[5rem] font-black leading-none text-white/[0.04] select-none sm:text-[8rem]"
          >
            02
          </motion.span>
          <div className="-mt-6 sm:-mt-10">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-300"
            >
              <span className="h-px w-5 bg-plum-400" />
              {t('about.values.eyebrow')}
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl"
            >
              {t('about.values.title')}
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg"
            >
              {t('about.values.subtitle')}
            </motion.p>
          </div>
        </motion.div>

        {/* Values grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5"
        >
          {items.map(({ key, Icon: Ic }, i) => (
            <motion.div
              key={key}
              variants={fadeUp}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.04] p-6 backdrop-blur-sm transition-all duration-500 hover:border-plum-500/30 hover:bg-white/[0.08] sm:p-7"
            >
              {/* Top accent line — reveals on hover */}
              <span className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 bg-gradient-to-r from-plum-400 to-plum-600 transition-transform duration-500 group-hover:scale-x-100" />

              {/* Index number */}
              <span className="absolute end-5 top-4 text-4xl font-black text-white/[0.04] transition-colors duration-500 group-hover:text-plum-500/10 sm:text-5xl">
                {String(i + 1).padStart(2, '0')}
              </span>

              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-plum-500/15 text-plum-300 transition-all duration-300 group-hover:bg-plum-500/25 group-hover:text-plum-200">
                <Ic className="h-5 w-5" strokeWidth={1.5} />
              </span>

              <h3 className="mt-5 text-lg font-bold text-white">
                {t(`about.values.items.${key}.title`)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/50">
                {t(`about.values.items.${key}.desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer } from '../../animations/variants';

// Shared hero banner for inner pages (About, Products, Contact).
// Light surface with subtle tints; color is carried by text accents.
export default function PageHero({ badge, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-surface pt-28 pb-14 sm:pt-36 sm:pb-20">
      {/* subtle light decoration */}
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.5]" />
      <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-plum-100/40 blur-3xl" />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container-px relative flex max-w-3xl flex-col items-center gap-4 text-center sm:gap-5"
      >
        {badge && (
          <motion.span variants={fadeUp} className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-plum-500" />
            {badge}
          </motion.span>
        )}
        <motion.h1 variants={fadeUp} className="heading-1 text-ink">
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p variants={fadeUp} className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
            {subtitle}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}

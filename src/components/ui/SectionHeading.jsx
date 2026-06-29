import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, viewportOnce } from '../../animations/variants';

// Reusable centered section heading: eyebrow + title + optional subtitle.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  light = false,
  className = '',
}) {
  const alignment =
    align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-start';

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      className={`flex max-w-3xl flex-col gap-4 ${alignment} ${className}`}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className={
            light
              ? 'inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white/90'
              : 'eyebrow'
          }
        >
          <span className={`h-1.5 w-1.5 rounded-full ${light ? 'bg-teal-300' : 'bg-teal-500'}`} />
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        variants={fadeUp}
        className={`heading-2 ${light ? 'text-white' : 'text-ink'}`}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`text-base leading-relaxed sm:text-lg ${light ? 'text-white/80' : 'text-ink-soft'
            }`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}

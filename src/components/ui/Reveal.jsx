import { motion } from 'framer-motion';
import { fadeUp, viewportOnce } from '../../animations/variants';

// Scroll-reveal wrapper. Defaults to a premium fade-up.
export default function Reveal({
  children,
  variants = fadeUp,
  className = '',
  as = 'div',
  delay,
  ...rest
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      transition={delay !== undefined ? { delay } : undefined}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

// Animates a number from 0 to `end` once the element scrolls into view.
// Returns [ref, value]. Honors prefers-reduced-motion.
export default function useCountUp(end, { duration = 1800 } = {}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return undefined;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setValue(end);
      return undefined;
    }

    let raf;
    let start;
    const step = (timestamp) => {
      if (start === undefined) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      // easeOutExpo for a premium settle
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(Math.round(eased * end));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, end, duration]);

  return [ref, value];
}

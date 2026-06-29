// Centralized Framer Motion variants for a consistent premium motion language.
// Durations live in the 0.4s–0.8s range with an easeOut premium curve.

const EASE = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE },
  },
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: EASE } },
};

export const fadeDown = {
  hidden: { opacity: 0, y: -24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.55, ease: EASE },
  },
};

// Slide from the inline-start side; works for both LTR and RTL since
// callers pass the appropriate sign.
export const fadeSide = (x = 40) => ({
  hidden: { opacity: 0, x },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE } },
});

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.08 },
  },
};

export const staggerContainerFast = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

export const hoverLift = {
  rest: { y: 0 },
  hover: { y: -8, transition: { duration: 0.4, ease: EASE } },
};

// Default viewport config for scroll-reveal sections.
export const viewportOnce = { once: true, amount: 0.25 };
export const viewportOnceSoft = { once: true, amount: 0.15 };

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Package, CalendarClock, BadgeCheck, Heart, Activity, ShieldCheck, Truck, Thermometer } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, staggerContainer } from '../../../animations/variants';
import { useState, useEffect, useRef } from 'react';

/* ── Animated ECG Line ─────────────────────────────────────── */
function EcgLine() {
  const pathRef = useRef(null);
  const [length, setLength] = useState(0);

  useEffect(() => {
    if (pathRef.current) {
      const l = pathRef.current.getTotalLength();
      setLength(l);
    }
  }, []);

  return (
    <svg viewBox="0 0 400 80" className="w-full h-full" preserveAspectRatio="none">
      {/* Grid lines — subtle */}
      {[20, 40, 60].map((y) => (
        <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="currentColor" className="text-primary-100" strokeWidth="0.5" />
      ))}
      {[50, 100, 150, 200, 250, 300, 350].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="80" stroke="currentColor" className="text-primary-100" strokeWidth="0.5" />
      ))}
      {/* ECG trace */}
      <motion.path
        ref={pathRef}
        d="M0,40 L30,40 L40,40 L50,38 L55,42 L60,40 L80,40 L90,40 L95,25 L100,60 L105,10 L110,70 L115,30 L120,40 L140,40 L160,40 L170,38 L175,42 L180,40 L200,40 L210,40 L215,25 L220,60 L225,10 L230,70 L235,30 L240,40 L260,40 L280,40 L290,38 L295,42 L300,40 L320,40 L330,40 L335,25 L340,60 L345,10 L350,70 L355,30 L360,40 L380,40 L400,40"
        fill="none"
        stroke="url(#ecgGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut', delay: 0.8 }}
      />
      {/* Glow line (behind) */}
      <motion.path
        d="M0,40 L30,40 L40,40 L50,38 L55,42 L60,40 L80,40 L90,40 L95,25 L100,60 L105,10 L110,70 L115,30 L120,40 L140,40 L160,40 L170,38 L175,42 L180,40 L200,40 L210,40 L215,25 L220,60 L225,10 L230,70 L235,30 L240,40 L260,40 L280,40 L290,38 L295,42 L300,40 L320,40 L330,40 L335,25 L340,60 L345,10 L350,70 L355,30 L360,40 L380,40 L400,40"
        fill="none"
        stroke="url(#ecgGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.15"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.15 }}
        transition={{ duration: 3, ease: 'easeInOut', delay: 0.8 }}
      />
      <defs>
        <linearGradient id="ecgGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#6b2d4a" />
          <stop offset="50%" stopColor="#a05a82" />
          <stop offset="100%" stopColor="#6b2d4a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/* ── Animated Counter ──────────────────────────────────────── */
function AnimatedNumber({ target, suffix = '', duration = 2000, delay = 0 }) {
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStarted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target, duration]);

  return <>{value}{suffix}</>;
}

/* ── Pulsing Dot ───────────────────────────────────────────── */
function PulsingDot({ color = 'bg-plum-500' }) {
  return (
    <span className="relative flex h-2.5 w-2.5">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full ${color} opacity-60`} />
      <span className={`relative inline-flex h-2.5 w-2.5 rounded-full ${color}`} />
    </span>
  );
}

/* ── Medical Dashboard Widget ──────────────────────────────── */
function MedicalDashboard() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-[22rem] sm:max-w-md"
    >
      {/* Main dashboard card */}
      <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_80px_-16px_rgba(22,16,24,0.12)]">

        {/* Header row */}
        <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 sm:px-6 sm:py-4">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-plum-50 text-plum-600">
              <Activity className="h-4.5 w-4.5" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-sm font-bold text-primary-900">{t('home.hero.floating.uptimeValue')}</p>
              <p className="text-[11px] font-medium text-ink-muted">{t('home.hero.floating.uptime')}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <PulsingDot color="bg-green-500" />
            <span className="text-[10px] font-semibold uppercase tracking-wider text-green-600">Live</span>
          </div>
        </div>

        {/* Vitals grid */}
        <div className="grid grid-cols-3 divide-x divide-slate-100 rtl:divide-x-reverse">
          {/* Heart Rate */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex flex-col items-center gap-1 px-2 py-4 sm:px-4 sm:py-5"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-plum-50 text-plum-600">
              <Heart className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <p className="mt-1 text-xl sm:text-2xl font-black tabular-nums text-primary-900">
              <AnimatedNumber target={72} delay={900} />
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">HR · bpm</p>
          </motion.div>

          {/* SpO2 */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.5 }}
            className="flex flex-col items-center gap-1 px-4 py-5"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
              <Thermometer className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <p className="mt-1 text-2xl font-black tabular-nums text-primary-900">
              <AnimatedNumber target={98} delay={1100} suffix="%" />
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">SpO₂</p>
          </motion.div>

          {/* NIBP */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex flex-col items-center gap-1 px-4 py-5"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-plum-50 text-plum-600">
              <Activity className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <p className="mt-1 text-2xl font-black tabular-nums text-primary-900">
              120<span className="text-lg text-ink-muted">/80</span>
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-ink-muted">NIBP</p>
          </motion.div>
        </div>

        {/* ECG Graph */}
        <div className="border-t border-slate-100 px-5 py-3">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-plum-500">ECG Monitor</span>
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-plum-400 animate-pulse" />
              <span className="text-[10px] font-medium text-ink-muted">Recording</span>
            </span>
          </div>
          <div className="h-16">
            <EcgLine />
          </div>
        </div>

        {/* Bottom stats row */}
        <div className="grid grid-cols-2 divide-x divide-slate-100 rtl:divide-x-reverse border-t border-slate-100">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.5 }}
            className="flex items-center gap-3 px-5 py-4"
          >
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-primary-900 text-white">
              <Truck className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-lg font-extrabold text-primary-900">{t('home.hero.floating.deliveryValue')}</p>
              <p className="text-[10px] font-medium text-ink-muted">{t('home.hero.floating.delivery')}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="flex items-center gap-3 px-5 py-4"
          >
            <span className="inline-flex h-9 w-9 flex-none items-center justify-center rounded-xl bg-plum-600 text-white">
              <ShieldCheck className="h-4 w-4" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-lg font-extrabold text-primary-900">{t('home.hero.floating.supportValue')}</p>
              <p className="text-[10px] font-medium text-ink-muted">{t('home.hero.floating.support')}</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating badge — top-right */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -top-4 -end-2 sm:-top-6 sm:-end-5 z-10 flex items-center gap-2 rounded-xl sm:rounded-2xl border border-plum-200 bg-white px-3 py-2 sm:px-4 sm:py-2.5 shadow-lg"
      >
        <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-plum-600 text-white">
          <BadgeCheck className="h-3.5 w-3.5" strokeWidth={2} />
        </span>
        <div>
          <p className="text-xs font-bold text-primary-900">ISO · CE · FDA</p>
          <p className="text-[9px] font-medium text-plum-600">Globally Certified</p>
        </div>
      </motion.div>

      {/* Floating card — bottom-left */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, x: -10 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 2.0, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -bottom-6 -start-2 sm:-bottom-8 sm:-start-5 z-10 flex items-center gap-3 rounded-xl sm:rounded-2xl border border-slate-200 bg-white px-3 py-2.5 sm:px-4 sm:py-3 shadow-lg"
      >
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary-900 text-white">
          <Package className="h-4 w-4" strokeWidth={1.8} />
        </span>
        <div>
          <p className="text-sm font-extrabold text-primary-900">500+</p>
          <p className="text-[9px] font-medium text-ink-muted">Medical Products</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Hero trust stat items ─────────────────────────────────── */
const trustStats = [
  { icon: Package, valueKey: '500+', labelKey: 'home.stats.items.products' },
  { icon: CalendarClock, valueKey: '10+', labelKey: 'home.stats.items.experience' },
  { icon: BadgeCheck, valueKey: 'ISO', labelKey: 'home.hero.floating.uptime' },
];

/* ── Hero Section ──────────────────────────────────────────── */
export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-white">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(22,16,24,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,16,24,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Soft plum glow — top-right */}
      <div className="pointer-events-none absolute -top-32 -end-32 h-[28rem] w-[28rem] rounded-full bg-plum-100/60 blur-3xl" />
      {/* Soft primary glow — bottom-left */}
      <div className="pointer-events-none absolute -bottom-16 -start-16 h-[22rem] w-[22rem] rounded-full bg-primary-50/80 blur-3xl" />

      <div className="container-px relative flex min-h-[100svh] flex-col justify-center pt-24 pb-8 sm:pt-28 sm:pb-0 lg:pt-32">
        {/* Two-column layout */}
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Left — Text content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-2xl lg:flex-1"
          >
            {/* Eyebrow badge */}
            <motion.div variants={fadeUp} className="flex items-center gap-3">
              <span className="flex h-2 w-2 flex-none relative">
                <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-plum-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-plum-500" />
              </span>
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum-600">
                {t('home.hero.badge')}
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              variants={fadeUp}
              className="mt-7 text-[2.2rem] font-extrabold leading-[1.07] tracking-tight text-primary-900 sm:text-5xl md:text-[3.4rem] lg:text-[3.8rem]"
            >
              {t('home.hero.title').split('&')[0].trim()}
              {t('home.hero.title').includes('&') && (
                <>
                  {' '}&{' '}
                  <span className="text-plum-600">
                    {t('home.hero.title').split('&')[1].trim()}
                  </span>
                </>
              )}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeUp}
              className="mt-7 max-w-xl text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              {t('home.hero.subtitle')}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeUp}
              className="mt-10 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                to="/products"
                id="hero-cta-primary"
                className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-800 hover:-translate-y-0.5 hover:shadow-lg"
              >
                {t('home.hero.ctaPrimary')}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Link>
              <Link
                to="/contact"
                id="hero-cta-secondary"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-soft shadow-sm transition-all duration-300 hover:border-plum-300 hover:text-plum-700 hover:-translate-y-0.5 hover:shadow-md"
              >
                {t('home.hero.ctaSecondary')}
              </Link>
            </motion.div>
          </motion.div>

          {/* Right — Medical Dashboard */}
          <div className="relative flex-shrink-0 w-full max-w-[22rem] sm:max-w-md lg:max-w-[440px] xl:max-w-[480px] mb-8 sm:mb-0">
            <MedicalDashboard />
          </div>
        </div>

        {/* Trust Stats Strip — bottom of hero, light separator */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 sm:mt-20 border-t border-slate-100"
        >
          <div className="grid grid-cols-3 divide-x divide-slate-100 rtl:divide-x-reverse overflow-hidden">
            {trustStats.map(({ icon: Ic, valueKey, labelKey }, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 px-3 py-6 text-center sm:flex-row sm:items-center sm:gap-4 sm:text-start sm:px-6 sm:py-8"
              >
                <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl border border-slate-100 bg-primary-50 text-plum-600">
                  <Ic className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div>
                  <p className="text-xl font-extrabold text-primary-900 sm:text-3xl">{valueKey}</p>
                  <p className="mt-0.5 text-[11px] sm:text-xs font-medium text-ink-muted">{t(labelKey)}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

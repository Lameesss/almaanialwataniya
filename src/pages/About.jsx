import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/ui/PageTransition';
import useSeo from '../hooks/useSeo';
import StoryMissionVision from '../components/sections/about/StoryMissionVision';
import Values from '../components/sections/about/Values';
import Process from '../components/sections/about/Process';
import QualityPartnerships from '../components/sections/about/QualityPartnerships';
import CTA from '../components/sections/home/CTA';
import { fadeUp, staggerContainer } from '../animations/variants';

export default function About() {
  const { t } = useTranslation();
  useSeo('nav.about', 'about.hero.subtitle');

  return (
    <PageTransition>
      {/* ── Custom About Hero ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-white pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24">
        {/* Grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(22,16,24,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,16,24,1) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Soft plum glow */}
        <div className="pointer-events-none absolute -end-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-plum-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -start-24 bottom-0 h-[22rem] w-[22rem] rounded-full bg-primary-50/80 blur-3xl" />

        {/* Large decorative text */}
        <div className="pointer-events-none absolute inset-0 flex items-end justify-end overflow-hidden">
          <span className="select-none pe-6 pb-2 text-[8rem] font-black leading-none text-primary-50 sm:text-[12rem] lg:text-[16rem]">
            ABOUT
          </span>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="container-px relative flex max-w-4xl flex-col items-start gap-5"
        >
          {/* Badge */}
          <motion.div variants={fadeUp} className="flex items-center gap-3">
            <span className="flex h-2 w-2 flex-none relative">
              <span className="absolute inline-flex h-2 w-2 animate-ping rounded-full bg-plum-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-plum-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-plum-600">
              {t('about.hero.badge')}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={fadeUp}
            className="text-[2rem] font-extrabold leading-[1.08] text-primary-900 sm:text-4xl md:text-5xl lg:text-[3.5rem]"
          >
            {t('about.hero.title')}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg"
          >
            {t('about.hero.subtitle')}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            className="mt-4 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              to="/products"
              className="group inline-flex items-center justify-center gap-2.5 rounded-xl bg-primary-900 px-7 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:bg-primary-800 hover:-translate-y-0.5 hover:shadow-lg"
            >
              {t('common.exploreProducts')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-semibold text-ink-soft shadow-sm transition-all duration-300 hover:border-plum-300 hover:text-plum-700 hover:-translate-y-0.5 hover:shadow-md"
            >
              {t('common.contactUs')}
            </Link>
          </motion.div>
        </motion.div>

        {/* Bottom border */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-slate-100" />
      </section>

      <StoryMissionVision />
      <Values />
      <Process />
      <QualityPartnerships />
      <CTA />
    </PageTransition>
  );
}

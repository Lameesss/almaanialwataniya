import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Globe2, ArrowUpRight } from 'lucide-react';
import { fadeUp, staggerContainer, viewportOnce } from '../../../animations/variants';

// Partner data with accent tones for visual variety
const partners = [
  { name: 'MediCore',   specialty: 'Diagnostic Systems',       size: 'lg' },
  { name: 'VitaTech',   specialty: 'Patient Monitoring',       size: 'sm' },
  { name: 'NovaHealth', specialty: 'Surgical Equipment',       size: 'sm' },
  { name: 'PulseLine',  specialty: 'Cardiology Devices',       size: 'md' },
  { name: 'CareGenix',  specialty: 'Mother & Child Products',  size: 'md' },
  { name: 'BioNexus',   specialty: 'Lab & Pathology',          size: 'sm' },
  { name: 'AccuMed',    specialty: 'Clinical Consumables',     size: 'sm' },
  { name: 'HelioCare',  specialty: 'Rehabilitation',           size: 'lg' },
];

// Colour rotation for the letter initials — monochrome + plum only
const tones = [
  { bg: 'bg-primary-900',  text: 'text-white' },
  { bg: 'bg-primary-50',   text: 'text-primary-900' },
  { bg: 'bg-plum-600',     text: 'text-white' },
  { bg: 'bg-primary-100',  text: 'text-primary-900' },
  { bg: 'bg-plum-50',      text: 'text-plum-700' },
  { bg: 'bg-primary-900',  text: 'text-white' },
  { bg: 'bg-primary-50',   text: 'text-primary-900' },
  { bg: 'bg-plum-600',     text: 'text-white' },
];

function PartnerCard({ partner, tone, index }) {
  return (
    <motion.div
      variants={fadeUp}
      className="group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-plum-100 hover:shadow-card"
    >
      {/* Top row — letter block + arrow */}
      <div className="flex items-start justify-between">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl font-black transition-transform duration-500 group-hover:scale-105 ${tone.bg} ${tone.text}`}
        >
          {partner.name.charAt(0)}
        </div>
        <ArrowUpRight
          className="h-4 w-4 text-slate-200 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:text-plum-400 rtl:-scale-x-100"
        />
      </div>

      {/* Name + specialty */}
      <div className="mt-5">
        <p className="text-base font-bold tracking-tight text-primary-900">
          {partner.name}
        </p>
        <p className="mt-1 text-xs font-medium text-ink-muted">
          {partner.specialty}
        </p>
      </div>

      {/* Plum bottom accent line */}
      <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-plum-500 transition-transform duration-500 group-hover:scale-x-100" />
    </motion.div>
  );
}

export default function Partners() {
  const { t } = useTranslation();

  return (
    <section className="section-pad bg-white">
      <div className="container-px">

        {/* Section header — split layout */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-14 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <motion.div variants={fadeUp} className="lg:max-w-lg">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600">
              <span className="h-px w-5 bg-plum-500" />
              {t('home.partners.eyebrow')}
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary-900 sm:text-4xl lg:text-5xl">
              {t('home.partners.title')}
            </h2>
          </motion.div>

          {/* Right stat pill */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-primary-50 px-5 py-4 sm:px-6 lg:flex-none"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-900 text-white">
              <Globe2 className="h-5 w-5" strokeWidth={1.5} />
            </span>
            <div>
              <p className="text-2xl font-extrabold text-primary-900">100+</p>
              <p className="text-xs font-medium text-ink-muted">{t('home.stats.items.partners')}</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Partner grid — 4 cols desktop, 2 tablet, 1 mobile */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {partners.map((partner, i) => (
            <PartnerCard
              key={partner.name}
              partner={partner}
              tone={tones[i % tones.length]}
              index={i}
            />
          ))}
        </motion.div>

        {/* Bottom note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 text-center text-sm text-ink-muted"
        >
          {t('home.partners.subtitle')}
        </motion.p>
      </div>
    </section>
  );
}

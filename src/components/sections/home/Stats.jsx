import { motion } from 'framer-motion';
import { Package, Globe2, Building2, CalendarClock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { staggerContainer, fadeUp, viewportOnce } from '../../../animations/variants';
import useCountUp from '../../../hooks/useCountUp';

const stats = [
  { key: 'products', value: 500, suffix: '+', Icon: Package },
  { key: 'partners', value: 100, suffix: '+', Icon: Globe2 },
  { key: 'facilities', value: 50, suffix: '+', Icon: Building2 },
  { key: 'experience', value: 10, suffix: '+', Icon: CalendarClock },
];

function StatItem({ stat }) {
  const { t } = useTranslation();
  const [ref, value] = useCountUp(stat.value);
  const { Icon: Ic } = stat;

  return (
    <motion.div
      variants={fadeUp}
      className="group flex flex-col items-center gap-3 px-6 py-10 text-center"
    >
      <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-100 bg-primary-50 text-plum-600 transition-colors duration-300 group-hover:bg-plum-50">
        <Ic className="h-5 w-5" strokeWidth={1.5} />
      </span>
      <p ref={ref} className="text-4xl font-black tabular-nums text-primary-900 sm:text-5xl lg:text-6xl">
        {value}
        <span className="text-plum-600">{stat.suffix}</span>
      </p>
      <p className="text-sm font-medium text-ink-muted">
        {t(`home.stats.items.${stat.key}`)}
      </p>
    </motion.div>
  );
}

export default function Stats() {
  const { t } = useTranslation();

  return (
    <section className="relative overflow-hidden bg-slate-50">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(22,16,24,1) 1px, transparent 1px), linear-gradient(to bottom, rgba(22,16,24,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
      {/* Plum accent orb */}
      <div className="pointer-events-none absolute -start-20 top-1/2 h-72 w-72 -translate-y-1/2 rounded-full bg-plum-100/60 blur-3xl" />

      <div className="container-px relative">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center pt-10 sm:pt-14 text-center"
        >
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600">
            <span className="h-px w-5 bg-plum-400" />
            {t('home.stats.eyebrow')}
            <span className="h-px w-5 bg-plum-400" />
          </span>
          <h2 className="mt-3 text-2xl font-bold text-primary-900 sm:text-3xl">
            {t('home.stats.title')}
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-4 grid grid-cols-2 divide-x divide-y divide-slate-200 rtl:divide-x-reverse lg:grid-cols-4 lg:divide-y-0"
        >
          {stats.map((stat) => (
            <StatItem key={stat.key} stat={stat} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

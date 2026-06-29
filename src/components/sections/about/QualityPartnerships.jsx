import { motion } from 'framer-motion';
import { CheckCircle2, Globe2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { fadeUp, fadeSide, staggerContainer, viewportOnce } from '../../../animations/variants';
import useLanguage from '../../../hooks/useLanguage';

const qualityPoints = ['certified', 'inspection', 'traceability', 'coldchain', 'compliance', 'audit'];

export default function QualityPartnerships() {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();

  return (
    <>
      {/* ── Quality Assurance ──────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary-50/50 py-20 sm:py-24 lg:py-32">
        {/* Subtle texture */}
        <div className="pointer-events-none absolute inset-0 bg-mesh-light opacity-60" />

        <div className="container-px relative">
          <div className="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-20">
            {/* Left — Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="lg:w-[50%] lg:flex-none"
            >
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600"
              >
                <span className="h-px w-5 bg-plum-500" />
                {t('about.quality.eyebrow')}
              </motion.span>

              <motion.h2
                variants={fadeUp}
                className="mt-4 text-3xl font-extrabold leading-tight text-primary-900 sm:text-4xl lg:text-[2.75rem]"
              >
                {t('about.quality.title')}
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-4 text-base leading-relaxed text-ink-soft sm:text-lg"
              >
                {t('about.quality.subtitle')}
              </motion.p>

              {/* Quality points — checklist */}
              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOnce}
                className="mt-8 grid gap-3 sm:grid-cols-2 sm:gap-4"
              >
                {qualityPoints.map((p) => (
                  <motion.li
                    key={p}
                    variants={fadeUp}
                    className="group flex items-start gap-3 rounded-xl border border-primary-100/80 bg-white/80 p-4 transition-all duration-300 hover:border-plum-200 hover:shadow-soft"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-plum-500 transition-colors group-hover:text-plum-600" />
                    <span className="text-sm leading-relaxed text-ink-soft">
                      {t(`about.quality.points.${p}`)}
                    </span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right — Certification badges grid */}
            <motion.div
              variants={fadeSide(isRtl ? -40 : 40)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'ISO 13485', sub: 'Medical Devices QMS', num: '01' },
                  { label: 'ISO 9001', sub: 'Quality Management', num: '02' },
                  { label: 'CE', sub: 'European Conformity', num: '03' },
                  { label: 'FDA', sub: 'US Compliance', num: '04' },
                ].map(({ label, sub, num }, i) => (
                  <div
                    key={label}
                    className={`group relative overflow-hidden rounded-2xl border border-primary-100 bg-white p-5 shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-card sm:p-6 ${
                      i % 2 === 1 ? 'lg:translate-y-4' : ''
                    }`}
                  >
                    {/* Hover accent bar */}
                    <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-plum-500 transition-transform duration-500 group-hover:scale-x-100" />
                    {/* Background number */}
                    <span className="absolute -end-2 -top-3 text-[4rem] font-black text-primary-50 select-none transition-colors duration-500 group-hover:text-plum-50 sm:text-[5rem]">
                      {num}
                    </span>
                    <div className="relative">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary-900 text-white sm:h-12 sm:w-12">
                        <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={1.5} />
                      </span>
                      <p className="mt-4 text-xl font-extrabold text-primary-900 sm:text-2xl">{label}</p>
                      <p className="mt-1 text-xs font-medium text-ink-muted">{sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Global Partnerships ─────────────────────────────── */}
      <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
        {/* Decorative elements */}
        <div className="pointer-events-none absolute -end-24 top-1/2 h-[24rem] w-[24rem] -translate-y-1/2 rounded-full bg-plum-50/60 blur-3xl" />
        <div className="pointer-events-none absolute -start-24 top-1/2 h-[20rem] w-[20rem] -translate-y-1/2 rounded-full bg-primary-50/80 blur-3xl" />

        <div className="container-px relative">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="mx-auto max-w-3xl text-center"
          >
            {/* Decorative globe icon */}
            <motion.div variants={fadeUp} className="mb-6 flex justify-center">
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary-100 bg-primary-50 text-primary-800 shadow-soft">
                <Globe2 className="h-7 w-7" strokeWidth={1.5} />
              </span>
            </motion.div>

            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-plum-600"
            >
              <span className="h-px w-5 bg-plum-300" />
              {t('about.partnerships.eyebrow')}
              <span className="h-px w-5 bg-plum-300" />
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-3xl font-extrabold leading-tight text-primary-900 sm:text-4xl lg:text-5xl"
            >
              {t('about.partnerships.title')}
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-5 text-base leading-relaxed text-ink-soft sm:text-lg"
            >
              {t('about.partnerships.desc')}
            </motion.p>

            {/* Decorative divider */}
            <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-3">
              <span className="h-px w-12 bg-primary-200" />
              <span className="h-2 w-2 rounded-full bg-plum-400" />
              <span className="h-px w-12 bg-primary-200" />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

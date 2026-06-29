import { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import PageTransition from '../components/ui/PageTransition';
import PageHero from '../components/ui/PageHero';
import useSeo from '../hooks/useSeo';
import { fadeUp, fadeSide, staggerContainer, viewportOnce } from '../animations/variants';
import useLanguage from '../hooks/useLanguage';

const infoItems = [
  { key: 'phone', Icon: Phone, dir: 'ltr' },
  { key: 'email', Icon: Mail },
  { key: 'address', Icon: MapPin },
  { key: 'hours', Icon: Clock },
];

const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

export default function Contact() {
  const { t } = useTranslation();
  const { isRtl } = useLanguage();
  useSeo('nav.contact', 'contact.hero.subtitle');

  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const validate = () => {
    const e = {};
    const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRe = /^[+\d][\d\s()-]{6,}$/;

    if (!form.name.trim()) e.name = t('contact.form.errors.nameRequired');
    if (!form.email.trim()) e.email = t('contact.form.errors.emailRequired');
    else if (!emailRe.test(form.email)) e.email = t('contact.form.errors.emailInvalid');
    if (form.phone.trim() && !phoneRe.test(form.phone)) e.phone = t('contact.form.errors.phoneInvalid');
    if (!form.subject.trim()) e.subject = t('contact.form.errors.subjectRequired');
    if (!form.message.trim()) e.message = t('contact.form.errors.messageRequired');
    else if (form.message.trim().length < 10) e.message = t('contact.form.errors.messageShort');

    return e;
  };

  const handleChange = (field) => (ev) => {
    setForm((f) => ({ ...f, [field]: ev.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length > 0) return;

    setStatus('submitting');
    // Simulated async submission.
    setTimeout(() => {
      setStatus('success');
      setForm(initialForm);
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  const fields = [
    { name: 'name', type: 'text', autoComplete: 'name' },
    { name: 'email', type: 'email', autoComplete: 'email' },
    { name: 'phone', type: 'tel', autoComplete: 'tel' },
    { name: 'subject', type: 'text', autoComplete: 'off' },
  ];

  return (
    <PageTransition>
      <PageHero
        badge={t('contact.hero.badge')}
        title={t('contact.hero.title')}
        subtitle={t('contact.hero.subtitle')}
      />

      {/* ── Main Content: Info Panel + Form ── */}
      <section className="section-pad bg-surface">
        <div className="container-px">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">

            {/* ── Left: Contact Info ── */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="flex flex-col"
            >
              {/* Info Cards */}
              <div className="space-y-4">
                {infoItems.map(({ key, Icon: Ic, dir }) => (
                  <motion.a
                    key={key}
                    variants={fadeUp}
                    href={
                      key === 'phone'
                        ? `tel:${t('contact.info.phone.value').replace(/\s/g, '')}`
                        : key === 'email'
                          ? `mailto:${t('contact.info.email.value')}`
                          : undefined
                    }
                    className="group flex items-start gap-4 rounded-xl border border-slate-200/80 bg-white p-5 shadow-soft transition-all duration-400 ease-premium hover:border-plum-200 hover:shadow-card-hover hover:-translate-y-0.5"
                  >
                    <span className="inline-flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors duration-300 group-hover:bg-plum-50 group-hover:text-plum-600">
                      <Ic className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div className="min-w-0">
                      <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted">
                        {t(`contact.info.${key}.title`)}
                      </h3>
                      <p
                        dir={dir}
                        className="mt-1 text-[15px] font-semibold text-ink"
                      >
                        {t(`contact.info.${key}.value`)}
                      </p>
                      <p className="mt-0.5 text-xs text-ink-muted">
                        {t(`contact.info.${key}.note`)}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* ── Map Section ── */}
              <motion.div
                variants={fadeUp}
                className="mt-8 overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-soft"
              >
                <div className="relative h-[220px] w-full bg-primary-50/30">
                  <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.5]" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-plum-100/40 blur-3xl" />
                  <div className="pointer-events-none absolute -left-10 bottom-0 h-36 w-36 rounded-full bg-primary-100/40 blur-3xl" />
                  {/* faux map roads */}
                  <svg className="absolute inset-0 h-full w-full text-primary-200/60" fill="none" aria-hidden="true">
                    <path d="M0,80 Q160,50 320,110 T640,100" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M100,0 Q130,140 60,280" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M0,200 Q240,170 480,210 T800,200" stroke="currentColor" strokeWidth="1.5" />
                  </svg>
                  {/* pin */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <motion.span
                      animate={{ y: [0, -8, 0] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                      className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-plum-600 text-white shadow-lg ring-4 ring-plum-200/50"
                    >
                      <MapPin className="h-5 w-5" />
                    </motion.span>
                    <div className="mt-3 rounded-xl border border-slate-200/80 bg-white px-4 py-2 shadow-soft">
                      <p className="text-xs font-bold text-ink">{t('contact.map.title')}</p>
                      <p className="text-[11px] text-ink-muted">{t('contact.info.address.value')}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* ── Right: Contact Form ── */}
            <motion.div
              variants={fadeSide(isRtl ? -30 : 30)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="rounded-2xl border border-slate-200/80 bg-white shadow-soft p-6 sm:p-8 lg:p-10"
            >
              <h2 className="text-xl font-bold text-ink sm:text-2xl">
                {t('contact.form.title')}
              </h2>
              <p className="mt-2 text-sm text-ink-muted">
                {t('contact.form.subtitle')}
              </p>

              <span className="mt-5 block h-px w-10 bg-plum-300" />

              <form onSubmit={handleSubmit} noValidate className="mt-6 space-y-5">
                {/* Text fields */}
                <div className="grid gap-5 sm:grid-cols-2">
                  {fields.map(({ name, type, autoComplete }) => (
                    <div key={name} className={name === 'subject' ? 'sm:col-span-2' : ''}>
                      <label
                        htmlFor={`contact-${name}`}
                        className="block text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted"
                      >
                        {t(`contact.form.${name}`)}
                      </label>
                      <input
                        id={`contact-${name}`}
                        type={type}
                        autoComplete={autoComplete}
                        value={form[name]}
                        onChange={handleChange(name)}
                        placeholder={t(`contact.form.${name}Placeholder`)}
                        dir={name === 'phone' ? 'ltr' : undefined}
                        className={`mt-1.5 w-full border-b-2 bg-transparent pb-2.5 text-sm text-ink placeholder:text-ink-muted/50 transition-colors duration-300 focus:outline-none ${
                          errors[name]
                            ? 'border-red-400 focus:border-red-500'
                            : 'border-primary-100 focus:border-plum-500'
                        }`}
                      />
                      {errors[name] && (
                        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                          <AlertCircle className="h-3.5 w-3.5 flex-none" />
                          {errors[name]}
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-[11px] font-bold uppercase tracking-[0.18em] text-ink-muted"
                  >
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange('message')}
                    placeholder={t('contact.form.messagePlaceholder')}
                    className={`mt-1.5 w-full resize-none border-b-2 bg-transparent pb-2.5 text-sm text-ink placeholder:text-ink-muted/50 transition-colors duration-300 focus:outline-none ${
                      errors.message
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-primary-100 focus:border-plum-500'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
                      <AlertCircle className="h-3.5 w-3.5 flex-none" />
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary group w-full"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    <>
                      {t('contact.form.submit')}
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 rtl:-scale-x-100" />
                    </>
                  )}
                </button>

                {/* Success message */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-2.5 rounded-xl border border-green-100 bg-green-50 p-4 text-sm font-medium text-green-700"
                  >
                    <CheckCircle2 className="h-5 w-5 flex-none" />
                    {t('contact.form.success')}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

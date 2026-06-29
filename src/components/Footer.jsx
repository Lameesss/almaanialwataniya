import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from './ui/Logo';

const quickLinks = [
  { to: '/', key: 'home' },
  { to: '/about', key: 'about' },
  { to: '/products', key: 'products' },
  { to: '/contact', key: 'contact' },
];

const socials = [
  { Icon: Linkedin, label: 'LinkedIn', href: '#' },
  { Icon: Facebook, label: 'Facebook', href: '#' },
  { Icon: Instagram, label: 'Instagram', href: '#' },
  { Icon: Twitter, label: 'Twitter', href: '#' },
];

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-100 bg-white text-ink-soft">
      <div className="container-px">
        {/* Main grid */}
        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-12 lg:gap-16 lg:py-20">

          {/* Brand Column */}
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ink-muted">
              {t('footer.description')}
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-3">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-ink-muted transition-all duration-300 hover:border-plum-300 hover:bg-plum-50 hover:text-plum-600"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-900">
              {t('footer.quickLinks')}
            </h3>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    className="group inline-flex items-center gap-2 text-sm text-ink-muted transition-colors duration-200 hover:text-primary-900"
                  >
                    <span className="h-px w-4 bg-slate-200 transition-all duration-300 group-hover:w-6 group-hover:bg-plum-500" />
                    {t(`nav.${l.key}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-4">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-900">
              {t('footer.contactTitle')}
            </h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li>
                <a
                  href="tel:+218910200962"
                  className="group flex items-start gap-3 transition-colors hover:text-primary-900"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-slate-100 bg-primary-50 text-plum-600 transition-colors group-hover:border-plum-200 group-hover:bg-plum-50">
                    <Phone className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-xs text-ink-muted">{t('contact.info.phone.title')}</p>
                    <p dir="ltr" className="mt-0.5 font-medium text-ink-soft transition-colors group-hover:text-primary-900">
                      {t('contact.info.phone.value')}
                    </p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@almaanialwataniya.com"
                  className="group flex items-start gap-3 transition-colors hover:text-primary-900"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-slate-100 bg-primary-50 text-plum-600 transition-colors group-hover:border-plum-200 group-hover:bg-plum-50">
                    <Mail className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-xs text-ink-muted">{t('contact.info.email.title')}</p>
                    <p className="mt-0.5 font-medium text-ink-soft transition-colors group-hover:text-primary-900">
                      {t('contact.info.email.value')}
                    </p>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-slate-100 bg-primary-50 text-plum-600">
                  <MapPin className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs text-ink-muted">{t('contact.info.address.title')}</p>
                  <p className="mt-0.5 font-medium text-ink-soft">{t('contact.info.address.value')}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-slate-100 bg-primary-50 text-plum-600">
                  <Clock className="h-3.5 w-3.5" />
                </span>
                <div>
                  <p className="text-xs text-ink-muted">{t('contact.info.hours.title')}</p>
                  <p className="mt-0.5 font-medium text-ink-soft">{t('contact.info.hours.value')}</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-slate-100 py-6 text-xs text-ink-muted sm:flex-row">
          <p>
            © {year} {t('brand.name')}. {t('footer.rights')}
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="transition-colors hover:text-primary-900">
              {t('footer.privacy')}
            </a>
            <a href="#" className="transition-colors hover:text-primary-900">
              {t('footer.terms')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

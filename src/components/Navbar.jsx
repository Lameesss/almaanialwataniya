import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import useScrollPosition from '../hooks/useScrollPosition';
import Logo from './ui/Logo';
import LanguageSwitcher from './LanguageSwitcher';

const links = [
  { to: '/', key: 'home', end: true },
  { to: '/about', key: 'about' },
  { to: '/products', key: 'products' },
  { to: '/contact', key: 'contact' },
];

const drawerVariants = {
  hidden: { opacity: 0, x: '100%' },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.38, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    x: '100%',
    transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
  },
};

const drawerLinkVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1], delay: 0.06 * i },
  }),
};

export default function Navbar() {
  const { t } = useTranslation();
  const scrolled = useScrollPosition(24);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => { setOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-premium ${
          scrolled || open
            ? 'border-b border-primary-100/60 bg-white/90 py-2 shadow-nav backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent py-3'
        }`}
      >
        <nav className="container-px flex items-center justify-between">
          {/* Logo */}
          <div className="flex flex-1 items-center justify-start">
            <Logo className="flex-shrink-0" />
          </div>

          {/* Desktop Nav Links — centered */}
          <ul className="hidden items-center justify-center gap-8 lg:flex">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) =>
                    `group relative py-1.5 text-sm font-medium tracking-wide transition-colors duration-200 ${
                      isActive
                        ? 'text-primary-900'
                        : 'text-ink-muted hover:text-primary-900'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {t(`nav.${link.key}`)}
                      <motion.span
                        layoutId="nav-underline"
                        className={`absolute -bottom-0.5 inset-x-0 h-[2px] rounded-full bg-plum-600 transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'
                        }`}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Right Actions */}
          <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
            <LanguageSwitcher />
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-xl bg-primary-900 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-primary-800 hover:-translate-y-0.5 hover:shadow-md"
            >
              {t('nav.getInTouch')}
              <ArrowUpRight className="h-3.5 w-3.5 rtl:-scale-x-100" />
            </NavLink>
          </div>

          {/* Mobile Controls */}
          <div className="flex flex-1 items-center justify-end gap-3 lg:hidden">
            <LanguageSwitcher />
            <button
              type="button"
              id="nav-mobile-toggle"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? t('nav.close') : t('nav.menu')}
              aria-expanded={open}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary-100 bg-white text-ink-soft transition-colors hover:border-primary-300 hover:text-primary-900"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={open ? 'x' : 'menu'}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Full-Screen Overlay Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-primary-950/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer Panel */}
            <motion.div
              key="drawer"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-y-0 end-0 z-50 flex w-full max-w-xs flex-col bg-white shadow-2xl lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between border-b border-slate-100 px-6 py-5">
                <Logo onClick={() => setOpen(false)} />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label={t('nav.close')}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-ink-muted hover:bg-slate-50"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-4 py-6">
                {links.map((link, i) => (
                  <motion.div
                    key={link.to}
                    custom={i}
                    variants={drawerLinkVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <NavLink
                      to={link.to}
                      end={link.end}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-semibold transition-colors ${
                          isActive
                            ? 'bg-primary-50 text-primary-900'
                            : 'text-ink-soft hover:bg-slate-50 hover:text-primary-900'
                        }`
                      }
                    >
                      {({ isActive }) => (
                        <>
                          {t(`nav.${link.key}`)}
                          {isActive && (
                            <span className="h-1.5 w-1.5 rounded-full bg-plum-600" />
                          )}
                        </>
                      )}
                    </NavLink>
                  </motion.div>
                ))}
              </nav>

              {/* Drawer Footer CTA */}
              <div className="border-t border-slate-100 p-5">
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary-900 px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-primary-800"
                >
                  {t('nav.getInTouch')}
                  <ArrowUpRight className="h-4 w-4 rtl:-scale-x-100" />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Logo({ onClick, className = '' }) {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.dir() === 'rtl';
  const logoSrc = isRtl ? '/logo-ar.png' : '/logo-en.png';

  return (
    <Link
      to="/"
      onClick={onClick}
      className={`group flex items-center gap-2 ${className}`}
      aria-label={t('brand.name')}
    >
      <img
        src={logoSrc}
        alt={t('brand.name')}
        className="-my-3 h-[7rem] w-[10rem] flex-none object-contain transition-transform duration-500 ease-premium group-hover:scale-105 sm:-my-4 sm:h-[8.5rem] sm:w-[16rem] lg:-my-5 lg:h-[10rem] lg:w-[18rem]"
      />
    </Link>
  );
}
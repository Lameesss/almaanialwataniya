// Lightweight document-head manager (no external dependency).
// Updates title, description, and key Open Graph tags per page.

function setMeta(attr, key, content) {
  if (!content) return;
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

const configuredSiteOrigin = (import.meta.env.VITE_SITE_URL || 'https://almaanialwataniya.com').replace(/\/$/, '');

export function applySeo({ title, description, lang = 'en' }) {
  if (title) {
    document.title = title;
    setMeta('property', 'og:title', title);
    setMeta('name', 'twitter:title', title);
  }
  if (description) {
    setMeta('name', 'description', description);
    setMeta('property', 'og:description', description);
    setMeta('name', 'twitter:description', description);
  }
  setMeta('property', 'og:locale', lang === 'ar' ? 'ar_LY' : 'en_US');

  // Canonical URL (path only, no query/hash) — helps avoid duplicate-URL issues.
  if (typeof window !== 'undefined') {
    const { origin, pathname } = window.location;
    const canonicalOrigin = origin.includes('localhost') ? configuredSiteOrigin : origin;
    setCanonical(`${canonicalOrigin}${pathname}`);
    setMeta('property', 'og:url', `${canonicalOrigin}${pathname}`);
  }
}

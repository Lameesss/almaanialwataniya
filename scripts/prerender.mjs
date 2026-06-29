import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const templatePath = path.join(distDir, 'index.html');
const siteOrigin = (process.env.VITE_SITE_URL || 'https://almaanialwataniya.com').replace(/\/$/, '');

const en = JSON.parse(await readFile(path.join(root, 'src/i18n/locales/en.json'), 'utf8'));

const routes = [
  { path: '/', file: 'index.html', titleKey: 'nav.home', descKey: 'home.hero.subtitle' },
  { path: '/about', file: 'about/index.html', titleKey: 'nav.about', descKey: 'about.hero.subtitle' },
  { path: '/products', file: 'products/index.html', titleKey: 'nav.products', descKey: 'products.hero.subtitle' },
  { path: '/contact', file: 'contact/index.html', titleKey: 'nav.contact', descKey: 'contact.hero.subtitle' },
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;');
}

function t(key) {
  return key.split('.').reduce((value, part) => value?.[part], en) || key;
}

function setTag(html, pattern, replacement) {
  return pattern.test(html) ? html.replace(pattern, replacement) : html.replace('</head>', `${replacement}</head>`);
}

function applyHead(html, route) {
  const brand = t('brand.name');
  const title = `${t(route.titleKey)} | ${brand}`;
  const description = t(route.descKey);
  const canonical = `${siteOrigin}${route.path === '/' ? '/' : route.path}`;

  let next = html
    .replace(/<html([^>]*)>/, '<html lang="en" dir="ltr">')
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);

  next = setTag(next, /<meta(?=[^>]*name="description")[^>]*>/, `<meta name="description" content="${escapeHtml(description)}">`);
  next = setTag(next, /<meta(?=[^>]*property="og:title")[^>]*>/, `<meta property="og:title" content="${escapeHtml(title)}">`);
  next = setTag(next, /<meta(?=[^>]*property="og:description")[^>]*>/, `<meta property="og:description" content="${escapeHtml(description)}">`);
  next = setTag(next, /<meta(?=[^>]*name="twitter:title")[^>]*>/, `<meta name="twitter:title" content="${escapeHtml(title)}">`);
  next = setTag(next, /<meta(?=[^>]*name="twitter:description")[^>]*>/, `<meta name="twitter:description" content="${escapeHtml(description)}">`);
  next = setTag(next, /<link(?=[^>]*rel="canonical")[^>]*>/, `<link rel="canonical" href="${escapeHtml(canonical)}">`);
  next = setTag(next, /<meta(?=[^>]*property="og:url")[^>]*>/, `<meta property="og:url" content="${escapeHtml(canonical)}">`);

  return next;
}

const vite = await createServer({
  root,
  appType: 'custom',
  logLevel: 'warn',
  server: { middlewareMode: true },
});

try {
  const template = await readFile(templatePath, 'utf8');
  const { render } = await vite.ssrLoadModule('/src/entry-server.jsx');

  for (const route of routes) {
    const appHtml = render(route.path);
    const html = applyHead(
      template.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`),
      route
    );
    const outputPath = path.join(distDir, route.file);
    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html);
    console.log(`prerendered ${route.path}`);
  }
} finally {
  await vite.close();
}

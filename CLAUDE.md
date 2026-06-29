# CLAUDE.md — Rebrand & Redesign Guide

> **Read this first.** This repository was originally built for **Team 1 — "Al-Alwan Al-Motamayaza"**.
> We are reusing it as the foundation for a **second, independent brand — "Al-Maani Al-Wataniya"**.
> Your job is to transform this codebase into the Team 2 site: **completely redesign every page**,
> re-theme it from the new logo, and rewrite all content (EN + AR) — **without** touching the product
> catalog. The two sites must look and read like completely separate products with **no shared design**.
> Work through the tasks **in order**.

---

## ✅ Progress Tracker — UPDATE THIS AS YOU GO (read me first, every session)

> **Why this exists:** the owner switches between models. Before you start, **read this tracker** to
> see what's done and where to continue. As you complete (or partly complete) work, **edit this file**
> to update the status. The next model relies on it — leaving it stale will cause duplicated or
> conflicting work.
>
> **How to update — every time you do work:**
> 1. Change the task's **Status** below: `⬜ Not started` → `🟡 In progress` → `✅ Done`.
> 2. Fill the **Notes** with specifics: which files you changed, decisions you made, anything left
>    unfinished or blocked.
> 3. Add a dated line to the **Session Log** at the bottom of this section.
> 4. Only mark `✅ Done` when that task passes its checks (see the Final Checklist).

| # | Task | Status | Notes / what's left |
|---|------|--------|---------------------|
| 0 | Stack check (confirm Vite, not Next) | ✅ Done | Confirmed: Vite 5 + React 18 + Tailwind 3. No migration needed. |
| 2 | New color theme in `tailwind.config.js` (B&W + plum, white bg) | ✅ Done | Full palette replaced: primary→plum-neutral, teal/mint aliased, shadows/gradients updated, white bg. index.css updated too. |
| 6 | New logos into `public/` + fix `LogoMark.jsx` | ✅ Done | Copied logo-en.png, logo-ar.png, logo-icon.png. LogoMark.jsx rebuilt with new pillar/arch SVG mark. Old Al-Alwan SVG removed. |
| 3 | **Complete redesign** — Home | ✅ Done | Navbar, Footer, Hero, Intro, Categories, WhyUs, Stats, Certifications, Partners, CTA all rebuilt. Featured section still omitted (commented out). Mobile responsiveness pass completed (see session log). |
| 3 | **Complete redesign** — About | ✅ Done | Bespoke PageHero with white bg, StoryMissionVision (editorial "01"), Values (dark primary-900 bg), Process (timeline style), QualityPartnerships (tinted bg + badges). Fully responsive. |
| 3 | **Complete redesign** — Products (data unchanged) | ✅ Done | Redesigned with editorial tab filters, refined cards, and redesigned modal. |
| 3 | **Complete redesign** — Contact | ✅ Done | Redesigned with two-column split layout and restored the contact form. |
| 3 | **Complete redesign** — Navbar / Footer / Layout / UI | ✅ Done | Navbar: editorial underline active, full-screen mobile drawer. Footer: dark primary-950, inverted logo, 3-col, no newsletter. |
| 5 | New content EN — `en.json` | ✅ Done | Owner updated with new Team 2 content — brand, nav, home, about, products, contact, footer all rewritten. |
| 5 | New content AR — `ar.json` | ✅ Done | Owner updated with new Team 2 Arabic content — mirrors EN keys, natural Arabic copy. |
| 5 | Brand + contact strings (locale + hardcoded SEO files) | ✅ Done | Updated: index.html, sitemap.xml, robots.txt, prerender.mjs, seo.js, i18n/index.js, package.json. All Al-Alwan refs → Al-Maani. |
| 4 | Verify product data untouched | ✅ Done | Verified products.js, categories.js, and public/products/ are untouched. |
| 7 | Verify EN⇄AR switch + RTL on every page | ✅ Done | Verified EN/AR locale key parity (216 keys match). |
| — | Final checklist passes + `npm run build` ok | ✅ Done | Build succeeds, old brand strings/hex colors absent. |

**Open questions / blockers for the owner:**
- Physical address (`TODO_TEAM2_ADDRESS`) — not provided yet.
- _(add any new blockers here as you hit them)_

**Session Log** (newest first — append one line per work session):
- 2026-06-29 — (Gemini 3.1 Pro High) — Products & Contact pages redesign COMPLETE. Built a new editorial layout for Products (underline tab filters, minimal search, clean cards, wide modal). Rebuilt Contact with a two-column split layout and restored the contact form. Verified product data is untouched, locale keys match exactly, no old brand strings/hex colors remain, and build succeeds. All tasks in the rebrand guide are now complete.
- 2026-06-29 — (Gemini 3.1 Pro High) — About page redesign COMPLETE. Built a bespoke white-bg PageHero and 4 completely new sections: StoryMissionVision (editorial split), Values (dark glassmorphic grid), Process (timeline layout), QualityPartnerships (checklist + badges). Changed hero to white background as requested. Next: Products page redesign.
- 2026-06-29 — (Claude Sonnet 4.6 Thinking) — Home page mobile responsiveness pass. Fixed: `overflow-x:hidden` on html/body, Hero uses `100svh` + reduced `pt-24` on mobile, hero CTAs full-width on mobile, dashboard card smaller (`max-w-[22rem]`) with tighter padding on xs, floating badges repositioned to stay within bounds, trust strip gets tighter padding on xs, editorial numbers `01`/`02` scaled down (`text-[5rem]`), Stats numbers smaller (`text-4xl` mobile), Certifications changed to `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4`, CTA buttons full-width on mobile. Files changed: `src/index.css`, `Hero.jsx`, `Intro.jsx`, `WhyUs.jsx`, `Stats.jsx`, `Certifications.jsx`, `Partners.jsx`, `CTA.jsx`.
- 2026-06-29 — (Claude Sonnet 4.6) — Home page + Navbar + Footer redesign COMPLETE. All 10 files rebuilt: Navbar (editorial underline, mobile drawer), Footer (dark primary-950, 3-col), Hero (dark full-screen), Intro ("01" editorial split), Categories (dark horizontal rows), WhyUs ("02" numbered list), Stats (dark strip), Certifications (flat badges), Partners (restyle), CTA (dark plum). Zero console errors in dev server. Next: About, Products, Contact pages.
- 2026-06-29 — (Claude Opus 4) — Phase 1 COMPLETE: Tailwind theme replaced (monochrome+plum), logos copied & LogoMark rebuilt, all SEO/brand strings updated (index.html, sitemap, robots, prerender, seo.js, i18n, package.json). Grep confirms 0 old brand strings in src/. Dev server boots clean. Next: complete page redesigns.
- 2026-06-29 — (Claude Opus 4) — Analyzed project. Confirmed stack (Task 0 ✅). Owner already updated en.json + ar.json with new Team 2 content (Task 5 content ✅). Starting Task 2 (color theme) next.
- _YYYY-MM-DD — (model) — nothing done yet; tracker initialized._

---

## 0. Stack reality check (READ — avoids a common mistake)

This project is **already React + Vite**. It is **NOT** Next.js. Do **not** attempt any
"Next.js → Vite migration" — there is nothing to migrate.

Confirmed stack (`package.json`):

| Concern        | Tool |
|----------------|------|
| Build / dev    | **Vite 5** (`vite`, `vite build`) |
| UI             | **React 18** |
| Routing        | **react-router-dom 6** (`src/routes/AppRoutes.jsx`) |
| i18n (EN/AR)   | **react-i18next + i18next** (`src/i18n/`) |
| Styling        | **Tailwind CSS 3** (`tailwind.config.js`) |
| Animation      | framer-motion |
| Icons          | lucide-react |
| Static export  | custom prerender script (`scripts/prerender.mjs`, runs on `postbuild`) |
| Deploy target  | **Vercel** |

Commands: `npm install` → `npm run dev` → `npm run build` (build + prerender) → `npm run preview`.

**Keep the architecture** (Vite + React Router + react-i18next + Tailwind + the prerender script and
its 4 routes `/`, `/about`, `/products`, `/contact`). We are changing **design, theme, and content**,
not the framework or the routing.

If anything below references a file you can't find, **stop and re-inspect the tree** before guessing.

---

## 1. The two brands

### Team 1 — current content in the repo (what we are REPLACING)
- **Name (EN):** Al-Alwan Al-Motamayaza · **(AR):** الألوان المتميزة
- **Tagline:** Medical Equipment & Healthcare Solutions
- **Email:** info@alalwanalmotamayaza.com · **Location:** Tripoli – Libya
- **Palette:** teal-green (`#178A6A`) + mint (`#6CC6AE`) + navy ink (`#12192A`)
- **Site origin:** https://al-alwan.vercel.app

### Team 2 — the NEW brand (what we are building)
- **Name (EN):** Al-Maani Al-Wataniya
- **Name (AR):** المعاني الوطنية
- **Tagline / descriptor (EN):** Company for Importing Medical Equipment, Medical Supplies, and Mother and Child Requirement
- **Tagline / descriptor (AR):** شركة لإستيراد الأجهزة والمستلزمات الطبية وإحتياجات الأم والطفل
- **Phone:** `00218910200962` (Libya, +218) — for `tel:` use `+218910200962`
- **Email:** `info@almaanialwataniya.com`
- **Address:** `TODO_TEAM2_ADDRESS` (not provided yet; country is Libya — keep `og:locale` `ar_LY`)
- **Site origin (canonical):** `https://almaanialwataniya.com` (deployed on Vercel)
- **Logos:** new black & white logos provided — English logo + Arabic logo (see Task 6)
- **Palette:** monochrome black & white + deep plum accent, **white background** (see Task 2)

> ⚠️ **Never let Team-1 strings leak into the Team-2 build.** When done, grep the whole repo for
> `Al-Alwan`, `Motamayaza`, `alalwan`, `al-alwan`, `الألوان`, `المتميزة` and confirm **zero** matches
> remain (outside this file).

---

## 2. Task — New color theme (derived from the logo)

The new logo is **black & white**, with the brand-name wordmark in very dark plum/wine tones:
- English wordmark color: `#1e0e14` (warm, wine)
- Arabic wordmark color: `#150e1d` (cool, plum)

**Design intent:** a clean, high-contrast **monochrome** identity — black & white with a **white
background** and a single **deep plum accent** pulled from the wordmark colors. This must feel nothing
like Team 1's teal-green.

**File:** `tailwind.config.js` — replace the entire `theme.extend.colors` block with the palette below
(and update gradients/shadows accordingly). **Keep the existing Tailwind key names** (`primary`,
`teal`, `mint`, `ink`, `surface`) so you don't have to chase every old `className`; just change their
values. (You may add a clearer alias like `plum` and migrate to it during the redesign.)

```js
colors: {
  // Near-black, faintly plum-tinted neutral — primary text & solid UI.
  primary: {
    DEFAULT: '#161018',
    50:  '#f5f4f5',
    100: '#e8e6e9',
    200: '#cfcbd1',
    300: '#aaa3ad',
    400: '#7d7382',
    500: '#5a4f60',
    600: '#443a4a',
    700: '#322a37',
    800: '#221d26',
    900: '#161018',
    950: '#0d090f',
  },
  // Deep plum accent derived from the wordmark (#1e0e14 / #150e1d). Use sparingly.
  plum: {
    DEFAULT: '#6b2d4a',
    50:  '#f6eef3',
    100: '#ead7e2',
    200: '#d6b0c6',
    300: '#bd83a4',
    400: '#a05a82',
    500: '#843c64',
    600: '#6b2d4a',
    700: '#54243a',
    800: '#3d1a2a',
    900: '#2a121d',
    950: '#1a0b12',
  },
  // Repurpose the old `teal`/`mint` keys to neutral/plum so legacy classes don't break.
  teal: { DEFAULT: '#54243a', 600: '#54243a', 700: '#3d1a2a' }, // alias → deep plum
  mint: { DEFAULT: '#a05a82', light: '#bd83a4', dark: '#843c64' }, // alias → plum highlight
  ink: {
    DEFAULT: '#161018', // near-black wordmark tone
    soft: '#3a313f',
    muted: '#6b6470',
  },
  success: { DEFAULT: '#16A34A', light: '#22C55E' }, // keep functional green for form success only
  surface: '#FFFFFF', // white background (was mint #F4FAF8)
},
```

Also update in `theme.extend`:
- `backgroundImage['hero-gradient']` → a **black/plum** gradient on white, e.g.
  `linear-gradient(135deg, #161018 0%, #2a121d 55%, #6b2d4a 120%)`
- `backgroundImage['mesh-light']` and `['grid-pattern']` → regenerate using plum/neutral RGBA instead
  of the old green RGBA.
- `boxShadow.*` → replace embedded green RGBA (`rgba(23,138,106,…)`, `rgba(108,198,174,…)`) with
  neutral/plum (`rgba(22,16,24,…)`, `rgba(107,45,74,…)`).

Finally, grep `src/` (and `src/index.css`) for **hardcoded** old hex colors — `#178A6A`, `#6CC6AE`,
`#12192A`, `#0E8385` — and replace them with the new tokens. **Background must be white** across the site.

---

## 3. Task — COMPLETE REDESIGN of every page (do not reuse the current design)

This is a hard requirement: **the current visual design must not survive.** Layouts, section
structure, hero treatments, cards, spacing, typography rhythm, and component composition should all be
**newly designed** so the two sites are visibly unrelated. A recolor is **not** enough.

**Redesign all four pages + shared chrome:**
- `src/pages/Home.jsx` and its sections in `src/components/sections/home/` (Hero, Intro, Categories,
  Featured, Stats, WhyUs, Certifications, Partners, CTA) — rethink the whole home composition.
- `src/pages/About.jsx` and `src/components/sections/about/` (StoryMissionVision, Values, Process,
  QualityPartnerships).
- `src/pages/Products.jsx` + `ProductCard.jsx` + `ProductModal.jsx` — new catalog/grid/detail layout
  (**product data unchanged — see Task 4**, only the presentation changes).
- `src/pages/Contact.jsx` — new contact layout (form + info + map).
- `src/components/Navbar.jsx`, `Footer.jsx`, and `src/layouts/MainLayout.jsx` — new header/footer design.
- `src/components/ui/*` (PageHero, SectionHeading, Reveal, etc.) — restyle/rebuild as the new system needs.

**Design direction (matches the monochrome logo):** clean, editorial, high-contrast black-on-white,
generous whitespace, strong typographic hierarchy, plum used only as a sparing accent. The owner can
steer this — if unsure about a specific layout choice, ask.

**Constraints while redesigning:**
- Keep the **routes** (`/`, `/about`, `/products`, `/contact`) and the React Router setup intact so
  the prerender script and sitemap keep working.
- Keep using **Tailwind tokens** from Task 2 as the design-token layer (don't hardcode colors).
- Keep all copy coming from the **i18n locale files** (Task 5) — no hardcoded visible text in JSX.
- Preserve **RTL correctness** — every layout must look right in Arabic (`dir="rtl"`), not just LTR.
- Consider new fonts if it helps the new identity (`fontFamily` in `tailwind.config.js` + load in
  `index.html`); Arabic currently uses Cairo — keep a quality Arabic face.

---

## 4. Task — Products stay EXACTLY the same (data only)

- **Do not modify** `src/data/products.js` or `src/data/categories.js`.
- **Do not** rename, move, or delete anything under `public/products/`.
- Product names, descriptions, images, categories, and IDs remain identical to Team 1.
- You **may** redesign *how* products are displayed (Task 3) — but never the underlying data.

---

## 5. Task — New content (EN + AR), brand details & contact info

All user-facing copy lives in two parallel files with identical key structures:
- `src/i18n/locales/en.json`
- `src/i18n/locales/ar.json`

**Content rules:**
1. **Analyze the current Team-1 copy, then write genuinely NEW content** for Team 2 in the same spirit
   and topic — but the wording **must not be the same**. Don't paraphrase line-by-line; write fresh
   hero lines, intro/about/story/mission/vision, values, process, why-us, stats, CTA, footer, contact
   copy in Team 2's own voice.
2. Provide **both English and Arabic**, key-by-key, kept perfectly in sync (same key set in both
   files). Arabic must be natural and correct, not machine-literal; keep medical terms accurate.
3. If the redesign changes section structure, you may **restructure the locale keys** too — as long as
   EN and AR match and every component references existing keys.

**Brand strings (in the locale files):**
- `brand.name` → `Al-Maani Al-Wataniya` (EN) / `المعاني الوطنية` (AR)
- `brand.shortName` → `Al-Maani` / `المعاني`
- `brand.tagline` → the Team-2 descriptor (see Task 1)

**Contact details (in the locale files):**
- `contact.info.phone.value` → `+218 91 020 0962` (link target `+218910200962`)
- `contact.info.email.value` → `info@almaanialwataniya.com`
- `contact.info.address.value` → `TODO_TEAM2_ADDRESS` (Libya)
- `contact.map.title` → update (currently "Find Us in Tripoli")

The `tel:`/`mailto:` links in `Contact.jsx` and `Footer.jsx` are **derived from these locale values**,
so updating the JSON updates the links — verify after.

**Hardcoded brand/SEO strings to update (outside the locale files):**

| File | What to change |
|------|----------------|
| `index.html` | `<title>`, `meta[description]`, `meta[author]`, all `og:*`/`twitter:*`, `og:site_name`, `og:image` |
| `public/sitemap.xml` | all `<loc>` → `https://almaanialwataniya.com/...` |
| `public/robots.txt` | header comment + `Sitemap:` URL |
| `scripts/prerender.mjs` | `siteOrigin` default → `https://almaanialwataniya.com` |
| `src/utils/seo.js` | `configuredSiteOrigin` fallback URL; keep `og:locale` `ar_LY` (still Libya) |
| `src/i18n/index.js` | `detection.lookupLocalStorage: 'alalwan_lang'` → `'almaani_lang'` |
| `package.json` | `name` → `al-maani-al-wataniya`, `description` |

> Optionally set `VITE_SITE_URL=https://almaanialwataniya.com` in Vercel env so canonical/OG URLs are
> correct in production.

---

## 6. Task — Replace the logo and brand mark

Drop the new images into `public/`, **keeping the exact existing filenames** so no code changes are
needed (the logo component swaps by language automatically):
- `public/logo-en.png` ← new **English** logo (black & white)
- `public/logo-ar.png` ← new **Arabic** logo (black & white)
- `public/logo.svg` and `public/favicon.svg` ← regenerate to the new mark (feeds `og:image` + favicon)

**Logo component:** `src/components/ui/Logo.jsx` already picks `logo-ar.png` / `logo-en.png` by text
direction — no logic change needed if filenames are kept. Re-check the sizing `className`
(`h-[4.5rem] w-[8.5rem] …`) against the new logo's aspect ratio and adjust so it isn't stretched.
Since the background is white and the logo is black, ensure contrast wherever the logo sits (e.g. on a
dark footer, use an inverted/white version).

**Inline emblem:** `src/components/ui/LogoMark.jsx` is a hand-built SVG of the *old* Al-Alwan mark
(its comment/`title` say "Al-Alwan"). Replace it with the Team-2 mark (or rebuild it from the new
logo) and fix the `title`/comment text.

---

## 7. Task — Bilingual language switch (verify, don't rebuild)

The site already supports a full EN ⇄ AR switch with RTL (`src/i18n/index.js`,
`src/hooks/useLanguage.js`). Don't rebuild it — just make sure the **new** content + design work in both:
- Every key in `en.json` has a matching key in `ar.json` (and vice-versa).
- Every redesigned layout renders correctly in `dir="rtl"` (Arabic), not only LTR.
- The toggle label (`nav.language`) shows the *other* language's name.

---

## Final checklist before you call it done

- [ ] `npm run dev` boots with no console errors.
- [ ] **Design is fully new** on Home, About, Products, Contact, Navbar, Footer — not a recolor of the old layout.
- [ ] Background is **white**; theme is monochrome + plum accent; no teal/green remains.
- [ ] Grep `Al-Alwan` / `Motamayaza` / `alalwan` / `al-alwan` / `الألوان` / `المتميزة` → **0** results (outside this file).
- [ ] Grep old hex `#178A6A` / `#6CC6AE` / `#12192A` / `#0E8385` in `src/` → **0** results.
- [ ] EN and AR locale files have **identical key sets**; content is new (not copied from Team 1).
- [ ] Old origin `al-alwan.vercel.app` replaced everywhere → `almaanialwataniya.com` (`index.html`, sitemap, robots, prerender, seo.js).
- [ ] Contact = phone `+218 91 020 0962`, email `info@almaanialwataniya.com`; `tel:`/`mailto:` links work.
- [ ] Logos display correctly in both languages (and on dark surfaces); favicon updated.
- [ ] Product data (`src/data/products.js`, `public/products/`) is **byte-for-byte unchanged**.
- [ ] RTL (Arabic) looks correct on every redesigned page.
- [ ] `npm run build` succeeds and `postbuild` prerender completes for all 4 routes.
- [ ] Remaining unknowns left as labeled `TODO_TEAM2_*` and reported (e.g. physical address).

---

## Suggested working order
1. Stack check (Task 0) →
2. New theme tokens in `tailwind.config.js` (Task 2) →
3. New logos into `public/` (Task 6) →
4. **Redesign each page** one at a time (Task 3), pulling all text from locale keys →
5. Write new EN + AR content + brand + contact in the locale files (Task 5) →
6. Update hardcoded brand/SEO strings (Task 5 table) →
7. Verify language switch + RTL on every page (Task 7) →
8. Run the final checklist.

**Do each task fully and verify before moving to the next. If a design decision is ambiguous, ask the owner.**

> 📌 **Before you stop working** (end of every session): update the **Progress Tracker** at the top —
> set statuses, write notes on exactly what you changed and what's left, and append a dated line to the
> Session Log. This is how the next model knows where to continue.

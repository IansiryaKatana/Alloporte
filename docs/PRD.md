# AlloPorte — Anti-Squat & Access Protection Website PRD

## Executive Summary

Build a bilingual (EN/FR) SEO-focused website for AlloPorte's vacant property protection services across France. The existing homepage at `/` establishes the luxury editorial UI/UX system — **do not modify its UI/UX elements**. All new pages inherit the same visual language: Inter Tight typography, pale blue accent, dark cinematic blocks, `#` section labels, pill CTAs, and architectural image treatment.

**Target:** 25+ pages for full SEO push, with French and English URL pairs.

---

## Brand & UI/UX Constraints

| Element | Specification |
|---------|---------------|
| Typography | Inter Tight, light headlines, tight tracking |
| Colors | `#f2f2f2` bg, `#030303` dark sections, `#6fb9e8` accent |
| Labels | `# section name` — 7px uppercase, 0.18em tracking |
| CTAs | White pill buttons with blue dot arrow |
| Images | Pexels CDN, `.architectural-image` / `.cinematic-image` filters |
| Spacing | `var(--page-padding)`, `var(--section-gap)` |
| Mobile | Grid columns stack; nav via bottom sheet; flex on fields |

---

## URL Structure

| English | French |
|---------|--------|
| `/en/` | `/fr/` |
| `/en/anti-squat-doors/` | `/fr/portes-anti-squat/` |
| `/en/temporary-steel-security-doors/` | `/fr/portes-de-securite-temporaires-acier/` |
| `/en/access-protection/` | `/fr/protection-des-acces/` |
| `/en/keyless-access-control/` | `/fr/controle-acces-sans-cle/` |
| `/en/pricing/` | `/fr/tarifs/` |
| `/en/quote/` | `/fr/devis/` |
| `/en/contact/` | `/fr/contact/` |
| `/en/technical-specifications/` | `/fr/specifications-techniques/` |
| `/en/france-anti-squat-law/` | `/fr/loi-anti-squat-france/` |
| `/en/how-anti-squat-doors-work/` | `/fr/comment-fonctionnent-portes-anti-squat/` |
| `/en/faq/` | `/fr/faq/` |
| `/en/france/` | `/fr/france/` |
| `/en/france/{city}/` | `/fr/france/{city}/` |
| `/en/case-studies/` | `/fr/etudes-de-cas/` |
| `/en/about/` | `/fr/a-propos/` |
| `/en/reviews/` | `/fr/avis/` |
| `/en/certifications/` | `/fr/certifications/` |
| `/en/privacy-policy/` | `/fr/politique-confidentialite/` |
| `/en/cookie-policy/` | `/fr/politique-cookies/` |
| `/en/terms/` | `/fr/conditions/` |
| `/en/legal-notice/` | `/fr/mentions-legales/` |

**Homepage:** `/` remains the original luxury editorial landing (unchanged).

---

## Navigation

### Header
- **Services** → Anti-Squat Doors, Temporary Steel Security Doors, Access Protection, Keyless Access Control
- **Resources** → How Anti-Squat Doors Work, Anti-Squat Law in France, Technical Specifications, Pricing, FAQ
- **Service Areas** → France, Marseille, Paris, Lyon, Lille, Toulouse, Nice, Bordeaux
- **Case Studies**
- **Contact**
- **Request a Quote** (always visible)

### Footer
- Services (4 links)
- Resources (5 links)
- Locations (France + 7 cities)
- Company (About, Case Studies, Contact, Reviews)
- Legal (Privacy, Cookie, Terms, Mentions légales)

---

## Page Inventory (25 Core + Legal)

### Core Service Pages (8)
1. **Home** (`/en/`, `/fr/`) — Anti-squat intro, problem/solution, how it works, trust, France CTA
2. **Anti-Squat Doors** — Main SEO page, comparison table, FAQs
3. **Temporary Steel Security Doors** — Steel door searches, rent/buy/managed
4. **Access Protection** — Enterprise buyers, access planning checklist
5. **Keyless Access Control** — VPS-style smart access positioning
6. **Pricing** — Cost factors, pricing models, quote CTA
7. **Quote** — Photo upload form, fast quote process
8. **Contact** — Advisor contact, bilingual support

### Resources (5)
9. **Technical Specifications** — Product table, EN/A2P standards, downloads
10. **Anti-Squat Law in France** — Legal guide with disclaimer
11. **How Anti-Squat Doors Work** — Educational, comparison table
12. **FAQ** — Cross-service questions
13. **Certifications** — Standards scope, what's certified vs configurable

### Geographic (9)
14. **France Hub** — National service areas
15–21. **City Pages** — Paris, Marseille, Lyon, Lille, Toulouse, Nice, Bordeaux (unique local copy)

### Company & Trust (4)
22. **Case Studies** — Before/after, client outcomes
23. **About** — Company mission, France focus
24. **Reviews** — Client testimonials
25. **Legal** — Privacy, Cookie, Terms, Mentions légales (4 pages)

---

## Content Principles

1. **No doorway SEO** — Each city page has unique local risk context and FAQs
2. **Honest certifications** — Do not claim full certification unless proven; distinguish certified vs configurable
3. **Legal disclaimer** on law page — General information, not legal advice
4. **Bilingual** — Full EN/FR copy, not machine-translated stubs
5. **Internal linking** — Every page links to related services, quote, and specs per PRD
6. **Pexels imagery** — Security doors, vacant properties, French urban context

---

## Technical Architecture

```
src/
├── i18n/           # Locale types, slug resolution, path helpers
├── data/
│   ├── images.ts   # Pexels URLs
│   ├── navigation.ts
│   └── pages/      # Page content by locale
├── components/
│   ├── layout/     # SiteHeader, SiteFooter, SiteLayout
│   └── pages/      # PageRenderer, section components
└── routes/
    ├── index.tsx   # Original homepage (unchanged)
    └── $locale/    # EN/FR dynamic routes
```

---

## Implementation Phases

### Phase 1 — Foundation ✅
- [x] PRD documentation
- [x] i18n routing (`/en/`, `/fr/`)
- [x] Shared layout matching homepage UI/UX
- [x] Pexels image library

### Phase 2 — Core Pages
- [x] Service pages (4)
- [x] Pricing, Quote, Contact
- [x] EN/FR home pages

### Phase 3 — Resources & SEO
- [x] Technical Specifications
- [x] Law guide, How it works, FAQ, Certifications

### Phase 4 — Geographic
- [x] France hub
- [x] 7 priority city pages (unique copy)

### Phase 5 — Company & Legal
- [x] About, Case Studies, Reviews
- [x] Privacy, Cookie, Terms, Legal Notice

### Phase 6 — QA ✅
- [x] Form validation with named fields and autocomplete
- [x] WhatsApp form submission (quote + contact)
- [x] Broken Pexels image URLs fixed + SafeImage fallback
- [x] Language switcher maps to equivalent page in other locale
- [x] Sitemap (`/sitemap.xml`) and `robots.txt`
- [x] Build and TypeScript verification

---

## Success Metrics

- All 25+ pages live in EN and FR
- Consistent UI/UX with homepage (no homepage changes)
- Unique city page content (no copy-paste)
- Request a Quote visible on every page
- Technical specs page beats competitor vagueness
- Quote form with photo/dimension fields

---

*Last updated: June 2026*

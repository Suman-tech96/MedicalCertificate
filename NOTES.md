# Notes: One Next.js 16 App, Two Brands

This document summarizes the live audit of `drcertificate.com` and `getmedicalcertificate.com`, the UX and performance improvements implemented in the unified Next.js 16 (App Router, TypeScript) codebase, and how the multi-brand architecture is structured.

---

## 1. Top 3 Biggest Problems on Each Current Homepage (with Evidence)

### A. `drcertificate.com`

1. **Severe third-party JavaScript blocking & slow Time to Interactive**
   - **Evidence (Lighthouse mobile audit):** Total Blocking Time (TBT) is **1,650 ms** (score: 11/100), Time to Interactive is **11.2 s** (score: 20/100), Largest Contentful Paint (LCP) is **4.0 s** (score: 50/100), and third-party scripts block the main thread for **1,010 ms** (setting 9 third-party cookies).
   - **Impact:** Mobile visitors experience sluggish taps and delayed responsiveness right when they try to open menus or click **Apply now**.

2. **Repetitive copy & excessive scroll depth diluting the "Apply now" path**
   - **Evidence (DOM/content audit):** The homepage contains ~397 text lines where core facts—such as *"About 30 minutes after getting all details"*, country pricing (*"25 SGD in Singapore, 399 pesos in the Philippines or 30 MYR in Malaysia"*), and *"Certified doctor review"*—are repeated across 4+ separate sections (*Before you apply*, *How it works*, *After you apply*, *What does an online medical certificate cost?*, *How long does it take?*, *Why DrCertificate*, and 15 long FAQs).
   - **Impact:** Users must scroll through redundant blocks to confirm eligibility, pricing, and non-refundable terms.

3. **Accessible name mismatches & overcrowded navigation**
   - **Evidence (Lighthouse + mobile screenshot [`docs/screenshots/dr-lh.jpg`](docs/screenshots/dr-lh.jpg)):** Lighthouse flagged *"Elements with visible text labels do not have matching accessible names"* (score: 0) and render-blocking resources (240 ms est. savings). The navigation bar also packs a 4-column mega-menu and a 9-language selector alongside 10 country links.

---

### B. `getmedicalcertificate.com`

1. **Very slow mobile Largest Contentful Paint (LCP) & main-thread blocking**
   - **Evidence (Lighthouse mobile audit):** LCP is **8.0 s** (score: 2/100), First Contentful Paint is **2.9 s** (score: 53/100), Speed Index is **4.6 s**, TBT is **1,210 ms** (score: 20/100), and third-party scripts block the main thread for **1,540 ms** (10 third-party cookies).
   - **Impact:** On mobile connections, visitors wait ~8 seconds for the main hero to finish painting, hurting above-the-fold conversion.

2. **Color contrast accessibility failures**
   - **Evidence (Lighthouse accessibility audit):** Flagged *"Background and foreground colors do not have a sufficient contrast ratio"* (score: 0) on the purple/lavender palette.

3. **Missing mobile header CTA & overly dense page structure**
   - **Evidence (mobile screenshot [`docs/screenshots/gmc-lh.jpg`](docs/screenshots/gmc-lh.jpg)):** Unlike DrCertificate's header, GetMedicalCertificate's mobile top bar shows only the logo and hamburger menu—with **no sticky "Apply now" / "Get a certificate" button** visible as the user scrolls. Below the hero, the page stacks 12+ sections (mini cards, trust badges, steps, stats, 4 certificate cards, "Who it is for", "Why us", 4 doctors, verification block, privacy, 42-country grid, comparison table, testimonials, 8 FAQs, 4 free tools, and 6 blog articles), creating decision fatigue before the user converts.

---

## 2. What Was Changed for Each Problem, and Why

| Problem | Change Made | Why |
| :--- | :--- | :--- |
| **Slow LCP / TBT / render-blocking scripts** | Built with **Next.js 16 App Router Server Components**, system font stack (zero external Google Font requests), zero third-party scripts on the marketing homepage, and minimal client JS (`Header` and `FaqAccordion` only). | Eliminates third-party main-thread blocking and network font waterfalls so the hero paints immediately on mobile. |
| **Repetitive & bloated sections** | Consolidated redundant blocks into a focused **7-section conversion funnel**: Hero + Quick Overview card → Services (with direct Apply now links) → 3-Step How It Works → Pricing & Doctors side-by-side → Legal/Rules & Country Coverage → Testimonials (if applicable) → Interactive FAQ → Final CTA Band. | Preserves 100% of prices, services, and legal rules while cutting scroll fatigue and keeping **Apply now** within one tap at every stage. |
| **Missing mobile header CTA & broken/cluttered nav** | Added a sticky `Header` with an always-visible **Apply now** button on both desktop and mobile, plus an accessible mobile menu drawer (`aria-expanded`, `aria-controls`, Escape-to-close). | Visitors can click **Apply now** from anywhere on the page without scrolling back up or hunting through a mega-menu. |
| **Accessibility (contrast & labels)** | Enforced high-contrast ink (`#0f1c33` / `#241432`) on white/light surfaces, white text on deep `#470087` / `#071735` dark bands, semantic landmarks, and matching accessible names on every button/link. | Fixes Lighthouse contrast and accessible-name failures while preserving each brand's distinct color identity. |

---

## 3. Shared vs. Brand-Specific Architecture (and Where the Line Is Drawn)

### Shared (`src/components/*` & `src/app/*`)
- **Layout & Conversion Flow:** `BrandHomepage.tsx`, `Header.tsx`, `FaqAccordion.tsx`, responsive grid, typography scale, spacing, and accessibility behavior.
- **Why:** Both brands solve the same user job—understanding which certificate they need, verifying doctor legitimacy, checking price/rules, and clicking **Apply now**. Sharing the layout guarantees consistent UX quality, fast performance, and a single codebase to maintain.

### Brand-Specific (`src/brands/drcertificate.ts` & `src/brands/getmedicalcertificate.ts`)
- **Theme Tokens:** Colors (`#1e489d` + `#02b58e` for DrCertificate vs. `#470087` + `#fe434d` for GetMedicalCertificate) injected as CSS custom properties (`--brand-*`).
- **All Copy, Pricing, Services, Doctors, Countries, FAQs, and Legal Rules:** Stored strictly inside each brand's typed `BrandConfig` object.
- **Conditional Sections:** Optional sections like `stats` and `testimonials` only render when defined in that brand's config (so GetMedicalCertificate's EU stats/testimonials never appear on DrCertificate, and DrCertificate's SEA-only rules and non-refundable policy never leak onto GetMedicalCertificate).
- **Why:** Keeps legal, regional, and commercial boundaries airtight—zero hardcoded brand strings exist in any component.

---

## 4. What It Would Take to Add a Third Brand

Adding a 3rd brand requires **zero component changes**:
1. **Create `src/brands/<newbrand>.ts`** implementing the `BrandConfig` TypeScript interface (`src/brands/types.ts`) with its theme colors, logo, copy, services, pricing, legal rules, and FAQs.
2. **Register it in `src/brands/index.ts`** by adding it to `BRANDS` and `ALIASES` (and updating `BrandId` in `src/brands/types.ts`).
3. **Deploy/Preview:** Immediately accessible via `/<newbrand>`, `?brand=<newbrand>`, hostname matching, or `NEXT_PUBLIC_BRAND=<newbrand>`.

# renderment-web

Marketing site for Renderment (operations platform for trade businesses).

Lives at: **https://renderment.com**

## Stack

Vite + React 18. Single landing page (`src/RendermentPage.jsx`) composed of seven
section components in `src/sections/`. Design tokens (color, type, shared
primitives) live in `src/design/tokens.jsx`.

## Local development

```bash
npm install
npm run dev      # vite dev server
npm run build    # production build → dist/
npm run preview  # serve dist/ for smoke-testing
```

## Deployment (Vercel)

`vercel.json` is wired for Vite:

- Build command: `npm run build`
- Output directory: `dist`
- Framework preset: Vite (auto-detected) or Other

Privacy and terms pages live under `public/` and pass through verbatim
(redirects to `xpanselogic.github.io/Renderment-Legal/`).

## Files

```
index.html              # Vite entry — Google Fonts + #root + module script
src/
  main.jsx              # React mount point
  styles.css            # global styles + animation keyframes
  RendermentPage.jsx    # page composition
  design/
    tokens.jsx          # C, fonts, SectionHead, Rule, *Btn
    heroShared.jsx      # TRADES + animation hooks
  sections/
    HeroFieldC.jsx      # § 01 hero (manuscript / "Field" V3c)
    HowItWorks.jsx      # § 02
    FeatureMock.jsx     # 4 product UI mocks
    Features.jsx        # § 03 — tabs that swap FeatureMocks
    Everything.jsx      # § 04 — 3×3 secondary features grid
    Demo.jsx            # § 05 — animated late-night SMS demo
    Pricing.jsx         # § 06 — three tiers, shop-size toggle
    CTA.jsx             # § 07 — final CTA + footer
public/
  privacy.html          # redirect → Renderment-Legal
  terms.html            # redirect → Renderment-Legal
vercel.json             # build + headers
```

The legacy single-file landing page lives at `index.legacy.html` for reference
(safe to delete once the new design is in production).

## Links

- **App** (the actual SaaS): https://app.renderment.com
- **Legal docs**: https://xpanselogic.github.io/Renderment-Legal/
- **Support email**: xpanselogic@gmail.com

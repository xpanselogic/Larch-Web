# Changelog

All notable changes to the Renderment marketing site (`renderment.com`).

Format based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
Dates use ISO 8601 (YYYY-MM-DD).

## [Unreleased]

### Changed
- **Visual polish.** Two-column hero with a CSS-only mock dashboard (JOB-0042 phases + recent SMS card + outstanding invoices). Replaced 9 emoji feature icons with inline Lucide-style stroke SVGs. Added scroll-triggered fade-up motion via IntersectionObserver, hover lift on feature cards, glow on the primary CTA, fixed radial gradient orbs in the background, subtle dot-pattern texture. Respects `prefers-reduced-motion`. Mobile collapses the hero grid to a single column. (`99b72b1`)
- **Brand rename: Larch → Renderment** across all file contents. Title, OG metadata, og:url (`getlarch.com` → `renderment.com`), logo mark (`L` → `R`), header brand, all app-link CTAs to `app.renderment.com`, FAQ copy, "Renderment Standard" pricing tier, footer, mailto subject. `privacy.html` and `terms.html` redirect targets switched from the defunct `xpanselogic.github.io/Larch-Legal/*` URLs to `xpanselogic.github.io/Renderment-Legal/*`. (`c217305`)

### Repo metadata
- Repository renamed `xpanselogic/Larch-Web` → `xpanselogic/Renderment-Web` on 2026-04-25 via gh CLI.

## [0.1.0] — 2026-04-18

Initial single-page marketing site. Dark theme matching the app, hero + 9 feature cards + pricing card ($149/mo) + 8 FAQ items + final CTA. Privacy/Terms pages as redirect shims to canonical legal docs on GitHub Pages. Vercel static deploy; custom domain `getlarch.com`.

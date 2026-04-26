# renderment-web

Marketing site for Renderment (operations platform for trade businesses).

Lives at: **https://renderment.com**

## Deployment (Vercel)

1. Push this directory to a GitHub repo (e.g. `xpanselogic/renderment-web`).
2. Connect the repo to Vercel.
3. Framework preset: **Other** (pure static site).
4. Build command: (leave blank)
5. Output directory: `.` (root)
6. Add custom domain: `renderment.com` (+ `www.renderment.com` → redirect to apex).
7. Vercel will auto-SSL via Let's Encrypt.

## Files

- `index.html` — landing page
- `privacy.html` — redirects to canonical privacy policy on Renderment-Legal
- `terms.html` — redirects to canonical terms of service on Renderment-Legal
- `vercel.json` — clean URLs + security headers

## Links

- **App** (the actual SaaS): https://app.renderment.com
- **Legal docs**: https://xpanselogic.github.io/Renderment-Legal/
- **Support email**: xpanselogic@gmail.com

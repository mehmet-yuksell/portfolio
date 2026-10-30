# Security

## Reporting a vulnerability

Please email **mehmetyuksell475@gmail.com** with details and steps to reproduce. Do not open a public issue. I aim to reply within 72 hours. See also [`/.well-known/security.txt`](public/.well-known/security.txt).

## What the codebase already does

- [x] **Minimal attack surface** — no database, auth, admin panel, API routes, forms or user-generated content. Contact uses `mailto:` plus a copy-to-clipboard button.
- [x] **Strict, nonce-based Content-Security-Policy** generated per request in `src/proxy.ts`: no `unsafe-eval` in production, `'strict-dynamic'` scripts, `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, `frame-ancestors 'none'`, `upgrade-insecure-requests`. Only inline style _attributes_ are allowed (`style-src-attr`), which cannot execute code.
- [x] **Security headers** in `next.config.ts`: HSTS (2 years, `includeSubDomains`, `preload`), `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `X-Frame-Options: DENY`, `Cross-Origin-Opener-Policy: same-origin`, `Cross-Origin-Resource-Policy: same-origin` and a restrictive `Permissions-Policy`.
- [x] `poweredByHeader: false`, and no production browser source maps.
- [x] No `dangerouslySetInnerHTML`, `eval` or inline event handlers. JSON-LD is rendered as escaped text.
- [x] Every external link uses `rel="noopener noreferrer"`.
- [x] Images are local only (`images.remotePatterns` is empty and SVG optimisation is disabled).
- [x] Fonts are self-hosted via `next/font`. No third-party scripts, trackers, analytics or CDNs.
- [x] Error boundaries never render error messages or stack traces. There is a custom 404 page.
- [x] No secrets in the repo. `.env*` files are git-ignored and `.env.example` documents that none are needed.
- [x] Exact dependency versions, a committed `package-lock.json` and `npm audit` in CI.
- [x] Dependabot for npm and GitHub Actions (`.github/dependabot.yml`).
- [x] CI runs lint, typecheck, formatting, build and `npm audit --omit=dev` on every push and PR, with a read-only `GITHUB_TOKEN`.

## Manual checklist (do these yourself)

### Accounts — turn on two-factor authentication (2FA)

Prefer an authenticator app or a hardware key over SMS, and store the recovery codes offline.

- [ ] **GitHub**: Settings → Password and authentication → enable 2FA. Add a passkey.
- [ ] **Hosting account**: enable 2FA on the hosting account that serves the site.
- [ ] **Cloudflare** (DNS and domain registrar): My Profile → Authentication → 2FA.
- [ ] **Namecheap**, if you hold any domain there: Profile → Security → 2FA.
- [ ] **Gmail / Google account**: myaccount.google.com → Security → 2-Step Verification. Your email can reset every other account, so treat it as the most important one.

### Domain

- [ ] **Registrar lock / transfer lock** is enabled for `mehmetyuksel.online`. In Cloudflare Registrar this is on by default; verify it.
- [ ] **DNSSEC** is enabled: Cloudflare → `mehmetyuksel.online` → DNS → Settings → Enable DNSSEC.
- [ ] Remove unused DNS records. Add a DMARC record (`_dmarc` TXT `v=DMARC1; p=reject;`) and a null SPF record (`@` TXT `v=spf1 -all`) if you don't send email from this domain.
- [ ] After HTTPS has been stable for a while, optionally submit the domain to [hstspreload.org](https://hstspreload.org).

### Repository

- [ ] **Protect the `main` branch**: Settings → Rules → Rulesets. Require a pull request, require the `CI / verify` status check, block force pushes and deletions.
- [ ] Settings → Code security: enable **Dependabot alerts**, **Dependabot security updates**, **secret scanning** and **push protection**.
- [ ] Settings → Actions → General: set workflow permissions to **read-only**.

### Hosting

- [ ] **Enforce HTTPS only**, so HTTP requests redirect to HTTPS.
- [ ] Confirm the response headers reach the browser, e.g. with `curl -I https://mehmetyuksel.online/en` or [securityheaders.com](https://securityheaders.com). The CSP and headers above only apply when the site runs on a Next.js server (`next start` or an equivalent runtime).

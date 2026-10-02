# Aurum Capital

Next.js App Router and TypeScript landing page, matching the supplied portal template. Scroll and mouse parallax use a single requestAnimationFrame loop and React refs. All six template PNGs are committed locally.

## Develop and validate

Use Node.js 22 and pnpm 11.19.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

The development route is http://localhost:3000/Creative-website/. The production static export is `out/`.

## GitHub Pages

Repository: https://github.com/emmaschonfeld/Creative-website

Site: https://emmaschonfeld.github.io/Creative-website/

Next.js is configured with `output: 'export'` and `basePath: '/Creative-website'`. Public image URLs include this prefix. Vite is not used because the supplied template explicitly requires Next.js.

In repository Settings → Pages → Build and deployment → Source, choose GitHub Actions. Pushes to `main` and manual runs of “Deploy Aurum Capital to GitHub Pages” build, lint, typecheck, and deploy the static export. If the initial deployment fails before Pages is enabled, enable it and rerun the workflow from Actions.

The supplied template contains no account-opening URL or separate navigation pages. Navigation links lead to the final wealth section; the account CTA returns to the beginning. Connect an actual account-opening destination before using this as a commercial website.

Validation: production export, ESLint, TypeScript, local asset resolution, desktop/mobile browser rendering, fonts, no horizontal overflow, no browser console errors, and scroll endpoint scale/CTA visibility.

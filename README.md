# R1DE Fairfield — educational website concept

An independent educational adaptation of the original Next.js App Router portal template. It is not the official business website. The required educational disclaimer is fixed at the top on every screen.

## Business and design research

Reviewed October 23, 2026:

- https://www.r1defairfield.com — indoor cycling for different fitness levels, experienced coaches, community focus.
- https://www.r1defairfield.com/classes — ONE R1DE (45 minutes), SPIN & SCULPT (30 minutes cycling + 30 minutes strength), SCULPT (30–60 minutes), HIIT 1T, and S1XTY.
- https://www.r1defairfield.com/about-3 — inclusive community and five values: Care, Motivate, Trust, Challenge, Laugh.
- https://www.r1defairfield.com/contact-5 — studio address, telephone, email.
- https://www.instagram.com/r1de.fairfield/?hl=en and https://www.tiktok.com/@r1defairfield — supplied social destinations. Direct access was blocked, so no social-post claims are made.

Audience interpretation: Fairfield-area people seeking music-led group cycling and strength classes, including newcomers and experienced participants. Brand direction is derived from the official aqua-and-gold logo and its Together as 1/community messaging. This audience interpretation and the promotional headlines are design choices, not quotations.

The portal zoom, mouse parallax, layered clouds, and requestAnimationFrame/ref architecture are retained. New class, community, and visit sections use verified business information. Links lead to the official website for current availability and pricing; this educational site takes no bookings or payments and invents no offers or testimonials.

## Assets

`public/r1de-studio.jpg` is the reception image published on the official Contact page, downloaded from https://static.wixstatic.com/media/7b233a_d860035989594a54b05a03877f9d9d22~mv2.jpg for this educational concept. Ownership remains with its respective owner. The original six portal-template PNGs remain local. Fitness icons and the favicon are original SVG/CSS artwork; they do not depict actual studio equipment.

## Development

Node.js 22 and pnpm 11.19.0:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm lint
pnpm typecheck
pnpm build
```

Development route: http://localhost:3000/Creative-website/. Static production output: `out/`.

## Publication

Repository: https://github.com/emmaschonfeld/Creative-website

Public educational concept: https://emmaschonfeld.github.io/Creative-website/

Next.js uses `output: 'export'` and `basePath: '/Creative-website'`. GitHub Actions builds and deploys pushes to `main`. Only website source and required assets are included in commits.

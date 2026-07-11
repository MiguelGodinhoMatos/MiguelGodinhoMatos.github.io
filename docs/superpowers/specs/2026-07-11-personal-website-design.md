# Personal Website Redesign — Miguel Godinho de Matos

**Date:** 2026-07-11
**Owner:** Miguel Godinho de Matos (GitHub: MiguelGodinhoMatos)
**Goal:** Replace the current Google Sites page (`sites.google.com/view/miguelgodinhomatos`)
with a modern, hand-crafted static site deployed on GitHub Pages.

## Summary

A single-page, build-free static website with a refined academic aesthetic, mirroring
all existing content. Deployed from the `MiguelGodinhoMatos.github.io` repo and served at
`https://miguelgodinhomatos.github.io`.

## Approach & Constraints

- **Hand-crafted static site** — vanilla HTML/CSS/JS, no build step, no framework.
  Chosen because local tooling has no Node/Ruby and the content is stable.
- **No fabricated data.** All text mirrors the current site verbatim. Publication links
  are added only where a DOI/journal URL can be verified; unverified ones stay plain text.
- Must work offline-of-build: GitHub Pages serves files as-is from repo root.

## Repository & Deployment

- Repo: `MiguelGodinhoMatos.github.io` (public, user site).
- Serve from `main` branch, root directory, via GitHub Pages.
- Live URL: `https://miguelgodinhomatos.github.io`.
- Custom domain (e.g. `miguelgodinhomatos.com`) deferred; wired later via `CNAME` + DNS.

## File Structure

```
index.html          # single page, all sections
css/style.css       # design system + layout
js/main.js          # theme toggle, smooth-scroll, scrollspy nav
assets/
  headshot.jpg      # profile photo (pulled from current site)
  favicon.svg
README.md
```

## Design System (Refined Academic)

- **Typography:** serif display for name/section headings (Source Serif 4 / Newsreader);
  sans-serif for body (Inter). Loaded via Google Fonts.
- **Palette (light):** warm off-white background (~#faf8f4), deep navy-black text
  (~#1a1f2b), one muted burgundy accent (~#7b2d3b).
- **Palette (dark):** warm charcoal background, off-white text, lightened burgundy accent.
- **Layout:** ~760px reading column, generous whitespace, clear section rhythm.
- **Theme toggle:** persists choice in `localStorage`; respects `prefers-color-scheme`
  on first visit.
- **Accessibility:** semantic HTML5 landmarks, alt text, visible focus states, keyboard
  navigation, `prefers-reduced-motion` disables smooth-scroll/animation.
- **Responsive:** mobile-first; nav collapses on small screens.

## Page Sections (single scroll + sticky nav)

Sticky top nav: name/monogram left; links (About · Research · Teaching · Service ·
Grants & Awards · Hiring · Contact) with scrollspy active-highlighting; theme toggle right.

1. **Hero** — headshot, name (large serif), "Full Professor of Information Systems",
   affiliations (Católica Lisbon School of Business and Economics · Visiting Research
   Scientist, Heinz College, Carnegie Mellon University · IDEA). Buttons: **CV** ·
   **Google Scholar** · **Email**.
2. **About** — research agenda (three areas: digitization & creative industries; social
   networks & peer influence; data availability & data-protection law). Education list
   (Agregação 2021 → BSc 2005).
3. **Research** — publications grouped: *Journal Publications* (16), *Under Review* (2),
   *Working Papers* (5), *Work in Progress* (5). Each entry: authors (his name bolded),
   year, title (linked to DOI/journal where verified), venue. Google Scholar link.
4. **Teaching** — Executive Education · MBA · Master's, grouped with course titles.
5. **Service** — Editorial Roles (incl. MISQ Senior Editor 2024–) · Conference
   Organization · Peer Review · Institutional Roles (incl. Dean of Faculty 2023–,
   Scientific Director MSc Business Analytics).
6. **Grants & Awards** — Individual Awards · Paper Awards · Research Grants (table).
7. **Hiring** — two postdoc positions (economics/econometrics; CS/ML) with requirements,
   shared required skills (SQL, R, Python), and how to apply.
8. **Contact / footer** — both institutional emails and addresses, Google Scholar link,
   copyright. Kept simple (no copy-to-clipboard button per user preference).

## Known Assets (from current site)

- Headshot: `https://lh3.googleusercontent.com/sitesv/AA5AbUDZ4e66YV8y4ycm0nzAg-b7EvZElwsdPf_U9uI5GywwzRivR2y0NenypPS6yiEj7Bv5D7ujuWdAf5fz9Fc-c85d8fFLwrkYFiA0rtMmZ4wVSPxPumJKuLzRfDDEsiilWmlD2XLLY0dKN3h4_CYNhYqzClf9SCV8EgPfQ_toZgRlCsoSTrQp1EycVl8S5OXvDLTMVuGqHQ=w1280`
  (download to `assets/headshot.jpg`; if unreachable, use placeholder and request a photo).
- Google Scholar: `https://scholar.google.pt/citations?user=0jWWRpgAAAAJ&hl=pt-PT`
- CV (Google Drive): `https://drive.google.com/file/d/1dLpzw0h15aId9u1KiWmliMG-unQ2tG5-/view?usp=sharing`
  (CV button links here by default; can swap to a repo-hosted PDF later).
- Emails: `miguel.godinhomatos@clsbe.lisboa.ucp.pt` (CLSBE),
  `miguelgodinhomatos@cmu.edu` (CMU).

## Out of Scope (for now)

- Blog / news feed.
- BibTeX-driven publication generation.
- Custom domain DNS (deferred, structure-ready).
- Copy-to-clipboard contact button.

## Success Criteria

- Site live at `https://miguelgodinhomatos.github.io` with all sections and content.
- Works on mobile and desktop, light and dark modes.
- No console errors; nav smooth-scroll + scrollspy functional; theme choice persists.
- All content faithful to the current site; no fabricated links.

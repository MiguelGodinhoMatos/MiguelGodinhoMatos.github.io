# Personal Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build and deploy a modern, hand-crafted static personal website for Miguel Godinho de Matos on GitHub Pages at `https://miguelgodinhomatos.github.io`.

**Architecture:** Single-page static site (vanilla HTML/CSS/JS, no build step). One `index.html` holds all sections; `css/style.css` defines a refined-academic design system with light/dark themes; `js/main.js` handles theme toggle, smooth-scroll, and scrollspy. Deployed from repo root via GitHub Pages.

**Tech Stack:** HTML5, CSS3 (custom properties, fl/grid), vanilla JS (ES6), Google Fonts, GitHub Pages, `gh` CLI.

## Global Constraints

- No build step; files served as-is from repo root.
- No fabricated content or links — mirror the current Google Site; add publication links only where a DOI/journal URL is verified.
- Accessibility: semantic HTML, alt text, visible focus, keyboard nav, respect `prefers-reduced-motion`.
- Palette: warm off-white bg / deep navy-black text / muted burgundy accent; dark mode inverts to warm charcoal.
- Type: serif display (Source Serif 4) for name/headings; Inter for body.
- Reading column ~760px; mobile-first responsive.
- Repo: `MiguelGodinhoMatos.github.io`, public, GitHub Pages from `main` root.

---

### Task 1: Scaffold repo, assets, and local git

**Files:**
- Create: `index.html` (skeleton), `css/style.css` (empty), `js/main.js` (empty), `assets/headshot.jpg`, `assets/favicon.svg`, `README.md`, `.gitignore`

- [ ] **Step 1:** Download headshot from current site to `assets/headshot.jpg`:
  `curl -L -o assets/headshot.jpg "https://lh3.googleusercontent.com/sitesv/AA5AbUDZ4e66YV8y4ycm0nzAg-b7EvZElwsdPf_U9uI5GywwzRivR2y0NenypPS6yiEj7Bv5D7ujuWdAf5fz9Fc-c85d8fFLwrkYFiA0rtMmZ4wVSPxPumJKuLzRfDDEsiilWmlD2XLLY0dKN3h4_CYNhYqzClf9SCV8EgPfQ_toZgRlCsoSTrQp1EycVl8S5OXvDLTMVuGqHQ=w1280"`
  Verify: `file assets/headshot.jpg` reports a JPEG/PNG image (non-zero size). If it fails, note it and use a placeholder + flag to user.
- [ ] **Step 2:** Create minimal `index.html` skeleton with `<head>` (meta viewport, title, font links, favicon, css link) and empty `<body>` + `js/main.js` script tag.
- [ ] **Step 3:** Create `favicon.svg` — a simple monogram "M" in burgundy on transparent.
- [ ] **Step 4:** `git init`, add `.gitignore` (`.DS_Store`), README with one-line description + live URL.
- [ ] **Step 5:** Verify page opens without errors: `open index.html` (renders blank, no console errors).
- [ ] **Step 6:** Commit: `git add -A && git commit -m "chore: scaffold static site structure"`

---

### Task 2: Design system + layout shell (CSS, nav, hero)

**Files:**
- Modify: `index.html` (nav + hero markup), `css/style.css` (full design system)

- [ ] **Step 1:** In `css/style.css` define `:root` custom properties for light theme (bg `#faf8f4`, text `#1a1f2b`, muted text, accent `#7b2d3b`, borders) and `[data-theme="dark"]` overrides (warm charcoal bg, off-white text, lightened accent). Base typography: Inter body, Source Serif 4 headings, ~760px `.container`, spacing scale, link styles, focus-visible outline, `prefers-reduced-motion` guard.
- [ ] **Step 2:** Add sticky `<header><nav>` to `index.html`: monogram/name left, anchor links (About, Research, Teaching, Service, Grants & Awards, Hiring, Contact), theme-toggle button right. Style it (sticky, blurred/solid bg, active-link style, responsive collapse).
- [ ] **Step 3:** Add `<section id="hero">`: headshot (`assets/headshot.jpg`, alt text), name in serif, title, affiliations, button row (CV → Drive link, Google Scholar, Email `mailto:`). Style hero responsive.
- [ ] **Step 4:** Verify in browser: nav sticky, hero renders, fonts load, buttons link correctly, layout responsive at mobile width. No console errors.
- [ ] **Step 5:** Commit: `git add -A && git commit -m "feat: design system, sticky nav, and hero"`

---

### Task 3: Content sections — About, Research, Teaching

**Files:**
- Modify: `index.html` (sections), `css/style.css` (section/publication styles)

- [ ] **Step 1:** `#about` — research-agenda paragraphs (3 areas) + Education list (Agregação 2021, PhD 2013, MSc 2011, MSc 2007, BSc 2005). Verbatim from spec.
- [ ] **Step 2:** `#research` — four subgroups (Journal Publications ×16, Under Review ×2, Working Papers ×5, Work in Progress ×5). Each entry: authors (his name `<strong>`), year, title, venue. Link titles to DOI/journal only where verified (see Task 3a note); otherwise plain text. Add Google Scholar link.
- [ ] **Step 3:** `#teaching` — Executive Education, MBA, Master's groups with course titles.
- [ ] **Step 4:** Style publication list (hanging indent / spacing), section headings, subgroup labels.
- [ ] **Step 5:** Verify in browser: all three sections render, nav anchors scroll to them, content matches source.
- [ ] **Step 6:** Commit: `git add -A && git commit -m "feat: about, research, and teaching sections"`

---

### Task 4: Content sections — Service, Grants & Awards, Hiring, Contact

**Files:**
- Modify: `index.html` (sections), `css/style.css` (table + contact styles)

- [ ] **Step 1:** `#service` — Editorial Roles, Conference Organization, Peer Review, Institutional Roles (verbatim lists).
- [ ] **Step 2:** `#grants` — Individual Awards, Paper Awards, Research Grants as a responsive `<table>` (Period / Funder / Amount).
- [ ] **Step 3:** `#hiring` — two postdoc positions with requirements, shared skills, how-to-apply + contact email.
- [ ] **Step 4:** `#contact` footer — both emails (`mailto:`), both addresses, Scholar link, copyright.
- [ ] **Step 5:** Style table (responsive scroll on mobile), footer.
- [ ] **Step 6:** Verify in browser: sections render, table readable on mobile, all links valid.
- [ ] **Step 7:** Commit: `git add -A && git commit -m "feat: service, grants, hiring, and contact sections"`

---

### Task 5: Interactivity — theme toggle, smooth-scroll, scrollspy

**Files:**
- Modify: `js/main.js`

- [ ] **Step 1:** Theme toggle: on load, read `localStorage.theme` or fall back to `prefers-color-scheme`; set `data-theme` on `<html>`. Toggle button flips + persists. Update button icon/label + `aria-pressed`.
- [ ] **Step 2:** Smooth-scroll for in-page anchor clicks (guarded by `prefers-reduced-motion`).
- [ ] **Step 3:** Scrollspy: `IntersectionObserver` marks the nav link of the section in view as active (`aria-current`).
- [ ] **Step 4:** Verify in browser: toggle switches + survives reload; nav clicks smooth-scroll; active link updates on scroll; no console errors; test keyboard nav + reduced-motion.
- [ ] **Step 5:** Commit: `git add -A && git commit -m "feat: theme toggle, smooth-scroll, scrollspy"`

---

### Task 6: Polish, meta, and accessibility pass

**Files:**
- Modify: `index.html` (meta tags), `css/style.css`

- [ ] **Step 1:** Add SEO/social meta: description, Open Graph (title, description, image=headshot, url), `lang="en"`, canonical.
- [ ] **Step 2:** Accessibility sweep: heading hierarchy (single h1), alt text, color-contrast check both themes, visible focus on all interactive elements, skip-to-content link.
- [ ] **Step 3:** Responsive sweep at 360px / 768px / 1200px — fix overflow, spacing, nav wrap.
- [ ] **Step 4:** Verify: no console errors/warnings; looks correct in both themes at all three widths.
- [ ] **Step 5:** Commit: `git add -A && git commit -m "polish: meta tags, a11y, and responsive fixes"`

---

### Task 7: Create GitHub repo and deploy to Pages

**Files:** none (deployment)

- [ ] **Step 1:** Create repo: `gh repo create MiguelGodinhoMatos.github.io --public --source=. --remote=origin --description "Personal website"` (do NOT let it auto-push yet if it prompts; we control the push).
- [ ] **Step 2:** Push: `git branch -M main && git push -u origin main`.
- [ ] **Step 3:** Enable Pages via API: `gh api -X POST repos/MiguelGodinhoMatos/MiguelGodinhoMatos.github.io/pages -f "source[branch]=main" -f "source[path]=/"` (ignore 409 if already enabled).
- [ ] **Step 4:** Wait ~1–2 min, then verify live: `curl -sI https://miguelgodinhomatos.github.io | head -1` returns `HTTP/2 200`. Optionally open in browser to confirm render.
- [ ] **Step 5:** Report the live URL to the user; note any manual steps (e.g., if Pages build is still processing).

---

## Self-Review

**Spec coverage:** Hero ✓(T2), About+Education ✓(T3), Research/publications ✓(T3), Teaching ✓(T3), Service ✓(T4), Grants&Awards ✓(T4), Hiring ✓(T4), Contact ✓(T4), design system/themes ✓(T2), toggle/scroll/scrollspy ✓(T5), a11y/meta/responsive ✓(T6), repo+Pages deploy ✓(T7), headshot download ✓(T1), CV/Scholar links ✓(T2/T3). No gaps.

**Placeholder scan:** No TBD/TODO; all commands and content sources are explicit.

**Consistency:** Section IDs (`#about #research #teaching #service #grants #hiring #contact`) match nav links across T2–T5. `data-theme` attribute name consistent between T2 (CSS) and T5 (JS). Repo name consistent T7.

## Notes

- **Publication links:** Titles link out only where a DOI/journal URL is verified during T3; unverified titles remain plain text for the user to fill later.
- **Headshot fallback:** if T1 download fails, use a neutral placeholder and flag to the user to supply a photo.

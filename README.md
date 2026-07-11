# miguelgodinhomatos.github.io

Personal website of **Miguel Godinho de Matos** — Full Professor of Information Systems
at Católica Lisbon School of Business and Economics and Visiting Research Scientist at
Carnegie Mellon University.

Live at **https://miguelgodinhomatos.github.io**

## About this site

A hand-crafted, build-free static site (HTML/CSS/vanilla JS) served via GitHub Pages.
No frameworks, no build step — edit the files and push.

```
index.html         # landing: hero + about + education
research.html      # publications
teaching.html      # courses
service.html       # editorial / conference / review / institutional
grants.html        # grants & awards
hiring.html        # postdoc positions
css/style.css      # design system + light/dark themes
js/layout.js       # SHARED nav + footer (single source of truth) + theme toggle,
                   #   mobile nav, publication links
assets/            # headshot, favicon
```

The nav bar and footer are defined once in `js/layout.js` and injected into every
page, so you edit them in one place. Each page sets `<body data-page="...">` to mark
the active nav link.

## Editing

- **Add a page:** copy any page, change the `<head>` title/description/canonical, set
  `<body data-page="...">`, and add a matching link in `js/layout.js`'s nav.
- **Text / publications:** edit the relevant page's `.html` directly.
- **Nav / footer / contact:** edit `js/layout.js`.
- **Colors / typography / spacing:** the CSS custom properties at the top of `css/style.css`.
- **CV link:** the `Curriculum Vitae` buttons in `index.html` point to a Google Drive file;
  swap the URL (or drop a `cv.pdf` into `assets/` and link to it).
- **Photo:** replace `assets/headshot.jpg`.

Changes pushed to the `main` branch publish automatically.

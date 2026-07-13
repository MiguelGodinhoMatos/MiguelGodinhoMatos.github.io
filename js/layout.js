/* ============================================================
   Miguel Godinho de Matos — shared layout + interactions
   Single source of truth for the nav and footer across all pages.
   Each page sets <body data-page="..."> to mark the active nav link.
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;

  var NAV_HTML =
    '<header class="site-header">' +
    '  <nav class="nav container" aria-label="Primary">' +
    '    <a class="nav__brand" href="index.html" aria-label="Miguel Godinho de Matos — home">' +
    '      <span class="nav__monogram" aria-hidden="true">MGM</span>' +
    '    </a>' +
    '    <button class="nav__toggle" id="navToggle" aria-expanded="false" aria-controls="navMenu" aria-label="Menu">' +
    '      <span></span><span></span><span></span>' +
    '    </button>' +
    '    <ul class="nav__menu" id="navMenu">' +
    '      <li><a href="index.html" data-nav="home">About</a></li>' +
    '      <li><a href="research.html" data-nav="research">Research</a></li>' +
    '      <li><a href="teaching.html" data-nav="teaching">Teaching</a></li>' +
    '      <li><a href="service.html" data-nav="service">Service</a></li>' +
    '      <li><a href="grants.html" data-nav="grants">Grants &amp; Awards</a></li>' +
    '      <li><a href="#contact" data-nav="contact">Contact</a></li>' +
    '    </ul>' +
    '    <button class="theme-toggle" id="themeToggle" type="button" aria-label="Switch color theme" aria-pressed="false">' +
    '      <svg class="theme-toggle__sun" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1"/></svg>' +
    '      <svg class="theme-toggle__moon" viewBox="0 0 24 24" aria-hidden="true"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z"/></svg>' +
    '    </button>' +
    '  </nav>' +
    '</header>';

  var FOOTER_HTML =
    '<footer class="site-footer" id="contact">' +
    '  <div class="container footer__grid">' +
    '    <div>' +
    '      <h2 class="footer__title">Contact</h2>' +
    '      <p class="footer__lead">Happy to hear about research, collaborations, and postdoc enquiries.</p>' +
    '    </div>' +
    '    <div class="footer__col">' +
    '      <h3 class="footer__label">Católica Lisbon (CLSBE)</h3>' +
    '      <p><a class="js-email" href="#">Email me →</a></p>' +
    '      <p class="footer__addr">Caminho Palma de Cima<br />1649-023 Lisboa, Portugal</p>' +
    '    </div>' +
    '    <div class="footer__col">' +
    '      <h3 class="footer__label">Carnegie Mellon (CMU)</h3>' +
    '      <p class="footer__addr">Heinz College<br />5000 Forbes Avenue<br />Pittsburgh, PA 15213, USA</p>' +
    '    </div>' +
    '  </div>' +
    '  <div class="container footer__profiles">' +
    '    <h3 class="footer__label">Find me online</h3>' +
    '    <div class="profile-links">' +
    '      <a class="profile-link" href="https://orcid.org/0000-0002-6333-2753" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><line x1="12" y1="11" x2="12" y2="16"/><circle class="dot" cx="12" cy="8" r="1.1"/></svg>ORCID</a>' +
    '      <a class="profile-link" href="https://scholar.google.pt/citations?user=0jWWRpgAAAAJ&amp;hl=en" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 8 L12 4 L21 8 L12 12 Z"/><path d="M7 10.5 V14.7 C7 15.9 17 15.9 17 14.7 V10.5"/></svg>Google Scholar</a>' +
    '      <a class="profile-link" href="https://github.com/MiguelGodinhoMatos" target="_blank" rel="noopener"><svg class="icon--fill" viewBox="0 0 16 16" aria-hidden="true"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>GitHub</a>' +
    '      <a class="profile-link" href="https://www.cienciavitae.pt/4217-C942-9E6F" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="11" r="2"/><line x1="13" y1="10" x2="18" y2="10"/><line x1="13" y1="14" x2="18" y2="14"/></svg>Ciência Vitae</a>' +
    '      <a class="profile-link" href="https://ciencia.ucp.pt/en/persons/miguel-godinho-de-matos/" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18"/><path d="M5 21V10M19 21V10"/><path d="M4 10 L12 4 L20 10"/><path d="M9.5 21v-6M14.5 21v-6"/></svg>Ciência UCP</a>' +
    '      <a class="profile-link" href="https://drive.google.com/file/d/1CsJeGCi3Ua5nHJXQVxWOJCRe9eCH2WJW/view?usp=sharing" target="_blank" rel="noopener"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z"/><path d="M14 3v5h5"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="15" y2="17"/></svg>Curriculum Vitae</a>' +
    '    </div>' +
    '  </div>' +
    '  <div class="container footer__base">' +
    '    <p>© <span id="year">2026</span> Miguel Godinho de Matos</p>' +
    '    <a href="#main" class="footer__totop">Back to top ↑</a>' +
    '  </div>' +
    '</footer>';

  function ready(fn) {
    if (document.readyState !== "loading") { fn(); }
    else { document.addEventListener("DOMContentLoaded", fn); }
  }

  ready(function () {
    /* ---------- Inject shared chrome ---------- */
    var skip = document.querySelector(".skip-link");
    if (skip) { skip.insertAdjacentHTML("afterend", NAV_HTML); }
    else { document.body.insertAdjacentHTML("afterbegin", NAV_HTML); }
    document.body.insertAdjacentHTML("beforeend", FOOTER_HTML);

    /* ---------- Active nav link ---------- */
    var page = document.body.getAttribute("data-page");
    if (page) {
      var current = document.querySelector('.nav__menu a[data-nav="' + page + '"]');
      if (current) { current.classList.add("is-active"); current.setAttribute("aria-current", "page"); }
    }

    /* ---------- Theme toggle ---------- */
    var themeToggle = document.getElementById("themeToggle");
    function syncToggle() {
      if (themeToggle) themeToggle.setAttribute("aria-pressed", root.getAttribute("data-theme") === "dark" ? "true" : "false");
    }
    syncToggle();
    if (themeToggle) {
      themeToggle.addEventListener("click", function () {
        var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem("theme", next); } catch (e) {}
        syncToggle();
      });
    }

    /* ---------- Mobile nav ---------- */
    var navToggle = document.getElementById("navToggle");
    var navMenu = document.getElementById("navMenu");
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", function () {
        var open = navMenu.classList.toggle("is-open");
        navToggle.setAttribute("aria-expanded", open ? "true" : "false");
      });
      navMenu.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          navMenu.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    }

    /* ---------- Current year ---------- */
    var yearEl = document.getElementById("year");
    if (yearEl) {
      var y = new Date().getFullYear();
      if (y && !isNaN(y)) yearEl.textContent = String(y);
    }

    /* ---------- Email (assembled at runtime to deter scrapers) ----------
       The address is never stored as one contiguous string in the source. */
    var eUser = "miguel.godinhomatos", eDomain = ["ucp", "pt"].join(".");
    var addr = eUser + String.fromCharCode(64) + eDomain;
    Array.prototype.forEach.call(document.querySelectorAll(".js-email"), function (a) {
      a.setAttribute("href", "mailto:" + addr);
      if (a.hasAttribute("data-show-email")) a.textContent = addr;
    });
  });
})();

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
    '      <li><a href="hiring.html" data-nav="hiring">Hiring</a></li>' +
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
    '      <p><a href="mailto:miguel.godinhomatos@ucp.pt">miguel.godinhomatos@ucp.pt</a></p>' +
    '      <p class="footer__addr">Caminho Palma de Cima<br />1600-178 Lisboa, Portugal</p>' +
    '    </div>' +
    '    <div class="footer__col">' +
    '      <h3 class="footer__label">Carnegie Mellon (CMU)</h3>' +
    '      <p class="footer__addr">Heinz College<br />5000 Forbes Avenue<br />Pittsburgh, PA 15213, USA</p>' +
    '    </div>' +
    '    <div class="footer__col">' +
    '      <h3 class="footer__label">Elsewhere</h3>' +
    '      <p><a href="https://scholar.google.pt/citations?user=0jWWRpgAAAAJ&amp;hl=pt-PT" target="_blank" rel="noopener">Google Scholar</a></p>' +
    '      <p><a href="https://drive.google.com/file/d/1dLpzw0h15aId9u1KiWmliMG-unQ2tG5-/view?usp=sharing" target="_blank" rel="noopener">Curriculum Vitae</a></p>' +
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
  });
})();

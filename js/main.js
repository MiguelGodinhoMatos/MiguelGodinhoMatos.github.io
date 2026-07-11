/* ============================================================
   Miguel Godinho de Matos — site interactions
   ============================================================ */
(function () {
  "use strict";

  var root = document.documentElement;

  /* ---------- Theme ---------- */
  var themeToggle = document.getElementById("themeToggle");

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    if (themeToggle) themeToggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
  }

  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  applyTheme(stored || (prefersDark ? "dark" : "light"));

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      applyTheme(next);
      try { localStorage.setItem("theme", next); } catch (e) {}
    });
  }

  /* ---------- Mobile nav ---------- */
  var navToggle = document.getElementById("navToggle");
  var navMenu = document.getElementById("navMenu");

  function closeMenu() {
    if (!navMenu) return;
    navMenu.classList.remove("is-open");
    if (navToggle) navToggle.setAttribute("aria-expanded", "false");
  }

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    navMenu.addEventListener("click", function (e) {
      if (e.target.tagName === "A") closeMenu();
    });
  }

  /* ---------- Current year ---------- */
  var yearEl = document.getElementById("year");
  if (yearEl) {
    var y = new Date().getFullYear();
    if (y && !isNaN(y)) yearEl.textContent = String(y);
  }

  /* ---------- Publication titles → Google Scholar search ----------
     Progressive enhancement: titles are plain text in the HTML (good for
     SEO / no-JS); here we turn each into a link to a Scholar search for the
     exact title. No fabricated DOIs — an honest lookup that always resolves. */
  var titles = document.querySelectorAll(".pub-title");
  Array.prototype.forEach.call(titles, function (el) {
    if (el.tagName === "A") return;
    var text = (el.textContent || "").trim();
    if (!text) return;
    var a = document.createElement("a");
    a.className = "pub-title";
    a.href = "https://scholar.google.com/scholar?q=" + encodeURIComponent(text);
    a.target = "_blank";
    a.rel = "noopener";
    a.title = "Find on Google Scholar";
    a.textContent = text;
    el.parentNode.replaceChild(a, el);
  });

  /* ---------- Scrollspy ---------- */
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav__menu a[href^="#"]'));
  var map = {};
  var sections = [];
  links.forEach(function (link) {
    var id = link.getAttribute("href").slice(1);
    var sec = document.getElementById(id);
    if (sec) { map[id] = link; sections.push(sec); }
  });

  function setActive(id) {
    links.forEach(function (l) {
      var on = l.getAttribute("href") === "#" + id;
      l.classList.toggle("is-active", on);
      if (on) { l.setAttribute("aria-current", "true"); } else { l.removeAttribute("aria-current"); }
    });
  }

  if ("IntersectionObserver" in window && sections.length) {
    var visible = {};
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        visible[entry.target.id] = entry.isIntersecting ? entry.intersectionRatio : 0;
      });
      var bestId = null, best = 0;
      Object.keys(visible).forEach(function (id) {
        if (visible[id] > best) { best = visible[id]; bestId = id; }
      });
      if (bestId) setActive(bestId);
    }, { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] });
    sections.forEach(function (s) { observer.observe(s); });
  }
})();

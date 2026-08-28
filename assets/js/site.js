/* Viva · Coconut Grove — small progressive enhancements.
   Everything here is optional: the page reads fine with JS off. */
(function () {
  'use strict';

  var root = document.documentElement;

  /* ── Language ───────────────────────────────────────────── */
  var buttons = document.querySelectorAll('[data-set-lang]');

  function setLang(lang) {
    if (lang !== 'it' && lang !== 'en') { lang = 'it'; }
    root.setAttribute('data-lang', lang);
    root.setAttribute('lang', lang);
    buttons.forEach(function (b) {
      b.classList.toggle('is-active', b.dataset.setLang === lang);
      b.setAttribute('aria-pressed', String(b.dataset.setLang === lang));
    });
    try { localStorage.setItem('viva.lang', lang); } catch (e) {}
  }

  var stored = null;
  try { stored = localStorage.getItem('viva.lang'); } catch (e) {}
  if (!stored) {
    stored = (navigator.language || 'it').toLowerCase().indexOf('it') === 0 ? 'it' : 'en';
  }
  setLang(stored);

  buttons.forEach(function (b) {
    b.addEventListener('click', function () { setLang(b.dataset.setLang); });
  });

  /* ── Sticky top bar ─────────────────────────────────────── */
  var topbar = document.getElementById('topbar');
  function onScroll() {
    topbar.classList.toggle('is-stuck', window.scrollY > 40);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* ── Mobile drawer ──────────────────────────────────────── */
  var burger = document.querySelector('.burger');
  var drawer = document.getElementById('nav-drawer');

  function closeDrawer() {
    drawer.hidden = true;
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  burger.addEventListener('click', function () {
    var open = burger.getAttribute('aria-expanded') === 'true';
    if (open) { closeDrawer(); return; }
    drawer.hidden = false;
    burger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });

  drawer.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') { closeDrawer(); }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !drawer.hidden) { closeDrawer(); }
  });

  /* ── Reveal on scroll ───────────────────────────────────── */
  var targets = document.querySelectorAll(
    '.section__head, .card, .figure, .spec, .shot, .routes li, .lead, .footnote'
  );

  if (!('IntersectionObserver' in window)) { return; }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) { return; }
      entry.target.classList.add('is-in');
      io.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

  targets.forEach(function (el, i) {
    el.classList.add('reveal');
    el.style.transitionDelay = (Math.min(i % 6, 5) * 70) + 'ms';
    io.observe(el);
  });

  /* ── Footer year ────────────────────────────────────────── */
  var year = document.getElementById('year');
  if (year) { year.textContent = String(new Date().getFullYear()); }
}());

/* SEKALABÖ corporate site — interactions */
(function () {
  'use strict';

  // Sticky header style on scroll
  var header = document.getElementById('header');
  var onScroll = function () {
    if (window.scrollY > 24) header.classList.add('is-scrolled');
    else header.classList.remove('is-scrolled');
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  // Mobile nav toggle
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      hamburger.classList.toggle('is-open', open);
      hamburger.setAttribute('aria-expanded', String(open));
    });
    nav.querySelectorAll('.nav__link').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
        hamburger.classList.remove('is-open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Scrollspy: highlight nav link for the section in view
  var navLinks = nav ? Array.prototype.slice.call(nav.querySelectorAll('.nav__link')) : [];
  var spied = navLinks
    .map(function (l) { var id = l.getAttribute('href'); return id && id.charAt(0) === '#' ? { link: l, sec: document.querySelector(id) } : null; })
    .filter(function (x) { return x && x.sec; });
  if (spied.length && 'IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          spied.forEach(function (s) { s.link.classList.toggle('is-active', s.sec === entry.target); });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    spied.forEach(function (s) { spy.observe(s.sec); });
  }

  // Reveal on scroll
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }
})();

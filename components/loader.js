/* ============================================================
   loader.js — injecte header.html et footer.html dans chaque page
   Ce fichier ne doit jamais être modifié
   ============================================================ */

(function () {
  const BASE = '/components/';

  function load(id, file) {
    const el = document.getElementById(id);
    if (!el) return;
    fetch(BASE + file)
      .then(r => r.text())
      .then(html => {
        el.innerHTML = html;
        // Active le lien nav correspondant à la page courante
        if (id === 'header-placeholder') highlightNav();
      });
  }

  function highlightNav() {
    const path = window.location.pathname;
    document.querySelectorAll('nav .nav-links a').forEach(a => {
      const href = a.getAttribute('href');
      if (path === href || (href !== '/index.html' && path.startsWith(href.replace('/index.html', '')))) {
        a.classList.add('active');
      }
    });
  }

  load('header-placeholder', 'header.html');
  load('footer-placeholder', 'footer.html');
})();

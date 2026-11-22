/* Portafolio · Miguel Morillo (Akisolu)
   JavaScript vanilla: filtros de proyectos, nav activa y año del footer. */
(function () {
  'use strict';

  var buttons = document.querySelectorAll('[data-filter]');
  var cards = Array.prototype.slice.call(document.querySelectorAll('.project-card'));
  var status = document.getElementById('filter-status');

  function applyFilter(value, label) {
    var visible = 0;

    cards.forEach(function (card) {
      var show = value === 'todos' || card.getAttribute('data-category') === value;
      card.hidden = !show;
      if (show) visible += 1;
    });

    buttons.forEach(function (button) {
      var active = button.getAttribute('data-filter') === value;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', active ? 'true' : 'false');
    });

    if (status) {
      var noun = visible === 1 ? 'proyecto' : 'proyectos';
      var scope = value === 'todos' ? '' : ' en ' + label;
      status.textContent = 'Mostrando ' + visible + ' ' + noun + scope + '.';
    }
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      applyFilter(button.getAttribute('data-filter'), button.getAttribute('data-label'));
    });
  });

  /* Los enlaces marcados como placeholder no deben saltar al inicio de la página. */
  document.querySelectorAll('a[data-placeholder]').forEach(function (link) {
    link.addEventListener('click', function (event) { event.preventDefault(); });
  });

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  var sections = document.querySelectorAll('main section[id]');
  var navLinks = document.querySelectorAll('.site-nav a[href^="#"]');

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }
})();

/* Portafolio · Miguel Morillo (Akisolu)
   JavaScript vanilla: filtros de proyectos, nav activa y año del footer. */
(function () {
  'use strict';

  function toArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
  }

  var filters = toArray(document.querySelectorAll('input[data-filter]'));
  var cards = toArray(document.querySelectorAll('.project-card'));
  var status = document.getElementById('filter-status');

  function applyFilter(input) {
    var value = input.getAttribute('data-filter');
    var label = input.getAttribute('data-label');
    var visible = 0;

    cards.forEach(function (card) {
      var show = value === 'todos' || card.getAttribute('data-category') === value;
      card.hidden = !show;
      if (show) visible += 1;
    });

    filters.forEach(function (filter) {
      filter.closest('.filter').classList.toggle('is-active', filter === input);
    });

    if (status) {
      var noun = visible === 1 ? 'proyecto' : 'proyectos';
      var scope = value === 'todos' ? '' : ' en ' + label;
      status.textContent = 'Mostrando ' + visible + ' ' + noun + scope + '.';
    }
  }

  filters.forEach(function (filter) {
    filter.addEventListener('change', function () { applyFilter(filter); });
  });

  /* El navegador puede restaurar un radio distinto tras recarga o bfcache. */
  var selected = filters.filter(function (filter) { return filter.checked; })[0];
  if (selected) applyFilter(selected);

  /* Los enlaces marcados como placeholder no deben saltar al inicio de la página. */
  toArray(document.querySelectorAll('a[data-placeholder]')).forEach(function (link) {
    link.addEventListener('click', function (event) { event.preventDefault(); });
  });

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  /* Visual: :target-current nativo donde exista; .is-active como fallback. */
  var sections = toArray(document.querySelectorAll('main section[id]'));
  var navLinks = toArray(document.querySelectorAll('.site-nav a[href^="#"]'));

  if ('IntersectionObserver' in window && sections.length && navLinks.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (link) {
          var active = link.getAttribute('href') === '#' + entry.target.id;
          link.classList.toggle('is-active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });

    sections.forEach(function (section) { observer.observe(section); });
  }
})();

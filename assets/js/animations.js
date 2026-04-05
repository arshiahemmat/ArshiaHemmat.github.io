
/* ===== Reveal on Scroll + Micro-interactions ===== */
(function () {
  var d = document;
  function ready(fn){ d.readyState!='loading' ? fn() : d.addEventListener('DOMContentLoaded', fn); }

  ready(function(){
    // Tag common elements for reveal
    var selectors = [
      '.page__content > h1, .page__content > h2, .page__content > h3',
      '.page__content > p',
      '.page__content > ul, .page__content > ol',
      '.archive__item, .feature__item, .notice, article, figure',
      '.masthead, .page__hero, .sidebar, .author__avatar, .author__content'
    ];
    var nodes = d.querySelectorAll(selectors.join(','));
    var orderMap = new Map();
    var groupIndex = 0;
    nodes.forEach(function(el, i){
      el.setAttribute('data-animate', '');
      // simple stagger within each section
      var parent = el.closest('section, article, .page__content, .archive, .feature__wrapper') || d.body;
      if(!orderMap.has(parent)) orderMap.set(parent, 1);
      var idx = orderMap.get(parent);
      el.setAttribute('data-animate-order', String(Math.min(idx,5)));
      orderMap.set(parent, idx+1);
      // add hover-lift to card-ish things
      if (el.classList.contains('archive__item') || el.classList.contains('feature__item') || el.classList.contains('notice')) {
        el.classList.add('glass','hover-lift');
      }
    });

    // IntersectionObserver to reveal
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.05 });

    d.querySelectorAll('[data-animate]').forEach(function(el){ io.observe(el); });

    // Enhance all links with underline-slide effect
    d.querySelectorAll('.page__content a').forEach(function(a){ a.classList.add('underline-slide'); });

    // Parallax on hero (very subtle)
    var hero = d.querySelector('.page__hero, .page__hero--overlay');
    if (hero && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      window.addEventListener('scroll', function(){
        var y = window.scrollY || d.documentElement.scrollTop;
        hero.style.transform = 'translateY(' + (y * 0.06) + 'px)';
      }, { passive: true });
    }
  });
})();

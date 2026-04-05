/* Minimal, dependency-free interactivity + data loading */
(function(){
  const $ = (sel, parent=document)=> parent.querySelector(sel);
  const $$ = (sel, parent=document)=> Array.from(parent.querySelectorAll(sel));

  // Mobile nav
  const navToggle = $('.nav-toggle');
  const navList = $('#nav-list');
  if(navToggle){
    navToggle.addEventListener('click', ()=>{
      const shown = navList.classList.toggle('show');
      navToggle.setAttribute('aria-expanded', String(shown));
    });
  }

  // Theme toggle (persist in localStorage)
  const themeToggle = $('#theme-toggle');
  function applyTheme(t){
    if(t==='dark') document.documentElement.setAttribute('data-theme','dark');
    else document.documentElement.removeAttribute('data-theme');
  }
  const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark':'light');
  applyTheme(savedTheme);
  if(themeToggle){
    themeToggle.addEventListener('click', ()=>{
      const next = (document.documentElement.getAttribute('data-theme')==='dark') ? 'light' : 'dark';
      applyTheme(next);
      localStorage.setItem('theme', next);
    });
  }

  // Reveal on scroll
  const io = new IntersectionObserver((entries)=>{
    for(const e of entries){
      if(e.isIntersecting){
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    }
  }, {rootMargin:'0px 0px -10% 0px', threshold:0.05});
  $$('.reveal').forEach(el=> io.observe(el));

  // Helper to sanitize text (basic)
  const esc = (s)=> String(s).replace(/[&<>"']/g, (m)=>({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));

  // Populate site from JSON
  async function loadJSON(path){
    try{
      const res = await fetch(path, {cache:'no-store'});
      if(!res.ok) throw new Error('HTTP ' + res.status);
      return await res.json();
    }catch(err){
      console.warn('Failed to load', path, err);
      return null;
    }
  }

  function linkify(icon, href, label){
    if(!href) return '';
    const safe = esc(href);
    return `<a href="${safe}" target="_blank" rel="noopener">${icon} <span class="sr-only">${label}</span></a>`;
  }

  function renderProjects(list){
    const wrap = $('#projects-grid');
    if(!wrap) return;
    wrap.innerHTML = (list && list.length ? list : [{
      title:"Sample Project",
      summary:"Replace this with your real project. Edit data/projects.json.",
      tags:["demo","placeholder"],
      link:"#",
      code:"#"
    }]).map(p=>{
      const tags = (p.tags||[]).map(t=>`<span class="muted">#${esc(t)}</span>`).join(' · ');
      const links = `<div class="cta-row">
        ${p.link ? `<a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">View</a>`:''}
        ${p.code ? `<a class="btn ghost" href="${esc(p.code)}" target="_blank" rel="noopener">Code</a>`:''}
      </div>`;
      return `<article class="card reveal">
        <h3>${esc(p.title)}</h3>
        <p class="muted">${esc(p.summary||'')}</p>
        <p>${tags}</p>
        ${links}
      </article>`;
    }).join('');
    $$('#projects-grid .reveal').forEach(el=> io.observe(el));
  }

  function renderPubs(list){
    const ol = $('#pubs-list');
    if(!ol) return;
    ol.innerHTML = (list && list.length ? list : [{
      authors:"You, Coauthor",
      title:"Sample Paper Title",
      venue:"NeurIPS 2025",
      link:"#",
      notes:"Short blurb or award."
    }]).map(p=>{
      const t = `<strong>${esc(p.title)}</strong>`;
      const meta = [p.venue, p.notes].filter(Boolean).map(esc).join(' — ');
      const a = p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">link</a>` : '';
      return `<li class="reveal">
        <div>${esc(p.authors)}. ${t}. ${meta} ${a ? '('+a+')':''}</div>
      </li>`;
    }).join('');
    $$('#pubs-list .reveal').forEach(el=> io.observe(el));
  }

  function renderExp(list){
    const wrap = $('#exp-grid');
    if(!wrap) return;
    wrap.innerHTML = (list && list.length ? list : [{
      org:"Organization",
      role:"Role",
      when:"2024 — 2025",
      details:"One or two crisp lines about what you did."
    }]).map(e=>`<div class="row reveal">
      <div class="when">${esc(e.when||'')}</div>
      <div><strong>${esc(e.role||'')}</strong> — ${esc(e.org||'')}</div>
      <div class="muted">${esc(e.details||'')}</div>
    </div>`).join('');
    $$('#exp-grid .reveal').forEach(el=> io.observe(el));
  }

  (async function init(){
    const site = await loadJSON('data/site.json');
    const projects = await loadJSON('data/projects.json');
    const pubs = await loadJSON('data/publications.json');
    const exp = await loadJSON('data/experience.json');

    // Site basics
    if(site){
      $('#site-title').textContent = site.title || (site.name ? site.name + ' — Portfolio' : 'Portfolio');
      $('#brand-name').textContent = site.name || 'Your Name';
      $('#hero-name').textContent = site.name || 'Your Name';
      $('#hero-role').textContent = site.role || 'Your role — Your affiliation';
      $('#hero-summary').textContent = site.summary || $('#hero-summary').textContent;
      $('#footer-name').textContent = site.name || 'Your Name';
      $('#year').textContent = new Date().getFullYear();

      // Badges
      const badges = $('#badges');
      badges.innerHTML = (site.badges||['AI Safety','Computer Vision','Generative AI']).map(b=>`<li>${esc(b)}</li>`).join('');

      // Socials
      const s = site.socials || {};
      $('#socials').innerHTML = [
        linkify('🌐', s.website, 'Website'),
        linkify('🐙', s.github, 'GitHub'),
        linkify('👨‍🎓', s.scholar, 'Google Scholar'),
        linkify('💼', s.linkedin, 'LinkedIn'),
        linkify('𝕏', s.twitter, 'Twitter')
      ].join('');

      // Contact
      if(site.email){
        $('#email-link').textContent = site.email;
        $('#email-link').setAttribute('href', 'mailto:' + site.email);
        $('#contact-btn').setAttribute('href', 'mailto:' + site.email);
      }
      if(site.cv){ $('#cv-btn').setAttribute('href', site.cv); }
      if(site.location){ $('#location-text').textContent = site.location; }

      // About
      if(site.about){
        $('#about-text').innerHTML = site.about.map(p=>`<p>${esc(p)}</p>`).join('');
      }
    }else{
      $('#year').textContent = new Date().getFullYear();
    }

    renderProjects(projects && projects.items);
    renderPubs(pubs && pubs.items);
    renderExp(exp && exp.items);
  })();
})();

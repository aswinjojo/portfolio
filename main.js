/**
 * Portfolio – main script
 * Dark mode, navbar, smooth scroll, scroll reveal, project cards, rotating subtitle
 */

(function () {
  'use strict';

  const NAV_OFFSET = 90;
  const STORAGE_THEME = 'portfolio-theme';

  // --- Dark mode ---
  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_THEME);
    } catch (_) {
      return null;
    }
  }

  function setTheme(dark) {
    document.documentElement.classList.toggle('dark', dark);
    try {
      localStorage.setItem(STORAGE_THEME, dark ? 'dark' : 'light');
    } catch (_) {}
    updateThemeButton(dark);
  }

  function updateThemeButton(dark) {
    const btn = document.getElementById('theme-toggle');
    if (!btn) return;
    const sun = btn.querySelector('[data-sun]');
    const moon = btn.querySelector('[data-moon]');
    if (sun) sun.style.display = dark ? 'none' : 'block';
    if (moon) moon.style.display = dark ? 'block' : 'none';
    btn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  }

  function initTheme() {
    const stored = getStoredTheme();
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = stored === 'dark' || (stored !== 'light' && prefersDark);
    setTheme(dark);

    document.getElementById('theme-toggle')?.addEventListener('click', function () {
      setTheme(!document.documentElement.classList.contains('dark'));
    });
  }

  // --- Mobile menu ---
  function initMobileMenu() {
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggle || !menu) return;
    toggle.addEventListener('click', function () {
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
    });
    document.querySelectorAll('.mobile-menu .nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Smooth scroll + active nav ---
  function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.pageYOffset - NAV_OFFSET;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  function setActiveNav(id) {
    document.querySelectorAll('.nav-link').forEach(function (link) {
      const href = link.getAttribute('href');
      if (href === '#' + id) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  function initNav() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      const id = anchor.getAttribute('href').slice(1);
      if (!id) return;
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        scrollToSection(id);
        setActiveNav(id);
      });
    });

    window.addEventListener('scroll', function () {
      const sections = document.querySelectorAll('section[id]');
      let current = '';
      const scrollY = window.pageYOffset;
      sections.forEach(function (section) {
        const top = section.offsetTop - NAV_OFFSET - 20;
        if (scrollY >= top) current = section.getAttribute('id') || '';
      });
      if (current) setActiveNav(current);
    });
  }

  // --- Scroll reveal ---
  function initReveal() {
    const els = document.querySelectorAll('.reveal');
    if (!els.length) return;
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(function (el) {
      observer.observe(el);
    });
  }

  // --- Skill bars animate on visible ---
  function initSkillBars() {
    const section = document.getElementById('skills');
    if (!section) return;
    const bars = section.querySelectorAll('.skill-bar-fill');
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    bars.forEach(function (bar) {
      observer.observe(bar);
    });
  }

  // --- Rotating subtitle (hero) ---
  const ROTATE_PHRASES = [
    'Full-Stack • Cloud • Data Pipelines',
    'Cloud • Data Pipelines • Full-Stack',
    'Data Pipelines • Full-Stack • Cloud'
  ];
  let rotateIndex = 0;

  function initRotateSubtitle() {
    const el = document.getElementById('hero-subtitle-rotate');
    if (!el) return;
    function tick() {
      const phrase = ROTATE_PHRASES[rotateIndex % ROTATE_PHRASES.length];
      el.style.opacity = '0';
      el.style.transform = 'translateY(6px)';
      requestAnimationFrame(function () {
        el.textContent = phrase;
        el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
      rotateIndex += 1;
    }
    tick();
    setInterval(tick, 2800);
  }

  // --- Project cards from config (PROJECTS must be loaded before main.js) ---
  function escapeHtml(s) {
    const div = document.createElement('div');
    div.textContent = s;
    return div.innerHTML;
  }

  function renderProjectCard(project) {
    const isInternal = project.visibility === 'internal';
    const hasGithub = project.links.github && project.links.github.indexOf('REPLACE_') !== 0;
    const hasLive = project.links.live && project.links.live.indexOf('REPLACE_') !== 0;
    const hasCaseStudy = project.links.caseStudy && project.links.caseStudy.indexOf('REPLACE_') !== 0;

    const techPills = (project.tech || [])
      .slice(0, 6)
      .map(function (t) {
        return '<span class="pill">' + escapeHtml(t) + '</span>';
      })
      .join('');

    let actions = '';
    if (!isInternal && hasGithub) {
      actions += '<a href="' + escapeHtml(project.links.github) + '" class="btn-sm btn-accent" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg> GitHub</a>';
    }
    if (hasLive) {
      actions += '<a href="' + escapeHtml(project.links.live) + '" class="btn-sm" target="_blank" rel="noopener noreferrer"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg> Live Demo</a>';
    }
    if (hasCaseStudy) {
      actions += '<a href="' + escapeHtml(project.links.caseStudy) + '" class="btn-sm" target="_blank" rel="noopener noreferrer">Case Study</a>';
    }

    const badge = isInternal
      ? '<span class="badge-internal">Internal (NDA)</span>'
      : '';

    return (
      '<article class="project-card reveal" id="project-' + escapeHtml(project.id) + '">' +
        '<div class="project-card-image">' +
          '<img src="' + escapeHtml(project.image || '') + '" alt="' + escapeHtml(project.title) + '" loading="lazy" />' +
        '</div>' +
        '<div class="project-card-body">' +
          (badge ? '<div class="project-card-badges">' + badge + '</div>' : '') +
          '<h3>' + escapeHtml(project.title) + '</h3>' +
          '<p class="project-card-desc">' + escapeHtml(project.description) + '</p>' +
          '<div class="project-card-tech">' + techPills + '</div>' +
          '<div class="project-card-actions">' + actions + '</div>' +
        '</div>' +
      '</article>'
    );
  }

  function renderProjects() {
    const container = document.getElementById('projects-grid');
    if (!container || typeof PROJECTS === 'undefined') return;
    container.innerHTML = PROJECTS.map(renderProjectCard).join('');
    initReveal();
  }

  // --- Run on DOM ready ---
  function init() {
    initTheme();
    initMobileMenu();
    initNav();
    initSkillBars();
    initRotateSubtitle();
    renderProjects();
    initReveal();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

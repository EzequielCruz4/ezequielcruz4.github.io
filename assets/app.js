(() => {
  'use strict';

  const { projects, email } = window.PORTFOLIO;
  const cases = document.getElementById('case-studies');
  const dialog = document.getElementById('case-dialog');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
  const escape = value => String(value).replace(/[&<>"']/g, char => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  })[char]);
  const icon = name => `<svg class="icon" aria-hidden="true"><use href="#${name}"/></svg>`;
  const tags = values => values.map(tag => `<span>${escape(tag)}</span>`).join('');
  const phoneHeader = `<div class="mock-status"><span>9:41</span><span>••• ▰</span></div><div class="mock-brand">${icon('leaf')}Calme</div>`;
  const previews = {
    calme: `<div class="phone phone-welcome">${phoneHeader}
      <span class="mock-pill">UM ESPAÇO PARA VOCÊ</span>
      <div class="mock-art"><div class="mock-ripple"><span>${icon('leaf')}</span></div></div>
      <div class="mock-heading">Mais calma.<br>No seu tempo.</div>
      <p class="mock-copy">Conheça suas emoções e encontre pequenas formas de lidar com a ansiedade social.</p>
      <div class="mock-dots"><i></i><i></i><i></i><i></i></div>
      <span class="mock-button">Conhecer o Calme</span><span class="mock-text-link">Já tenho uma conta</span>
      <span class="mock-support">Preciso de apoio agora</span>
    </div><div class="phone phone-motive">${phoneHeader}
      <span class="mock-pill">COMECE DO SEU JEITO</span>
      <div class="mock-heading">O que te trouxe<br>até aqui?</div>
      <p class="mock-copy">Escolha o que faz sentido para você agora.</p>
      <div class="mock-choice selected"><i></i>Entender meus sentimentos</div>
      <div class="mock-choice"><i></i>Aprender a lidar com a ansiedade</div>
      <div class="mock-choice"><i></i>Dar pequenos passos sociais</div>
      <span class="mock-button">Continuar</span><span class="mock-text-link">Prefiro explorar primeiro</span>
      <span class="mock-support">Preciso de apoio agora</span>
    </div>`,
    pokedex: `<div class="pokedex-window"><div class="app-chrome"><i></i><i></i><i></i><span>Pokédex · .NET MAUI</span></div>
      <div class="poke-content"><div class="poke-header"><strong>Minha Pokédex</strong><span class="poke-new">+ Novo</span></div>
      <p class="poke-caption">Descubra, cadastre e monte sua coleção.</p>
      <div class="poke-search">Buscar por nome ou poder <span>⌕</span></div>
      <p class="poke-filter">Todos os tipos · Dados de exemplo</p>
      ${[
        { number: '001', name: 'Bulbasaur', type: 'Grama', color: '' },
        { number: '002', name: 'Pikachu', type: 'Elétrico', color: 'electric' },
        { number: '003', name: 'Squirtle', type: 'Água', color: 'water' }
      ].map(pokemon => `<div class="poke-row"><span class="poke-thumb ${pokemon.color}"><i class="poke-ball"></i></span><div class="poke-detail"><span>REGISTRO ${pokemon.number}</span><strong>${pokemon.name}</strong><b class="poke-type ${pokemon.color}">${pokemon.type}</b></div></div>`).join('')}
      </div></div><div class="database-label">${icon('database')}SQLite · Dados locais</div>`
  };

  cases.innerHTML = projects.map(project => `<article class="case-study reveal" id="projeto-${escape(project.id)}">
    <button type="button" class="case-visual ${escape(project.id)}-preview" data-case="${escape(project.id)}" aria-label="Ver estudo de caso: ${escape(project.title)}">
      <span class="preview-caption">${project.id === 'calme' ? 'CALME / ONBOARDING' : 'POKÉDEX / COLEÇÃO'}</span>
      <div class="scene" aria-hidden="true">${previews[project.id] || ''}</div>
      <span class="preview-cue" aria-hidden="true">Explorar projeto ${icon('arrow')}</span>
    </button>
    <div class="case-body"><p class="case-index"><span>${escape(project.number)}</span><span>${escape(project.label)}</span></p>
      <h3>${escape(project.title)}</h3><p class="case-subtitle">${escape(project.subtitle)}</p>
      <p class="case-description">${escape(project.description)}</p>
      <div class="case-role"><span>MINHA CONTRIBUIÇÃO</span><p>${escape(project.role)}</p></div>
      <div class="tags">${tags(project.tags)}</div>
      <div class="case-actions"><button type="button" class="case-action" data-case="${escape(project.id)}">Ver estudo de caso ${icon('arrow')}</button>
      ${project.repository ? `<a class="case-code" href="${escape(project.repository)}" target="_blank" rel="noopener noreferrer" aria-label="Ver código de ${escape(project.title)}">${icon('github')}Código</a>` : ''}</div>
    </div></article>`).join('');

  let previousFocus;
  cases.addEventListener('click', event => {
    const trigger = event.target.closest('[data-case]');
    if (!trigger) return;
    const project = projects.find(item => item.id === trigger.dataset.case);
    if (!project) return;
    previousFocus = trigger;
    const setText = (id, text) => { document.getElementById(id).textContent = text; };
    setText('dialog-label', `PROJETO ${project.number} / ${project.title}`);
    setText('dialog-type', project.type);
    setText('dialog-title', project.title);
    setText('dialog-summary', project.subtitle);
    setText('dialog-context', project.context);
    setText('dialog-contribution', project.contribution);
    setText('dialog-scope', project.scope);
    document.getElementById('dialog-facts').innerHTML = `<div><dt>Minha atuação</dt><dd>${escape(project.role)}</dd></div><div><dt>Foco do projeto</dt><dd>${escape(project.focus)}</dd></div>`;
    document.getElementById('dialog-features').innerHTML = project.features.map(feature => `<li>${escape(feature)}</li>`).join('');
    document.getElementById('dialog-decisions').innerHTML = project.decisions.map(decision => `<div class="decision-item"><h4>${escape(decision.title)}</h4><p>${escape(decision.text)}</p></div>`).join('');
    document.getElementById('dialog-tags').innerHTML = tags(project.tags);
    const repository = document.getElementById('dialog-repository');
    repository.hidden = !project.repository;
    if (project.repository) repository.href = project.repository;
    else repository.removeAttribute('href');
    dialog.showModal();
    dialog.scrollTop = 0;
    document.body.classList.add('dialog-open');
    document.getElementById('dialog-close').focus({ preventScroll: true });
  });
  document.getElementById('dialog-close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    previousFocus?.focus({ preventScroll: true });
  });

  const menu = document.querySelector('.menu-toggle');
  const navigation = document.getElementById('main-nav');
  const closeMenu = () => {
    menu.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-label', 'Abrir menu');
    navigation.classList.remove('open');
  };
  menu.addEventListener('click', () => {
    const open = menu.getAttribute('aria-expanded') !== 'true';
    menu.setAttribute('aria-expanded', String(open));
    menu.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    navigation.classList.toggle('open', open);
  });
  navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!event.target.closest('.navigation')) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') {
      closeMenu();
      menu.focus();
    }
  });
  window.matchMedia('(max-width: 600px)').addEventListener('change', closeMenu);

  let toastTimeout;
  const toast = message => {
    const element = document.getElementById('toast');
    element.textContent = message;
    element.classList.add('visible');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => element.classList.remove('visible'), 4000);
  };
  document.getElementById('copy-email').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast('E-mail copiado. Vamos conversar!');
    } catch { toast(`Meu e-mail: ${email}`); }
  });
  document.getElementById('year').textContent = new Date().getFullYear();

  const header = document.querySelector('.site-header');
  let scrollFrame;
  const updateHeader = () => {
    header.classList.toggle('scrolled', window.scrollY > 24);
    scrollFrame = null;
  };
  window.addEventListener('scroll', () => {
    if (!scrollFrame) scrollFrame = requestAnimationFrame(updateHeader);
  }, { passive: true });
  updateHeader();

  const revealElements = document.querySelectorAll('.case-study, .section-heading, .about-layout > div, .knowledge-grid > article, .contact-layout, .contact-links');
  revealElements.forEach(element => element.classList.add('reveal'));
  const visibleCards = new Set();
  const syncMotion = () => {
    visibleCards.forEach(card => card.classList.toggle('is-in-view', !reducedMotion.matches && !document.hidden));
    if (reducedMotion.matches) {
      document.documentElement.classList.remove('motion-ready');
      document.querySelectorAll('.scene').forEach(scene => {
        scene.style.removeProperty('--rx');
        scene.style.removeProperty('--ry');
      });
    }
  };
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    }), { threshold: 0.08, rootMargin: '0px 0px -25px 0px' });
    revealElements.forEach(element => revealObserver.observe(element));
    if (!reducedMotion.matches) document.documentElement.classList.add('motion-ready');

    const cardObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) visibleCards.add(entry.target);
      else {
        visibleCards.delete(entry.target);
        entry.target.classList.remove('is-in-view');
      }
      syncMotion();
    }), { threshold: 0.05 });
    document.querySelectorAll('.case-study').forEach(card => cardObserver.observe(card));

    const navigationObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navigation.querySelectorAll('a').forEach(link => {
        const current = link.hash === `#${entry.target.id}`;
        link.classList.toggle('current', current);
        if (current) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }), { rootMargin: '-15% 0px -65% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]:not(#inicio)').forEach(section => navigationObserver.observe(section));
  }
  reducedMotion.addEventListener('change', syncMotion);
  document.addEventListener('visibilitychange', syncMotion);

  document.querySelectorAll('.case-visual').forEach(visual => {
    const scene = visual.querySelector('.scene');
    let pointerFrame;
    visual.addEventListener('pointermove', event => {
      if (reducedMotion.matches || !finePointer.matches || event.pointerType !== 'mouse') return;
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      const { clientX, clientY } = event;
      pointerFrame = requestAnimationFrame(() => {
        const rect = visual.getBoundingClientRect();
        scene.style.setProperty('--rx', `${((clientY - rect.top) / rect.height - 0.5) * -4}deg`);
        scene.style.setProperty('--ry', `${((clientX - rect.left) / rect.width - 0.5) * 5}deg`);
      });
    }, { passive: true });
    visual.addEventListener('pointerleave', () => {
      if (pointerFrame) cancelAnimationFrame(pointerFrame);
      scene.style.removeProperty('--rx');
      scene.style.removeProperty('--ry');
    });
  });
})();

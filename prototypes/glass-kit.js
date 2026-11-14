/* Glass kit: the field, the light, the glints and the Glass on and off switch shared by the reference drafts.
   Call glassKit.init({ scenes }) once gsap and ScrollTrigger are ready. scenes is a list of [selector, mix];
   each mix sets the field's colours (c1 to c4), positions (x1 to y4, in %) and ray strength (ray) while that section is mid screen */
window.glassKit = (() => {
  const html = document.documentElement;
  const KEY = '3not8-glass';
  try { if (localStorage.getItem(KEY) === 'off') html.classList.remove('glass-on'); else html.classList.add('glass-on'); } catch (e) { html.classList.add('glass-on'); }

  function init(opts = {}) {
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const fine = matchMedia('(hover: hover) and (pointer: fine)').matches;
    // Field
    const aura = document.createElement('div');
    aura.className = 'gk-aura'; aura.setAttribute('aria-hidden', 'true');
    aura.innerHTML = '<div class="gk-blobs"></div><div class="gk-rays"><i></i><i></i></div>';
    document.body.prepend(aura);
    // Switch
    const sw = document.createElement('div');
    sw.className = 'gk-switch pill label'; sw.setAttribute('role', 'group'); sw.setAttribute('aria-label', 'Compare the glass with the flat brand');
    sw.innerHTML = '<button type="button" data-glass="on">Glass on</button><button type="button" data-glass="off">Glass off</button>';
    document.body.append(sw);
    const btns = [...sw.querySelectorAll('button')];
    const paint = () => { const on = html.classList.contains('glass-on'); btns.forEach(b => b.setAttribute('aria-pressed', String((b.dataset.glass === 'on') === on))); };
    btns.forEach(b => b.addEventListener('click', () => {
      const on = b.dataset.glass === 'on'; html.classList.toggle('glass-on', on); paint();
      try { localStorage.setItem(KEY, on ? 'on' : 'off'); } catch (e) {}
      if (window.ScrollTrigger) ScrollTrigger.refresh();
      document.dispatchEvent(new CustomEvent('glasschange', { detail: { on } }));
    }));
    paint();
    if (!window.gsap) return;
    // Scenes
    const scenes = opts.scenes || [];
    const vars = s => { const o = {}; Object.entries(s).forEach(([k, v]) => { o['--' + k] = k === 'ray' ? v : typeof v === 'number' ? v + '%' : v; }); return o; };
    let now = -1;
    const go = (i, instant) => { if (i === now) return; now = i; gsap.to(html, { ...vars(scenes[i][1]), duration: reduce || instant ? 0 : 1.8, ease: 'power2.inOut', overwrite: 'auto' }); };
    if (scenes.length) {
      go(0, true);
      const zones = scenes.map(([sel]) => document.querySelector(sel));
      const check = () => { const mid = innerHeight * .5; zones.forEach((z, i) => { if (!z) return; const r = (z.closest('.pin-spacer') || z).getBoundingClientRect(); if (r.top <= mid && r.bottom > mid) go(i); }); };
      window.addEventListener('scroll', check, { passive: true }); check();
    }
    // Glints and the pointer light on every glass surface
    document.querySelectorAll('.g').forEach(c => {
      c.addEventListener('pointermove', e => { const r = c.getBoundingClientRect(); c.style.setProperty('--px', `${e.clientX - r.left}px`); c.style.setProperty('--py', `${e.clientY - r.top}px`); c.style.setProperty('--lit', 1); });
      c.addEventListener('pointerleave', () => c.style.setProperty('--lit', 0));
      if (!reduce && window.ScrollTrigger) ScrollTrigger.create({ trigger: c, start: 'top 85%', once: true, onEnter: () => gsap.fromTo(c, { '--glint': '160%' }, { '--glint': '-60%', duration: 1.6, ease: 'power2.inOut' }) });
    });
    if (reduce) return;
    gsap.to('.gk-rays', { rotation: 4, duration: 14, ease: 'sine.inOut', yoyo: true, repeat: -1 });
    const dx = gsap.quickSetter(html, '--dx', '%'), dy = gsap.quickSetter(html, '--dy', '%');
    let t = 0;
    gsap.ticker.add((time, delta) => { if (!html.classList.contains('glass-on')) return; t += delta / 1000; dx(Math.sin(t * .17) * 6); dy(Math.cos(t * .13) * 5); });
  }
  return { init, on: () => html.classList.contains('glass-on') };
})();

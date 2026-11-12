/* Review chrome shared by every draft: a tab that says which draft this is, and a list to jump between them.
   Not part of the site design. Remove the script tag when a draft becomes the real page. */
(() => {
  const DRAFTS = [
    ['01', '01-hero-direction', 'First hero study', 'Hero'],
    ['02', '02-home', 'Home page, version one', 'Full page'],
    ['03', '03-sections', 'Home page, version two', 'Full page'],
    ['04', '04-hero-options', 'Hero options', 'Options'],
    ['05', '05-work', 'Work page', 'Inner page'],
    ['06', '06-project', 'Project page', 'Inner page'],
    ['07', '07-studio', 'Studio page', 'Inner page'],
    ['08', '08-contact', 'Contact page', 'Inner page'],
    ['09', '09-details', 'Small details', 'Pieces'],
    ['10', '10-services', 'Services page', 'Inner page'],
    ['11', '11-navigation', 'Menu and page transitions', 'Pieces'],
    ['12', '12-footers', 'Footer options', 'Options'],
    ['13', '13-wall', 'Curved wall of work', 'Inner page'],
    ['14', '14-film-gate', 'Motion in SVG, run by scroll', 'Pieces'],
    ['15', '15-depth', 'Heroes with depth', 'Hero'],
    ['16', '16-drum-index', 'Work index on a drum', 'Inner page'],
    ['17', '17-split-hero', 'The split as the hero', 'Hero'],
    ['18', '18-wall-hero', 'The wall as the hero', 'Hero'],
    ['19', '19-reel-gate', 'Reels through the gate', 'Pieces'],
    ['20', '20-combination-index', 'Work index on two wheels', 'Inner page']
  ];
  const m = location.pathname.match(/prototypes\/(\d\d)-/);
  const cur = DRAFTS.find(d => m && d[0] === m[1]);
  if (!cur) return;
  const css = `
.dbar-tab { position: fixed; z-index: 97; left: 0; top: 50%; transform: translateY(-50%); writing-mode: vertical-rl; display: flex; align-items: center; gap: .7em;
  padding: 1.1em .55em; background: #F8F2EB; color: #162C29; border: 0; border-radius: 0 .5em .5em 0; box-shadow: 0 0 0 1px rgba(22,44,41,.25), 0 .4em 1.4em rgba(5,21,17,.35);
  font: 700 11px/1 Montserrat, Arial, sans-serif; letter-spacing: .18em; text-transform: uppercase; cursor: pointer; }
.dbar-tab b { color: #C64D01; font-weight: 900; font-size: 15px; letter-spacing: 0; }
.dbar-tab span { transform: rotate(180deg); }
.dbar-tab i { width: 1px; height: 1.6em; background: rgba(22,44,41,.3); }
.dbar-panel { position: fixed; z-index: 98; left: 0; top: 0; bottom: 0; width: min(24rem, 88vw); background: #F8F2EB; color: #162C29; padding: 1.6rem 1.4rem; overflow-y: auto; overscroll-behavior: contain;
  font: 500 15px/1.3 Montserrat, Arial, sans-serif; transform: translateX(-102%); transition: transform .6s cubic-bezier(.65,.05,0,1); box-shadow: 0 0 3rem rgba(5,21,17,.45); visibility: hidden; }
.dbar-open .dbar-panel { transform: none; visibility: visible; }
.dbar-shade { position: fixed; z-index: 97; inset: 0; background: rgba(5,21,17,.55); opacity: 0; pointer-events: none; transition: opacity .5s; }
.dbar-open .dbar-shade { opacity: 1; pointer-events: auto; }
.dbar-head { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.2rem; font: 700 11px/1 Montserrat, Arial, sans-serif; letter-spacing: .18em; text-transform: uppercase; color: #C64D01; }
.dbar-head button { font: inherit; letter-spacing: inherit; text-transform: inherit; color: #162C29; background: none; border: 0; cursor: pointer; padding: .5em 0; }
.dbar-panel a { display: grid; grid-template-columns: 2.2rem 1fr; gap: .2rem .6rem; padding: .8rem .7rem; margin: 0 -.7rem; border-top: 1px solid rgba(22,44,41,.15); color: inherit; text-decoration: none; }
.dbar-panel a b { font-weight: 900; color: #C64D01; }
.dbar-panel a em { grid-column: 2; font-style: normal; font: 700 10px/1 Montserrat, Arial, sans-serif; letter-spacing: .18em; text-transform: uppercase; opacity: .55; }
.dbar-panel a:hover { background: rgba(22,44,41,.07); }
.dbar-panel a[aria-current] { background: #162C29; color: #F8F2EB; }
.dbar-panel a[aria-current] b { color: #F5731D; }
.dbar-panel .dbar-all { display: block; margin-top: 1rem; border: 1px solid #162C29; text-align: center; font-weight: 700; }
.dbar-tab:focus-visible, .dbar-panel a:focus-visible, .dbar-head button:focus-visible { outline: 2px solid #F5731D; outline-offset: 2px; }
@media (max-width: 991px) {
  .dbar-tab { writing-mode: horizontal-tb; top: auto; bottom: 14px; left: 8px; transform: none; border-radius: 10em; padding: .75em 1em; font-size: 10px; }
  .dbar-tab span { transform: none; } .dbar-tab .dbar-name, .dbar-tab i { display: none; } .dbar-tab b { font-size: 12px; }
}
@media (prefers-reduced-motion: reduce) { .dbar-panel, .dbar-shade { transition: none; } }`;
  const style = document.createElement('style'); style.textContent = css; document.head.appendChild(style);
  const tab = document.createElement('button');
  tab.className = 'dbar-tab'; tab.setAttribute('aria-expanded', 'false'); tab.setAttribute('aria-label', `Draft ${cur[0]}, ${cur[2]}. Show all drafts`);
  tab.innerHTML = `<span>Draft <b>${cur[0]}</b></span><i></i><span class="dbar-name">${cur[2]}</span>`;
  const shade = document.createElement('div'); shade.className = 'dbar-shade';
  const panel = document.createElement('nav'); panel.className = 'dbar-panel'; panel.setAttribute('aria-label', 'All drafts');
  panel.innerHTML = `<div class="dbar-head"><span>You are on draft ${cur[0]} of ${DRAFTS.length}</span><button type="button">Close</button></div>` +
    DRAFTS.map(d => `<a href="../${d[1]}/"${d === cur ? ' aria-current="page"' : ''}><b>${d[0]}</b><span>${d[2]}</span><em>${d[3]}</em></a>`).join('') +
    `<a class="dbar-all" href="../../">Back to the list of drafts</a>`;
  document.body.append(shade, panel, tab);
  const root = document.documentElement;
  const set = open => { root.classList.toggle('dbar-open', open); tab.setAttribute('aria-expanded', open); if (open) panel.querySelector('[aria-current]').focus({ preventScroll: true }); };
  tab.addEventListener('click', () => set(!root.classList.contains('dbar-open')));
  shade.addEventListener('click', () => set(false));
  panel.querySelector('button').addEventListener('click', () => { set(false); tab.focus(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape' && root.classList.contains('dbar-open')) { set(false); tab.focus(); } });
  panel.setAttribute('data-lenis-prevent', '');
})();

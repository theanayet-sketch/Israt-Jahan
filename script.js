/* ===== Settings ===== */
const FORM_ENDPOINT = ''; // Future backend URL (POST JSON). Empty = demo mode.

const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];

/* ===== Mobile menu ===== */
const burger = $('#burger'), menu = $('#menu');
const closeMenu = () => {menu.classList.remove('open');burger.classList.remove('open');burger.setAttribute('aria-expanded','false')};
burger.addEventListener('click', () => {
  const o = menu.classList.toggle('open'); burger.classList.toggle('open', o); burger.setAttribute('aria-expanded', o);
});
$$('#menu a').forEach(a => a.addEventListener('click', closeMenu));
document.addEventListener('keydown', e => e.key === 'Escape' && closeMenu());

/* ===== Sticky shadow + back to top ===== */
const nav = $('#nav'), toTop = $('#top');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 10);
  toTop.classList.toggle('show', scrollY > 500);
}, {passive:true});
toTop.addEventListener('click', () => scrollTo({top:0,behavior:'smooth'}));

/* ===== Active nav link ===== */
const links = $$('#menu a:not(.btn)');
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
}), {rootMargin:'-45% 0px -50% 0px'});
$$('main section[id]').forEach(s => spy.observe(s));

/* ===== Reveal on scroll ===== */
const rv = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) {e.target.classList.add('in');rv.unobserve(e.target)}
}), {threshold:.12});
$$('.reveal').forEach((el,i) => {el.style.transitionDelay = (i % 4) * 80 + 'ms'; rv.observe(el)});

/* ===== Contact form validation ===== */
const form = $('#form'), ok = $('#ok');
const rules = {
  name: v => v.trim().length >= 2 || 'Please enter your name.',
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Please enter a valid email.',
  subject: v => v.trim().length >= 3 || 'Please enter a subject.',
  message: v => v.trim().length >= 10 || 'Message should be at least 10 characters.'
};
const check = f => {
  const r = rules[f.name](f.value), bad = r !== true;
  f.classList.toggle('invalid', bad); f.nextElementSibling.textContent = bad ? r : ''; return !bad;
};
$$('input,textarea', form).forEach(f => f.addEventListener('blur', () => check(f)));
form.addEventListener('submit', async e => {
  e.preventDefault(); ok.textContent = '';
  const fields = $$('input,textarea', form);
  if (!fields.map(check).every(Boolean)) return;
  const data = Object.fromEntries(new FormData(form));
  try {
    if (FORM_ENDPOINT) {
      const r = await fetch(FORM_ENDPOINT, {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data)});
      if (!r.ok) throw new Error();
    }
    ok.textContent = 'Thank you! Your message is ready to send.'; form.reset();
  } catch { ok.textContent = 'Something went wrong. Please try again.'; }
});

$('#yr').textContent = new Date().getFullYear();

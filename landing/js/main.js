// Navegación
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', scrollY > 30);
addEventListener('scroll', onScroll); onScroll();

const burger = document.getElementById('burger'), links = document.getElementById('navLinks');
burger.addEventListener('click', () => links.classList.toggle('open'));
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => links.classList.remove('open')));

// Animación de aparición
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ===== LOGIN (solo en sistema.html) =====
// Demostración del lado del cliente. Un sistema real debe validar en un servidor.
const form = document.getElementById('loginForm');
if (form) {
  const DEMO = { user: 'admin', pass: 'moov123' };
  const dash = document.getElementById('dash');
  const msg = document.getElementById('msg');
  const userIn = document.getElementById('user'), passIn = document.getElementById('pass');

  const showDash = name => { form.style.display = 'none'; document.getElementById('dashName').textContent = name; dash.classList.add('show'); };
  const showLogin = () => { dash.classList.remove('show'); form.style.display = ''; form.reset(); msg.textContent = ''; };

  try { const saved = localStorage.getItem('moovUser'); if (saved) showDash(saved); } catch (e) {}

  form.addEventListener('submit', e => {
    e.preventDefault();
    const u = userIn.value.trim(), p = passIn.value;
    msg.className = 'msg';
    if (!u || !p) { msg.classList.add('err'); msg.textContent = 'Completa usuario y contraseña.'; return; }
    if (u === DEMO.user && p === DEMO.pass) {
      if (document.getElementById('remember').checked) { try { localStorage.setItem('moovUser', u); } catch (e) {} }
      showDash(u);
    } else {
      msg.classList.add('err'); msg.textContent = 'Usuario o contraseña incorrectos.';
      form.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 300 });
    }
  });

  document.getElementById('logout').addEventListener('click', () => { try { localStorage.removeItem('moovUser'); } catch (e) {} showLogin(); });

  document.getElementById('togglePass').addEventListener('click', function () {
    const show = passIn.type === 'password';
    passIn.type = show ? 'text' : 'password';
    this.textContent = show ? 'Ocultar' : 'Mostrar';
  });

  document.getElementById('forgot').addEventListener('click', e => {
    e.preventDefault(); msg.className = 'msg info'; msg.textContent = 'Contacta a recepción para restablecer tu contraseña.';
  });
}

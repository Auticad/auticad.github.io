// ===========================
// MOBILE MENU
// ===========================
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('open');
}
document.addEventListener('click', (e) => {
  const nav = document.querySelector('.nav-links');
  const btn = document.querySelector('.hamburger');
  if (nav && nav.classList.contains('open') && !nav.contains(e.target) && e.target !== btn) {
    nav.classList.remove('open');
  }
});

// ===========================
// TERMINAL ANIMATION (homepage)
// Stack reale: Python, SQL, Claude API, Docker
// ===========================
const terminalLines = [
  { type: 'cmd',     text: '$ python analyze_data.py --source sales.sql' },
  { type: 'comment', text: '# Connessione a SQL Server...' },
  { type: 'success', text: '✓ 18.420 righe caricate' },
  { type: 'success', text: '✓ Anomalie rilevate: 7' },
  { type: 'cmd',     text: '$ claude "genera insight da questo dataset"' },
  { type: 'comment', text: '# Claude API in elaborazione...' },
  { type: 'success', text: '✓ 5 pattern significativi estratti' },
  { type: 'success', text: '✓ Report.md generato' },
  { type: 'cmd',     text: '$ claude code "crea dashboard Power BI-ready"' },
  { type: 'comment', text: '# Scrittura file in corso...' },
  { type: 'success', text: '✓ dashboard.py scritto — 248 righe' },
  { type: 'success', text: '✓ requirements.txt aggiornato' },
  { type: 'cmd',     text: '$ docker-compose up --build' },
  { type: 'success', text: '✓ Container avviato su :8000' },
  { type: 'cmd',     text: '$ _' },
];

function typeTerminal() {
  const el = document.getElementById('terminal');
  if (!el) return;
  let i = 0;
  function addLine() {
    if (i >= terminalLines.length) {
      setTimeout(() => { el.innerHTML = ''; i = 0; addLine(); }, 3500);
      return;
    }
    const l = terminalLines[i];
    const span = document.createElement('span');
    span.className = `t-line t-${l.type}`;
    span.textContent = l.text;
    el.appendChild(span);
    el.appendChild(document.createTextNode('\n'));
    el.scrollTop = el.scrollHeight;
    i++;
    setTimeout(addLine, l.type === 'cmd' ? 700 : 320);
  }
  addLine();
}

// ===========================
// COUNTER ANIMATION
// ===========================
function animateCounters() {
  document.querySelectorAll('.stat-num').forEach(el => {
    const target = parseInt(el.dataset.target);
    const suffix = el.dataset.suffix || '';
    let current = 0;
    const step = Math.max(1, Math.ceil(target / 60));
    const interval = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current + suffix;
      if (current >= target) clearInterval(interval);
    }, 22);
  });
}

// ===========================
// SKILL BARS ANIMATION
// ===========================
function animateSkillBars() {
  const bars = document.querySelectorAll('.sb-fill');
  if (!bars.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        bars.forEach(bar => { bar.style.width = bar.dataset.w + '%'; });
        observer.disconnect();
      }
    });
  }, { threshold: 0.25 });
  const section = document.querySelector('.skills-layout');
  if (section) observer.observe(section);
}

// ===========================
// PROJECT FILTER
// ===========================
function filterProjects(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.project-card').forEach(card => {
    const cats = card.dataset.category || '';
    if (cat === 'all' || cats.includes(cat)) {
      card.classList.remove('hidden');
      card.style.animation = 'fadeInUp 0.3s ease forwards';
    } else {
      card.classList.add('hidden');
    }
  });
}

// ===========================
// CONTACT FORM
// ===========================
function sendMessage() {
  const name    = document.getElementById('f-name')?.value.trim();
  const email   = document.getElementById('f-email')?.value.trim();
  const message = document.getElementById('f-message')?.value.trim();
  const fb      = document.getElementById('form-feedback');
  if (!fb) return;
  if (!name || !email || !message) {
    fb.style.color = 'var(--red)';
    fb.textContent = '✗ Compila tutti i campi obbligatori.';
    return;
  }
  if (!email.includes('@')) {
    fb.style.color = 'var(--red)';
    fb.textContent = '✗ Indirizzo email non valido.';
    return;
  }
  fb.style.color = 'var(--green)';
  fb.textContent = '$ sending... ✓ Messaggio inviato. Rispondo entro 24h.';
  document.getElementById('f-name').value    = '';
  document.getElementById('f-email').value   = '';
  document.getElementById('f-message').value = '';
}

// ===========================
// NAVBAR SCROLL GLOW
// ===========================
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  if (window.scrollY > 40) {
    nav.style.borderBottomColor = 'rgba(0,255,157,0.18)';
    nav.style.boxShadow = '0 2px 24px rgba(0,0,0,0.4)';
  } else {
    nav.style.borderBottomColor = 'var(--border)';
    nav.style.boxShadow = 'none';
  }
});

// ===========================
// FADE-IN CARDS
// ===========================
function initCardAnimations() {
  const cards = document.querySelectorAll('.project-card, .tl-item, .cert-card, .contact-item');
  cards.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.45s ease ${i * 0.07}s, transform 0.45s ease ${i * 0.07}s`;
    setTimeout(() => {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
    }, 80 + i * 70);
  });
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  typeTerminal();
  animateCounters();
  animateSkillBars();
  initCardAnimations();
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => filterProjects(btn.dataset.filter, btn));
  });
});

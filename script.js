// ── HAMBURGER ──
  function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // ── SCROLL REVEAL ──
  const revealEls = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 80);
      }
    });
  }, { threshold: 0.1 });
  revealEls.forEach(el => observer.observe(el));

  // ── SKILL BARS ──
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll('.skill-fill').forEach(fill => {
          fill.style.width = fill.dataset.width + '%';
        });
      }
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.skill-category').forEach(el => barObserver.observe(el));

  // ── CONTACT FORM ──
  function handleSubmit() {
    const btn = document.querySelector('.btn-submit');
    btn.textContent = '✅ Message Sent!';
    btn.style.background = '#10b981';
    setTimeout(() => {
      btn.textContent = 'Send Message ✉️';
      btn.style.background = '';
    }, 3000);
  }

  // ── ACTIVE NAV ──
  const sections = document.querySelectorAll('secti
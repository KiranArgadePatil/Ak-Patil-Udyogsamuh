document.addEventListener('DOMContentLoaded', () => {
  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  const menuButton = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (menuButton && navLinks) {
    menuButton.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', navLinks.classList.contains('open'));
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => navLinks.classList.remove('open')));
  }

  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.getElementById('name')?.value.trim() || '';
      const phone = document.getElementById('phone')?.value.trim() || '';
      const service = document.getElementById('service')?.value || '';
      const message = document.getElementById('message')?.value.trim() || '';
      const text = `नमस्कार AK इलेक्ट्रिशियन,%0A%0Aनाव: ${encodeURIComponent(name)}%0Aमोबाईल: ${encodeURIComponent(phone)}%0Aसेवा: ${encodeURIComponent(service)}%0Aमाहिती: ${encodeURIComponent(message)}`;
      window.open(`https://wa.me/917775940775?text=${text}`, '_blank', 'noopener');
    });
  }

  // Services: ensure every service card has one working WhatsApp enquiry button.
  document.querySelectorAll('.service-grid article').forEach(card => {
    const existing = card.querySelector('.service-enquiry');
    if (existing) {
      const title = card.querySelector('h3')?.textContent.trim() || '';
      existing.href = `https://wa.me/917775940775?text=${encodeURIComponent(`नमस्कार AK इलेक्ट्रिशियन, मला "${title}" सेवेबद्दल माहिती/कोटेशन हवे आहे.`)}`;
      existing.target = '_blank';
      existing.rel = 'noopener';
      existing.style.cssText = 'display:inline-block;margin-top:18px;padding:9px 12px;border-radius:9px;background:#19a65b;color:#fff!important;font-size:11px;font-weight:900;position:relative;z-index:3;';
    }
  });

  const backTop = document.querySelector('.back-top');
  if (backTop) {
    window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500), { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }

  // Home page: Material List shortcut
  if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html') || location.pathname.endsWith('/Ak-Patil-Udyogsamuh')) {
    const materialButton = document.createElement('a');
    materialButton.href = 'material-form.html';
    materialButton.textContent = '🧾 मटेरियल लिस्ट';
    materialButton.setAttribute('aria-label', 'मटेरियल लिस्ट व मटेरियल फॉर्म उघडा');
    materialButton.style.cssText = 'position:fixed;right:16px;bottom:76px;z-index:9999;display:flex;align-items:center;justify-content:center;padding:12px 18px;background:#111;color:#fff;text-decoration:none;border-radius:12px;font-weight:800;box-shadow:0 8px 24px #0004;font-size:15px;';
    document.body.appendChild(materialButton);
  }
});

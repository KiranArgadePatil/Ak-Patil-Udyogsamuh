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

  const backTop = document.querySelector('.back-top');
  if (backTop) {
    window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500), { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});

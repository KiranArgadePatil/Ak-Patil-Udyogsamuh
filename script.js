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

  // Open Images gallery on the home page.
  const gallery = document.getElementById('imageGallery');
  const openGallery = document.querySelector('.open-gallery');
  const closeGallery = gallery?.querySelector('.gallery-close');
  const backdrop = gallery?.querySelector('.gallery-backdrop');
  const showGallery = (event) => {
    event?.preventDefault();
    if (!gallery) return;
    gallery.classList.add('show');
    gallery.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };
  const hideGallery = () => {
    if (!gallery) return;
    gallery.classList.remove('show');
    gallery.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };
  if (openGallery && gallery) openGallery.addEventListener('click', showGallery);
  if (closeGallery) closeGallery.addEventListener('click', hideGallery);
  if (backdrop) backdrop.addEventListener('click', hideGallery);
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') hideGallery();
  });

  if (gallery && !document.getElementById('galleryStyles')) {
    const style = document.createElement('style');
    style.id = 'galleryStyles';
    style.textContent = `.image-gallery{display:none;position:fixed;inset:0;z-index:10000}.image-gallery.show{display:block}.gallery-backdrop{position:absolute;inset:0;background:rgba(3,10,18,.88);backdrop-filter:blur(7px)}.gallery-box{position:relative;z-index:2;width:min(940px,calc(100% - 24px));max-height:92vh;overflow:auto;margin:4vh auto;background:#fff;border-radius:22px;padding:24px;box-shadow:0 30px 90px #0008}.gallery-close{position:absolute;right:15px;top:12px;width:40px;height:40px;border:0;border-radius:50%;background:#071525;color:#fff;font-size:28px;line-height:1;cursor:pointer}.gallery-head{padding-right:50px;margin-bottom:18px}.gallery-head label{font-size:10px;font-weight:900;letter-spacing:2px;color:#777}.gallery-head h2{margin:6px 0;font-size:27px}.gallery-head h2 span{color:#c99700}.gallery-head p{margin:0;color:#71808f;font-size:12px}.gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}.gallery-grid a{display:block;overflow:hidden;border-radius:15px;background:#eee}.gallery-grid img{display:block;width:100%;height:210px;object-fit:cover;transition:transform .25s}.gallery-grid a:hover img{transform:scale(1.04)}.instagram-logo{display:grid!important;place-items:center}.instagram-logo svg{width:26px;height:26px}@media(max-width:650px){.gallery-box{padding:18px;margin:2vh auto;max-height:96vh}.gallery-grid{grid-template-columns:1fr 1fr;gap:10px}.gallery-grid img{height:145px}.gallery-head h2{font-size:23px}}`;
    document.head.appendChild(style);
  }

  const backTop = document.querySelector('.back-top');
  if (backTop) {
    window.addEventListener('scroll', () => backTop.classList.toggle('show', window.scrollY > 500), { passive: true });
    backTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }
});

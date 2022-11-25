function backToTop() {
  const goTopBtn = document.getElementById('backToTop');
  const intro = document.getElementById('intro');

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight / 2;
    if (scrolled > coords) {
      goTopBtn.classList.add('btn-back-to-top--show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('btn-back-to-top--show');
    }
  }

  goTopBtn.addEventListener('click', () => {
    intro.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });

  window.addEventListener('scroll', trackScroll);
}
export { backToTop };

function backToTop() {
  const goTopBtn = document.getElementById('backToTop');
  const intro = document.getElementById('intro');

  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = document.documentElement.clientHeight / 2;
    const footer = document.querySelector('.footer');
    const totalHeight = document.body.scrollHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('btn-back-to-top--show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('btn-back-to-top--show');
    }
    if (scrolled > totalHeight - (window.innerHeight + footer.clientHeight)) {
      goTopBtn.classList.add('btn-back-to-top--green');
    } else {
      goTopBtn.classList.remove('btn-back-to-top--green');
    }

    if (scrolled + window.innerHeight > totalHeight - footer.clientHeight / 2) {
      goTopBtn.style.opacity = 0;
    } else {
      goTopBtn.style.opacity = 1;
    }
  }

  goTopBtn.addEventListener('click', () => {
    intro.scrollIntoView({ block: 'center', behavior: 'smooth' });
  });
  window.addEventListener('scroll', trackScroll);
}

export { backToTop };

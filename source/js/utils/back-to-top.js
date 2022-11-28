function backToTop() {
  const goTopBtn = document.getElementById('backToTop');
  const intro = document.getElementById('intro');

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight / 2;
    let footer = document.querySelector('.footer');
    let totalHeight = document.body.scrollHeight;
    let footerCoords = totalHeight - footer.clientHeight;
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

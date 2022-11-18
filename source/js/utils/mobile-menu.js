function mobileMenu() {
  const headerBurger = document.querySelector('.header__burger-button');
  const headerLink = document.querySelectorAll('.header__link');
  const body = document.querySelector('.no-js');
  const headerBody = document.querySelector('.header__body');

  if (body.classList.contains('no-js')) {
    body.classList.remove('no-js');
  }

  headerBurger.addEventListener('click', function () {
    headerBody.classList.toggle('header-menu--is-active');
    body.classList.toggle('scroll-lock');
    // buttonUp.toggleAttribute("hidden");
  });

  for (let i = 0; i < headerLink.length; i++) {
    headerLink[i].addEventListener('click', function () {
      headerBody.classList.remove('header-menu--is-active');
      body.classList.remove('scroll-lock');
      // buttonUp.removeAttribute("hidden");
    });
  }
}

export { mobileMenu };

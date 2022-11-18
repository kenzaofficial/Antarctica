window.onscroll = function () {
  headerScrolled();
};

function headerScrolled() {
  const header = document.querySelector('.header');

  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    header.classList.add('header--is-scrolled');
  } else {
    header.classList.remove('header--is-scrolled');
  }
}
export { headerScrolled };

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.header-mobile-menu'),
    closeMenuBtn: document.querySelector('.mobile-close-button'),
    menu: document.querySelector('.mobile-menu'),
    body: document.querySelector('body'),
    mobMenuList: document.querySelector('.header-mob-list'),
  };
  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.mobMenuList.addEventListener('click', toggleMenu);
  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();



//---Swiper-slider


var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
   effect: 'cube',
  cubeEffect: {
    slideShadows: false,
  },
});


document.addEventListener('DOMContentLoaded', function () {
  const openModalBtn = document.querySelectorAll('.about__btn'),
    modalOverlay = document.querySelectorAll('.about-modal'),
    closeModalBtn = document.querySelectorAll('.about-modal__close');
    

  //open modal
  openModalBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      let modalId = this.getAttribute('data-modal-id'),
        modalElem = document.querySelector(
          '.about-modal[id="' + modalId + '"]'
        );
      modalElem.classList.add('open');

    });
  });

  //close modal on click on close-modal btn
  closeModalBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      item.parentNode.closest('.about-modal').classList.remove('open');
    });
  });

});
document.addEventListener('DOMContentLoaded', function () {
  var openModalBtn = document.querySelectorAll('.products__button'),
    modalOverlay = document.querySelectorAll('.products__modal'),
    modalContent = document.querySelectorAll('.products__modal-content'),
    closeModalBtn = document.querySelectorAll('.products__modal-close');

  //open modal
  openModalBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      var modalId = this.getAttribute('data-modal-id'),
        modalElem = document.querySelector(
          '.products__modal[id="' + modalId + '"]'
        );
      modalElem.classList.add('open');
    });
  });

  //close modal on click on close-modal btn
  closeModalBtn.forEach(function (item) {
    item.addEventListener('click', function () {
      item.parentNode.closest('.products__modal').classList.remove('open');
    });
  });

  $(document).click(function (event) {
    //if you click on anything except the modal itself or the "open modal" link, close the modal
    if ($('.products__modal').hasClass('open')) {
      if ($(event.target).find('.products__modal-content').length !== 0) {
        $(event.target).closest('.products__modal').removeClass('open');
      }
    }
  });
});

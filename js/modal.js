const modal = document.querySelector('.backdrop');
const modalBtnOpen = document.querySelectorAll('.modal-btn-open');
const modalBtnClose = document.querySelectorAll('.modal-btn-close');

const toggleModal = () => modal.classList.toggle('is-hidden');

modalBtnOpen.forEach(function (e) {
  e.addEventListener('click', toggleModal);
});

modalBtnClose.forEach(function (e) {
  e.addEventListener('click', toggleModal);
});

/*modalBtnOpen.addEventListener('click', toggleModal);
modalBtnClose.addEventListener('click', toggleModal);*/

const openModalBtn = document.querySelector('.js-open-menu');
const closeModalBtn = document.querySelector('#close-modal');
const modal = document.querySelector('.js-modal');
const modalNavItem = document.querySelector('.modal-nav-item');

// Функція для відкриття модального вікна
function openModal() {
  modal.classList.remove('is-hidden');
  // Слухач подій для кнопки закриття
  closeModalBtn.addEventListener('click', closeModal);
  modalNavItem.addEventListener('click', closeModal);
}

// Функція для закриття модального вікна
function closeModal() {
  modal.classList.add('is-hidden');
  closeModalBtn.removeEventListener('click', closeModal);
  modalNavItem.removeEventListener('click', closeModal);
}

// Слухач подій для кнопки відкриття
openModalBtn.addEventListener('click', openModal);

const header = document.querySelector('header');
const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

header.style.paddingRight = `${scrollBarWidth}px`;

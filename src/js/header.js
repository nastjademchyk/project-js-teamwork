const openModalBtn = document.querySelector('.js-open-menu');
const closeModalBtn = document.querySelector('#close-modal');
const modal = document.querySelector('.js-modal');

// Функція для відкриття модального вікна
function openModal() {
  modal.classList.remove('is-hidden');
}

// Функція для закриття модального вікна
function closeModal() {
  modal.classList.add('is-hidden');
}

// Слухач подій для кнопки відкриття
openModalBtn.addEventListener('click', openModal);

// Слухач подій для кнопки закриття
closeModalBtn.addEventListener('click', closeModal);

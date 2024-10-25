const openModalBtn = document.querySelector('.js-open-menu');
const closeModalBtn = document.querySelector('#close-modal');
const modal = document.querySelector('.js-modal');
const modalNavItem = document.querySelector('.modal-nav-item');

// Функція для відкриття модального вікна
function openModal() {
  modal.classList.remove('is-hidden');
  modal.classList.add('is-visible'); // Додайте клас для анімації
  document.body.classList.add('no-scroll');
  // Слухач подій для кнопки закриття
  closeModalBtn.addEventListener('click', closeModal);
  modalNavItem.addEventListener('click', closeModal);
}

// Функція для закриття модального вікна
function closeModal() {
  modal.classList.remove('is-visible'); // Видалити клас для анімації
  setTimeout(() => {
    modal.classList.add('is-hidden'); // Додайте клас 'is-hidden' тільки після анімації
  }, 800); // Затримка рівна часу анімації
  document.body.classList.remove('no-scroll');
  closeModalBtn.removeEventListener('click', closeModal);
  modalNavItem.removeEventListener('click', closeModal);
}
// Слухач подій для кнопки відкриття
openModalBtn.addEventListener('click', openModal);

const header = document.querySelector('header');
const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;

const toggleSwitch = document.getElementById('toggle');

function changeTheme() {
  if (toggleSwitch.checked) {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
  } else {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
  }
}

function loadTheme() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
    toggleSwitch.checked = true;
    document.body.classList.add('dark-theme');
  } else {
    toggleSwitch.checked = false;
    document.body.classList.remove('dark-theme');
  }
}

loadTheme();

toggleSwitch.addEventListener('change', changeTheme);

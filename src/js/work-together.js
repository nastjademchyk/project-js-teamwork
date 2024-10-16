import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createModal } from './modal-window';

const refs = {
  form: document.querySelector('.work-together-right'),
  email: document.querySelector('.form-input-email'),
  comments: document.querySelector('.form-input-comments'),
  modalContainer: document.querySelector('.modal-container'),
};

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
const options = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    accept: 'application/json',
  },
};

const createContact = async post => {
  options.body = JSON.stringify(post);
  try {
    const response = await fetch(`${BASE_URL}`, options);
    if (!response.ok) throw new Error(response.status);
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};
const onSubmit = async e => {
  e.preventDefault();
  const { email, comments } = e.target.elements;
  const objData = {
    email: email.value,
    comment: comments.value,
  };
  // Валідація полів
  if (objData.email.trim() === '' || objData.comment.trim() === '') {
    iziToast.error({
      message: 'Please fill in all fields',
      position: 'center',
      messageColor: '#E74A3B',
      closeOnEscape: true,
      class: 'custom-error',
    });
    return;
  }

  // Відправка даних на сервер
  try {
    const { title, message } = await createContact(objData);
    e.target.reset(); // очищаємо форму
    const modalHTML = createModal({ title, message }); // Створюємо модальне вікно
    refs.modalContainer.insertAdjacentHTML('beforeend', modalHTML); // Показ модального вікна
    // Додаємо прослуховувачі подій для закриття модального вікна
    const closeModalButton = document.querySelector('.modal-close-btn');
    closeModalButton.addEventListener('click', closeModalWindow);
    // Закриття модального вікна по кліку на backdrop
    const backdrop = refs.modalContainer.querySelector('.backdrop');
    backdrop.addEventListener('click', closeModalWindow);
    // Закриття модального вікна по натисканню клавіші Escape
    document.addEventListener('keydown', onEscKeyPress);
  } catch (error) {
    iziToast.error({
      message: 'The server is not responding, try again later',
      position: 'center',
      messageColor: '#E74A3B',
      closeOnEscape: true,
      class: 'custom-error',
    });
  }
};
// Функція для закриття модального вікна
function closeModalWindow() {
  const modalWindow = document.querySelector('.backdrop');
  modalWindow?.remove(); // видаляємо модальне вікно з DOM
  document.removeEventListener('keydown', onEscKeyPress); // Видаляємо слухача на клавіатуру
}
// Функція для закриття вікна при натисканні клавіші Escape
function onEscKeyPress(event) {
  if (event.key === 'Escape') {
    closeModalWindow();
  }
}
refs.form.addEventListener('submit', onSubmit);

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

const onSbmit = e => {
  e.preventDefault();

  const { email, comments } = e.target.elements;

  const objData = {
    email: email.value,
    comment: comments.value,
  };

  // =================================================================
  // Перевіряюмо чи порожні поля вводу

  if (objData.email.trim() === '') {
    iziToast.error({
      message: 'Field email is empty',
      position: 'center',
      messageColor: '#E74A3B',
      closeOnEscape: true,
      icon: '',
    });
    return;
  }

  if (objData.comment.trim() === '') {
    iziToast.error({
      message: 'Field comments is empty',
      position: 'center',
      messageColor: '#E74A3B',
      closeOnEscape: true,
      icon: '',
    });
    return;
  }

  // =================================================================

  createContact(objData)
    .then(({ title, message }) => {
      e.target.reset();
      refs.modalContainer.insertAdjacentHTML(
        'beforeend',
        createModal({ title, message })
      );
      //   Додаємо прослуховувача подій на кнопку
      const closeModalButton = document.querySelector('.modal-close-btn');
      closeModalButton.addEventListener('click', closeModalWindow);
      //   Додаємо прослуховувача подій на Esc
      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
          closeModalWindow();
        }
        location.reload();
      });
      //   Додаємо прослуховувача подій на backdrop
      document.addEventListener('click', function (event) {
        const modalWindow = document.querySelector('.backdrop');
        if (event.target === modalWindow) {
          closeModalWindow();
        }
        location.reload();
      });
    })
    .catch(error => {
      console.log(error);
      iziToast.error({
        message: 'The server is not responding, try again later',
        position: 'center',
        messageColor: '#E74A3B',
        closeOnEscape: true,
        icon: '',
      });
    });
};
refs.form.addEventListener('submit', onSbmit);

// ================================================================

function closeModalWindow() {
  const modalWindow = document.querySelector('.backdrop');
  modalWindow.style.display = 'none';
  location.reload();
}

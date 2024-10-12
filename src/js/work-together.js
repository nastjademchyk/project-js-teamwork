import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.work-together-right'),
  email: document.querySelector('.form-input-email'),
  comments: document.querySelector('.form-input-comments'),
};

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const ENDPOINT = 'requests';

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  const { email, comments } = event.target.elements;

  const objData = {
    email: email.value,
    comments: comments.value,
  };

  //   =================================================================
  //   перевіряємо чи порожні поля вводу на формі
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

  if (objData.comments.trim() === '') {
    iziToast.error({
      message: 'Field comments is empty',
      position: 'center',
      messageColor: '#E74A3B',
      closeOnEscape: true,
      icon: '',
    });
    return;
  }

  //   =================================================================
  // відправляємо форму на сервер
  try {
    const response = await fetch(`${BASE_URL}/${ENDPOINT}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(objData),
    });

    console.log(response);

    if (response.ok) {
      console.log('ok');
    }

    if (!response.ok) {
      iziToast.error({
        title: 'Sorry!',
        message: 'An error occurred, please try againe',
        position: 'center',
        messageColor: '#E74A3B',
        closeOnEscape: true,
        icon: '',
      });
    }
  } catch (error) {
    console.log(error);
  }
}

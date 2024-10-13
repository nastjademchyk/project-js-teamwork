import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.work-together-right'),
  email: document.querySelector('.form-input-email'),
  comments: document.querySelector('.form-input-comments'),
};

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
// const ENDPOINT = 'requests';

refs.form.addEventListener('submit', onFormSubmit);

async function onFormSubmit(event) {
  event.preventDefault();

  const { email, comments } = event.target.elements;

  const objData = {
    email: email.value,
    comments: comments.value,
  };

  console.log(objData);

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

  //    ===================================================================

  //   =================================================================
  // відправляємо форму на сервер
  //   try {
  //     const response = await fetch(`${BASE_URL}`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(objData),
  //     });

  //     console.log(objData);
  //     console.log(response);

  //     if (response.ok) {
  //       console.log('ok');
  //     }

  //     if (!response.ok) {
  //       iziToast.error({
  //         title: 'Sorry!',
  //         message: 'An error occurred, please try againe',
  //         position: 'center',
  //         messageColor: '#E74A3B',
  //         closeOnEscape: true,
  //         icon: '',
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }

  //   ====================================================================

  //   const options = {
  //     method: 'POST',
  //     body: JSON.stringify(objData),
  //     headers: {
  //       'Content-Type': 'application/json; charset=UTF-8',
  //     },
  //   };

  //   fetch('https://portfolio-js.b.goit.study/api/requests', options)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(response.status);
  //       }
  //       return response.json();
  //     })
  //     .then(post => console.log(post))
  //     .catch(error => console.log(error));
}

// ========================================================================
// function addForm(objData) {
//   return fetch(`${BASE_URL}`, {
//     method: 'POST',
//     body: JSON.stringify(objData),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(checkResponse);
// }

// addForm();

//  ====================================================================

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
    const response = await fetch(
      'https:portfolio-js.b.goit.study/api/requests',
      options
    );
    if (!response.ok) throw new Error(response.status);
    return response.json();
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const onSbmit = e => {
  e.preventDefault();

  //   const {
  //     email: { value: email },
  //     comment: { value: comment },
  //   } = e.target.elements;

  const { email, comments } = e.target.elements;

  const objData = {
    email: email.value,
    comments: comments.value,
  };

  createContact(objData)
    .then(({ title, message }) => {
      e.target.reset();
    })
    .catch(error => {
      errorMessege(
        ` Please verify the information you provided and try again `
      );
    });
};
refs.form.addEventListener('submit', onSbmit);

// ===============================================================

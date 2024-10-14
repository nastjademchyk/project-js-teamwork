import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const refs = {
  form: document.querySelector('.work-together-right'),
  email: document.querySelector('.form-input-email'),
  comments: document.querySelector('.form-input-comments'),
};

const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';
// const ENDPOINT = 'requests';

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

  createContact(objData)
    .then(({ title, message }) => {
      e.target.reset();
      console.log(title);
      console.log(message);
    })
    .catch(error => {
      errorMessege(
        ` Please verify the information you provided and try again `
      );
    });
};
refs.form.addEventListener('submit', onSbmit);

// ===============================================================

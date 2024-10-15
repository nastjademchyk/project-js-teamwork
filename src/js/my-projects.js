import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const list = document.querySelector('.projects-list');
const projects = document.querySelectorAll('.project-item');
const loadMoreBtn = document.querySelector('.btn-load');
let currentIndex = 0;
const showItems = () => {
  for (let i = currentIndex; i < currentIndex + 3; i++) {
    if (projects[i]) {
      projects[i].classList.remove('is-hidden');
      loadMoreBtn.classList.remove('is-hidden');
    }
  }

  currentIndex += 3;

  if (currentIndex >= projects.length) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.info({
      message: 'Sorry, this is the last project',
      position: 'topRight',
    });
  }
};
loadMoreBtn.addEventListener('click', showItems);
showItems();

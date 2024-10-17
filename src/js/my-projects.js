import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const projects = document.querySelectorAll('.project-item');
const loadMoreBtn = document.querySelector('.btn-load');
let currentIndex = 0;

const showItems = (scroll = false) => {
  for (let i = currentIndex; i < currentIndex + 3; i++) {
    if (projects[i]) {
      projects[i].classList.remove('is-hidden');
      loadMoreBtn.classList.remove('is-hidden');
    }
  }

  if (scroll) {
    const itemHeight = projects[0].getBoundingClientRect().height;
    window.scrollBy({
      top: itemHeight * 0.5,
      left: 0,
      behavior: 'smooth',
    });
  }

  currentIndex += 3;

  if (currentIndex >= projects.length) {
    loadMoreBtn.classList.add('is-hidden');
    iziToast.info({
      message: 'Sorry, this is the last project',
      position: 'center',
      class: 'custom-error',
    });
  }
};

showItems(false);
loadMoreBtn.addEventListener('click', () => showItems(true));

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
const projects = document.querySelectorAll('.project-item');
const loadMoreBtn = document.querySelector('.btn-load');
let currentIndex = 0;

const showItems = () => {
  projects.forEach((item, index) => {
    if (index >= currentIndex && index < currentIndex + 3) {
      item.classList.remove('is-hidden');
      loadMoreBtn.classList.remove('is-hidden');
    }
  });

  if (scrollHeight > 0) {
    window.scrollBy({
      top: scrollHeight,
      left: 0,
      behavior: 'smooth',
    });
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

showItems();
loadMoreBtn.addEventListener('click', showItems);

// function loadMoreScroll() {
//   const lastHit = gallery.lastElementChild;
//   const hitHeight = lastHit.getBoundingClientRect().height;
//   const scrollHeight = hitHeight * 3;

//   window.scrollBy({
//     top: scrollHeight,
//     left: 0,
//     behavior: 'smooth',
//   });
// }

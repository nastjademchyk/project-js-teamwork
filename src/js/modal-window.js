const modalWindow = document.querySelector('.backdrop');
const closeModalButton = document.querySelector('.modal-close-btn');

function closeModalWindow() {
  modalWindow.style.display = 'none';
}

closeModalButton.addEventListener('click', closeModalWindow);

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModalWindow();
  }
});

modalWindow.addEventListener('click', function (event) {
  if (event.target === modalWindow) {
    closeModalWindow();
  }
});

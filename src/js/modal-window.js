// Функція розмітки модального вікна

export function createModal({ title, message }) {
  return `
  <div class="backdrop">
    <div class="modal">
        <button class="modal-close-btn" type="button ">
        <svg class="modal-close-icon" width="24" height="24">
            <use href="./img/icons-svg.svg#icon-icon-close-menu"></use>
        </svg>
        </button>
        <div class="modal-wrapper">
            <h3 class="modal-h3">${title}</h3>
            <p class="modal-text">${message}</p>
        </div>
    </div>
  </div>
  `;
}

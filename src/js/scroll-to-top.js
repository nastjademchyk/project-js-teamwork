let button = document.querySelector('.scroll-to-top');

button.style.display = 'none';

window.addEventListener('scroll', function () {
  let scrollHeight =
    document.documentElement.scrollTop || document.body.scrollTop;
  let windowHeight = window.innerHeight;
  // Показуємо кнопку, коли користувач прокручує сторінку нижче середини
  if (scrollHeight > windowHeight / 2) {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
});

button.addEventListener('click', function (event) {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  let currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (currentScroll > 0) {
    window.addEventListener('wheel', disableMouseWheelScrolling, {
      passive: false,
    });
    window.requestAnimationFrame(scrollStep);
  }
});

function scrollStep() {
  let currentScroll =
    document.documentElement.scrollTop || document.body.scrollTop;
  let newScroll = currentScroll - currentScroll / 1;

  window.scrollTo(0, newScroll);

  if (newScroll > 0) {
    window.requestAnimationFrame(scrollStep);
  } else {
    window.removeEventListener('wheel', disableMouseWheelScrolling, {
      passive: false,
    });
  }
}

function disableMouseWheelScrolling(event) {
  event.preventDefault();
}

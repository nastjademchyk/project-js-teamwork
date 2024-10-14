import anime from 'animejs/lib/anime.es.js';

document.addEventListener("DOMContentLoaded", () => {
  const aboutImage = document.querySelector('.about-image');

  aboutImage.addEventListener('mouseover', () => {
    anime({
      targets: '.about-image',
      rotate: '1turn', 
      scale: [1, 1.1], 
      duration: 1000, 
      easing: 'easeInOutQuad'
    });
    
  });

  aboutImage.addEventListener('mouseout', () => {
    anime({
      targets: '.about-image',
      rotate: '0turn', 
      scale: [1.1, 1], 
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  });

  
  aboutImage.addEventListener('focus', () => {
    anime({
      targets: '.about-image',
      rotate: '1turn',
      scale: [1, 1.1],
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  });

  aboutImage.addEventListener('blur', () => {
    anime({
      targets: '.about-image',
      rotate: '0turn',
      scale: [1.1, 1],
      duration: 1000,
      easing: 'easeInOutQuad'
    });
  });
});
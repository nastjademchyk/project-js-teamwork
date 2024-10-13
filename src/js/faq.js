import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
  elementClass: 'ac-item',
  triggerClass: 'ac-header',
  panelClass: 'ac-panel',
  duration: 3000,
  openOnInit: [0],
  beforeOpen: el =>
    el.querySelector('button.ac-trigger').setAttribute('aria-expanded', true),
  beforeClose: el =>
    el.querySelector('button.ac-trigger').setAttribute('aria-expanded', false),
});

import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.accordion-container', {
elementClass: 'ac-item',
triggerClass: 'ac-trigger',
panelClass: 'ac-panel',
duration: 600,
openOnInit: [0],
beforeOpen: el =>
    el.querySelector('button.ac-trigger').setAttribute('aria-expanded', true),
  beforeClose: el =>
    el.querySelector('button.ac-trigger').setAttribute('aria-expanded', false),
});

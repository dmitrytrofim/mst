import FixedHeader from './modules/fixedHeader.js';
import ScrollAnime from './modules/scrollAnime.js';

class App {
 constructor() {
  this.page = document.querySelector('[data-page]');
  this.header = document.querySelector('.header');
  this.animeElems = document.querySelectorAll('[data-anime]');
 }

 scrollPage() {
  const fixedHeader = new FixedHeader(this.header);
  window.addEventListener('scroll', (event) => {
   fixedHeader.start(event);
  });
 }

 start() {
  this.scrollPage();
  new ScrollAnime(this.animeElems).start();
 }
}
const app = new App().start();

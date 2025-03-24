// https://splidejs.com/guides/getting-started/
// import { Splide } from '@splidejs/splide';

class Sliders {
 constructor() {
  this.slider = null;
 }
 mountSlider() {
  new Splide(this.slider).mount();
 }
 init() {
  if (this.slider) this.mountSlider();
 }
}

export default Sliders;

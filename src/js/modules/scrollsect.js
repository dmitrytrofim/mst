// https://www.npmjs.com/package/zenscroll
// import zenScroll from 'zenscroll';

class ScrollSect {
 constructor(offset = 0, menu = false) {
  this.navLinks = document.querySelectorAll('a[href^="#"]');
  this.menu = menu;
  this.offset = offset;
 }
 initScrollSect() {
  this.navLinks.forEach((btn) => {
   btn.addEventListener('click', (e) => {
    const section = document.getElementById(btn.getAttribute('href').slice(1));
    if (section) {
     e.preventDefault();
     e.stopPropagation();
     if (this.menu && this.menu.classList.contains('j-show')) {
      this.menu.click();
     }
     const sectionTop =
      section.getBoundingClientRect().top + window.scrollY - this.offset;
     zenScroll.toY(sectionTop);
    }
   });
  });
 }
 init() {
  if (this.navLinks[0]) this.initScrollSect();
 }
}

export default ScrollSect;

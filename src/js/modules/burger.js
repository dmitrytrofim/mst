class Burger {
 constructor(page, btns, menu, scroll = true) {
  this.page = page;
  this.btns = btns;
  this.menu = menu;
  this.scroll = scroll;
 }

 initBurger() {
  this.btns.forEach((btn) => {
   btn.addEventListener('click', () => {
    if (this.scroll) window.scrollTo(0, 0);
    this.btns.forEach((bt) => bt.classList.toggle('j-active'));
    this.page.classList.toggle('j-lock');
    this.menu.classList.toggle('j-show');
   });
  });
 }

 init() {
  if (this.btns[0]) this.initBurger();
 }
}

export default Burger;

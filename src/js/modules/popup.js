class Popup {
 constructor(page, btns, main, btnClose) {
  this.page = page;
  this.btns = btns;
  this.main = main;
  this.btnClose = btnClose;
 }

 togglePopup() {
  this.btns.forEach((btn) => {
   btn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    this.page.classList.add('j-lock');
    this.main.classList.add('j-show');
   });
  });

  this.main.addEventListener('click', (e) => {
   if (e.target === this.main || e.target === this.btnClose) {
    this.page.classList.remove('j-lock');
    this.main.classList.remove('j-show');
   }
  });
 }

 init() {
  if (this.btns[0] || this.main) this.togglePopup();
 }
}

export default Popup;

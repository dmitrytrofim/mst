class Tabs {
 constructor(btns, panels, idxOpen) {
  this.btns = btns;
  this.panels = panels;
  this.idxOpen = idxOpen;
 }
 toggleTabs() {
  if (this.idxOpen) {
   this.btns[this.idxOpen - 1].classList.add('j-active');
   this.panels[this.idxOpen - 1].classList.add('j-show');
  }

  for (let i = 0; i < this.btns.length; i++) {
   this.btns[i].addEventListener('click', () => {
    this.btns.forEach((btn, idx) => {
     if (i === idx) {
      btn.classList.add('j-active');
      this.panels[idx].classList.add('j-show');
     } else {
      btn.classList.remove('j-active');
      this.panels[idx].classList.remove('j-show');
     }
    });
   });
  }
 }
 init() {
  if (this.btns[0]) this.toggleTabs();
 }
}

export default Tabs;

class Accordion {
 constructor(accordion, idxOpen = false, openOne = false) {
  this.accordion = accordion;
  this.idxOpen = idxOpen;
  this.openOne = openOne;
 }
 toggleAccordion() {
  const btns = this.accordion.querySelectorAll('[data-accordion-btn]');
  const dropdowns = this.accordion.querySelectorAll(
   '[data-accordion-dropdown]'
  );

  if (this.idxOpen) {
   btns[this.idxOpen - 1].classList.add('j-active');
   dropdowns[this.idxOpen - 1].style.height =
    dropdowns[this.idxOpen - 1].scrollHeight + 'px';
  }

  for (let i = 0; i < btns.length; i++) {
   btns[i].addEventListener('click', () => {
    if (this.openOne) {
     btns.forEach((btn) => btn.classList.remove('j-active'));
     dropdowns.forEach((dropdown) => (dropdown.style.height = 0));
    }

    if (!dropdowns[i].getBoundingClientRect().height) {
     btns[i].classList.add('j-active');
     dropdowns[i].style.height = dropdowns[i].scrollHeight + 'px';
    } else {
     btns[i].classList.remove('j-active');
     dropdowns[i].style.height = 0;
    }
   });
  }
 }
 init() {
  if (this.accordion) this.toggleAccordion();
 }
}

export default Accordion;

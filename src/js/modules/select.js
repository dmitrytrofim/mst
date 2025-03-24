class Select {
 constructor(selects) {
  this.selects = selects;
 }
 handleSelect() {
  let openCloseFunc = (btn, dropdown) => {
   if (!dropdown.getBoundingClientRect().height) {
    btn.classList.add('j-show');
    dropdown.style.height = dropdown.scrollHeight + 'px';
    btn.parentElement.classList.add('j-current');
   } else {
    btn.classList.remove('j-show');
    dropdown.style.height = null;
    btn.parentElement.classList.remove('j-current');
   }
  };

  let choiceFunc = (btn, item, inp) => {
   btn.classList.add('j-choice');
   btn.textContent = item.dataset.value;
   inp.value = item.dataset.value;
   btn.click();
  };

  this.selects.forEach((el) => {
   const btn = el.querySelector('.select__btn');
   const dropdown = el.querySelector('.select__dropdown');
   const items = el.querySelectorAll('.select__item');
   const inp = el.querySelector('.select__inp');

   btn.addEventListener('click', openCloseFunc.bind(null, btn, dropdown));

   items.forEach((item) => {
    item.addEventListener('click', choiceFunc.bind(null, btn, item, inp));
   });
  });
 }
 init() {
  if (this.selects[0]) this.handleSelect();
 }
}

export default Select;

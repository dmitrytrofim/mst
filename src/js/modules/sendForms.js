class SendForms {
 constructor(fomrs, popup) {
  this.forms = fomrs;
  this.popup = popup;
 }

 sendForms() {
  this.forms.forEach((form) => {
   const checkSpam = form.querySelector('.cs-agree');
   if (checkSpam) checkSpam.checked = false;
   const submit = form.querySelector('button[type="submit"]');
   submit.addEventListener('click', async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const response = await fetch('/files/send.php', {
     method: 'POST',
     body: formData,
    });
    if (response.ok) {
     alert('Ваша заявка успешно отправлена!');
     form.reset();
     if (this.popup && this.popup.classList.contains('j-show')) {
      this.popup.click();
     }
    } else {
     alert('Ошибка отправки. Попробуйте позже...');
    }
   });
  });
 }

 init() {
  if (this.forms[0]) this.sendForms();
 }
}

export default SendForms;

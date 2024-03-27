const scriptURL = 'https://script.google.com/macros/s/AKfycbwuaEIenjQvhCdAOuIEHR_lsGsSyeb0iX3mmPv1Sfm8CT9eWbqEOXBtepJ2-9FLmS9k3g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbzJAXiryyWinhn3AKOCMPFS72EY3xNn5gHsaSnOB2h8omXck5MQdn1SHQQt4wFpq05xHQ/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

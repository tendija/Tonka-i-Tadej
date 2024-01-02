const scriptURL = 'https://script.google.com/macros/s/AKfycbwBBstP_8uhY2isO2lev1iHtN7SgD5gdzI2p0gBbsfXKp6ss2Dg5Szm4kCDby2wpvC0eA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbyPe0AFu4KUp14eA8iG1TC3YUNwfLVLLlzdD0eR7Z3EmulLk8vk5gIMbtvIUOFC-hq-iA/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

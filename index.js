const scriptURL = 'https://script.google.com/macros/s/AKfycbwuaEIenjQvhCdAOuIEHR_lsGsSyeb0iX3mmPv1Sfm8CT9eWbqEOXBtepJ2-9FLmS9k3g/exec'

const form = document.forms['contact-form'];
var button = document.getElementById('submit');
form.addEventListener('submit', e => {
  document.querySelector('#submit').value = 'Poslano, hvala!';
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Odgovorili ste na pozivnicu. Hvala!" ))
  .catch(error => console.error('Error!', error.message))
  button.disabled = true;
})

$(function() {
  $('a[href*="#"]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 300, 'linear');
  });
});



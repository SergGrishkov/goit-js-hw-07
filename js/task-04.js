const form = document.querySelector('form.login-form');
const email = form.querySelector('input[type=email]');
const password = form.querySelector('input[type=password]');

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!event.target[0].value || !event.target[1].value) {
    alert('All form fields must be filled in');
  } else {
    let emName = event.target.firstElementChild.textContent.trim();
    let emValue = event.target[0].value.trim();
    let pwdName = event.target.lastElementChild.textContent.trim();
    let pwdValue = event.target[1].value.trim();
    const result = {
      [emName]: emValue,
      [pwdName]: pwdValue,
    };
    console.log(result);
    form.reset();
  }
});

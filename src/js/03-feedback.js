import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const emailEl = formEl.querySelector("input[name = 'email']");
const messageEl = formEl.querySelector("textarea[name = 'message']");

const feedback = {
  email: '',
  message: '',
};

formEl.addEventListener('input', throttle(onFormInputHandler, 500));

function onFormInputHandler(event) {
  if (event.target.name === 'email') {
    feedback.email = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
  }
  if (event.target.name === 'message') {
    feedback.message = event.target.value.trim();
    localStorage.setItem('feedback-form-state', JSON.stringify(feedback));
  }
}

function setFormValues() {
  if (!localStorage.getItem('feedback-form-state')) {
    return;
  }
  emailEl.value = JSON.parse(localStorage.getItem('feedback-form-state')).email;
  messageEl.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message;
}

setFormValues();

formEl.addEventListener('submit', e => {
  e.preventDefault;
  localStorage.clear();
  emailEl.value = '';
  messageEl.value = '';
});

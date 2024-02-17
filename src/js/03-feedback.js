import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;

  const user = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };

  if (user.email === '' || user.message === '') {
    window.alert('All fields must be filled!');
  }

  console.log(user);

  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
};

const userData = {
  ...{email: '', message: ''},
  ...JSON.parse(localStorage.getItem('feedback-form-state')),
};

feedbackForm.elements.email.value = userData.email;
feedbackForm.elements.message.value = userData.message;

const handleInput = (event) => {
  const form = event.target;

  userData.email = feedbackForm.elements.email.value;
  userData.message = feedbackForm.elements.message.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

feedbackForm.addEventListener('submit', throttle(handleSubmit, 500));
feedbackForm.addEventListener('input', handleInput);

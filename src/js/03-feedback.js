import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector(".feedback-form");

const handleSubmit = (event) => {
  event.preventDefault();

  const form = event.target;
  const email = form.elements.email.value;
  const message = form.elements.message.value;

  console.log(`Email: ${email}, Message: ${message}`);

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
  userData.message = feedbackForm.elements.email.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
};

feedbackForm.addEventListener('submit', throttle(handleSubmit, 500));
feedbackForm.addEventListener('input', handleInput);

const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const subjectInput = document.getElementById('subject');
const messageInput = document.getElementById('message');
const errorMessages = document.querySelectorAll('.error-message');
const successMessage = document.querySelector('.form-success-message');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  let isValid = true;
  errorMessages.forEach(message => message.textContent = '');
  successMessage.textContent = '';

  // Validate name
  if (nameInput.value.trim() === '') {
    errorMessages[0].textContent = 'Please enter your name.';
    isValid = false;
  }

  // Validate email
  const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailRegex.test(emailInput.value)) {
    errorMessages[1].textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  // Validate subject (optional)
  // You can uncomment this section if you want to enforce a required subject
  /*
  if (subjectInput.value.trim() === '') {
    errorMessages[2].textContent = 'Please enter a subject.';
    isValid = false;
  }
  */

  // Validate message
  if (messageInput.value.trim() === '') {
    errorMessages[2].textContent = 'Please enter your message.';
    isValid = false;
  }

  // Submit the form if validation is successful
  if (isValid) {
    // Simulate form submission (replace with actual form submission logic)
    successMessage.textContent = 'Your message has been sent successfully!';
    contactForm.reset(); // Reset form fields after successful submission
  }
});

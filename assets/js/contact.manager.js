const contactForm = document.querySelector('#contact-form');

const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');

const submitBtn = document.querySelector('#submitBtn');

const errorAlert = document.querySelector('.error-message');
const successAlert = document.querySelector('.sent-message');

const contactFormHandler = async (event) => {
  event.preventDefault();

  submitBtn.innerHTML =
    '<button type="submit" style="background-color: #c1d4c6;" disabled><span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...</button>';

  try {
    const data = {
      sendTo: 'chiemelajames@gmail.com',
      fname: fullName.value,
      email: email.value,
      subject: subject.value,
      message: message.value,
    };
    const response = await axios.post(
      'https://contact.justcorrupt.tech/contact-us',
      data
    );
    if (response.data.status !== 'success') {
      errorAlert.style.display = 'block';
      errorAlert.textContent = response.data.message;
      submitBtn.innerHTML = `<button type="submit">Send Message</button>`;
      return;
    } else {
      successAlert.style.display = 'block';
      successAlert.textContent = response.data.message;
    }
  } catch (error) {
    if (error.message) {
      console.log('Something went wrong!');
      console.log(error);
      return;
    }
  }

  const timer = setTimeout(() => {
    fullName.value = '';
    email.value = '';
    subject.value = '';
    message.value = '';
    errorAlert.style.display = 'none';
    successAlert.style.display = 'none';
    submitBtn.innerHTML = `<button type="submit">Send Message</button>`;
  }, 1500);

  return () => {
    clearTimeout(timer);
  };
};

contactForm.addEventListener('submit', contactFormHandler);

document.getElementById('year').innerHTML = new Date().getFullYear();

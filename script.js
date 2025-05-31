document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('form-message');

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill out all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thank you for contacting us!";
  formMessage.style.color = "green";

  // Optionally clear the form
  document.getElementById('contact-form').reset();
});

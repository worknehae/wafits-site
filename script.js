// Mobile navigation toggle
document.getElementById('navToggle').addEventListener('click', () => {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Thanks for contacting us! We'll be in touch.";
  formMessage.style.color = "green";
  this.reset();
});

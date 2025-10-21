document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("form-message");

  // Simple validation
  if (!name || !email || !subject || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.style.color = "red";
    return;
  }

  // Simulate submission
  formMessage.textContent = "Thanks! Your message has been sent.";
  formMessage.style.color = "#00ffab";
  this.reset(); // reset form
});
 
const app = document.getElementById('typing-text');

const typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .typeString("Engineering Student 🚀")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Data Engineer 💾")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Blockchain Dev 🔗")
  .pauseFor(1000)
  .deleteAll()
  .typeString("Tester & QA Specialist 🧪")
  .pauseFor(1000)
  .deleteAll()
  .start();

  document.addEventListener("DOMContentLoaded", () => {
  const text = "A Full-Stack Developer, Blockchain Enthusiast & Tech Explorer";
  const typingElement = document.getElementById("typing-text");
  let index = 0;

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }

  type();
});

const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
});
// Toggle the theme icon
themeToggle.addEventListener('click', () => {
  if (document.documentElement.classList.contains('dark')) {
    themeToggle.textContent = '🌙'; // Moon icon for dark mode
  } else {
    themeToggle.textContent = '☀️'; // Sun icon for light mode
  }
});
// Initial icon setup
if (document.documentElement.classList.contains('dark')) {  
  themeToggle.textContent = '🌙'; // Moon icon for dark mode
}   else {
  themeToggle.textContent = '☀️'; // Sun icon for light mode
}   
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
module.exports = {
  darkMode: 'class',
  // other config...
}

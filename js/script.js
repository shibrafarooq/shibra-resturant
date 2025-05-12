// js/script.js

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    nav.classList.toggle("show");
  }
  




  // Toggle menu for mobile view
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// Smooth scroll for anchor links (optional feature)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  });
});

    //  slider

  const slider = document.getElementById('slider');

  slider.addEventListener('mouseenter', () => {
    slider.style.animationPlayState = 'paused';
  });

  slider.addEventListener('mouseleave', () => {
    slider.style.animationPlayState = 'running';
  });






// Contact form submission (optional functionality)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
    // Assuming you add some form validation here
    const name = document.querySelector('input[type="text"]').value;
    const email = document.querySelector('input[type="email"]').value;
    const message = document.querySelector('textarea').value;

    // Simple form validation
    if (!name || !email || !message) {
      alert('Please fill in all fields');
      return;
    }

    // Simulating form submission (e.g., using AJAX, API call, etc.)
    alert(`Thank you, ${name}! Your message has been received.`);
    contactForm.reset(); // Reset form fields after submission
  });
}

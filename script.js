document.addEventListener('DOMContentLoaded', function () {
  // Mobile hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('nav-open');
    });

    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('nav-open');
      }
    });

    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('nav-open');
      });
    });
  }

  // Contact form handler
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert('Thank you! We will reply within 24h.');
    });
  }

  // Blog "Read more" alert
  const readMoreLinks = document.querySelectorAll('.read-more');
  readMoreLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      alert('Full blog coming soon');
    });
  });

  // Newsletter subscribe handler
  const newsletterForm = document.getElementById('newsletterForm');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = this.querySelector('input[type="email"]');
      if (input && input.value.trim()) {
        alert('Thank you for subscribing!');
        input.value = '';
      }
    });
  }
});

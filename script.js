// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealEls.forEach(el => observer.observe(el));

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

if (navToggle && nav) {
  navToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
    });
  });
}

// Contact form (front-end only)
const form = document.querySelector('.contact-form');
const statusEl = document.getElementById('form-status');

if (form && statusEl) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    statusEl.textContent =
      'Enquiry captured on this page – a backend can be connected to send it to your email.';
  });
}



const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

// Toggle menu on hamburger click
hamburger.addEventListener('click', () => {
  menu.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.menu').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('active');
        hamburger.classList.remove('open');
    });
});

// Close menu when click outside
document.addEventListener('click', (event) => {
    const isClickInsideToggle = hamburger.contains(event.target);
    const isClickInsideMenu = menu.contains(event.target);
  
    if (!isClickInsideToggle && !isClickInsideMenu) {
      menu.classList.remove('active');
      hamburger.classList.remove('open');
    }
});


// Glass effect on scroll
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('glass');
  } else {
    navbar.classList.remove('glass');
  }
});


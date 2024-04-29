// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  // script.js

document.addEventListener("DOMContentLoaded", function() {
    const backgroundImage = document.querySelector('.background-image');
    let counter = 0;
  
    setInterval(() => {
      counter++;
      backgroundImage.style.animationPlayState = 'paused';
      setTimeout(() => {
        backgroundImage.style.animationPlayState = 'running';
        backgroundImage.style.animationIterationCount = 'infinite';
        backgroundImage.style.animationDuration = '8s';
        backgroundImage.style.animationName = 'slideshow';
      }, 10);
    }, 1000);
  });
  
  
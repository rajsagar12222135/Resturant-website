// script.js

// Add event listener to navigation links to toggle active class
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Remove active class from all links
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        
        // Add active class to the clicked link
        link.classList.add('active');
    });
});

// Example: Add a hover effect to the about-container
const aboutContainer = document.querySelector('.about-container');

aboutContainer.addEventListener('mouseenter', () => {
    aboutContainer.style.backgroundColor = '#f4f4f4';
});

aboutContainer.addEventListener('mouseleave', () => {
    aboutContainer.style.backgroundColor = '#fff';
});

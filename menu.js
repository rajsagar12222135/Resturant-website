// script.js

// Add click event listener to each menu item
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle visibility of the price when clicked
        const price = item.querySelector('.price');
        price.style.display = (price.style.display === 'block') ? 'none' : 'block';
    });
});

// script.js

// Add click event listener to all "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Get the parent item-box element
        const itemBox = button.closest('.item-box');
        
        // Get the name of the item
        const itemName = itemBox.querySelector('h3').innerText;
        
        // Show a confirmation message
        alert(`${itemName} added to cart successfully!`);
    });
});

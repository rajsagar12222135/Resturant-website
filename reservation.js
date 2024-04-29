// script.js

// Function to generate a random table number between 1 and 99
function generateRandomTableNumber() {
    return Math.floor(Math.random() * 99) + 1;
}

// Form submission
const reservationForm = document.getElementById('reservation-form');

reservationForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form data
    const formData = new FormData(reservationForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const date = formData.get('date');
    const time = formData.get('time');

    // Generate random table number
    const tableNumber = generateRandomTableNumber();

    // Display success message with table number
    alert(`Your table booked successfully! Your table number is ${tableNumber}.`);

    // Reset form
    reservationForm.reset();
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Example of sending data to a server (in this case, just displaying it)
    var responseElement = document.getElementById("response");
    responseElement.innerHTML = `<p>Sending message...</p>`;
    setTimeout(function() {
        responseElement.innerHTML = `<p>Message sent! Thank you for contacting us.</p>`;
    }, 2000);
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the input values
        const username = document.querySelector('input[type="text"]').value;
        const password = document.querySelector('input[type="password"]').value;

        // Here, you can perform validation or send an API request to authenticate the user
        // For demonstration purposes, let's check if the username and password are not empty
        if (username.trim() === '' || password.trim() === '') {
            alert('Please enter both username and password.');
        } else if (username.trim() === 'user' || password.trim() === 'user') {
            console.log('Username:', username);
            console.log('Password:', password);

            // For this example, let's assume a successful login and redirect to a new page
            // Replace 'newpage.html' with the URL you want to redirect to after successful login
            window.location.href = 'home.html';
        }
            // You can replace this with your actual login logic (e.g., sending data to a server)
           
    });
});

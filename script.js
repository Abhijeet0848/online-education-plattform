document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get the values of the input fields
        const username = document.getElementById("username").value.trim(); // Trim whitespace
        const password = document.getElementById("password").value.trim(); // Trim whitespace

        // Basic validation
        if (username === "" || password === "") {
            alert("Please fill in both fields.");
            return;
        }

        // Here you can add your login logic (e.g., API call)
        // For demonstration, we'll just log the values to the console
        console.log("Username:", username);
        console.log("Password:", password);

        // Simulate a successful login
        alert("Login successful!");

        // Optionally, you can redirect the user to another page
        // window.location.href = "dashboard.html"; // Redirect to a dashboard page
    });
});
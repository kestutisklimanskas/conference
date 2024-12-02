document.addEventListener("DOMContentLoaded", function() {
    // Get the login form element
    const loginForm = document.getElementById("login-form");

    // Add an event listener for the form submission
    loginForm.addEventListener("submit", async function(event) {
        // Prevent the default form submission behavior
        event.preventDefault();
        
        // Create a FormData object from the form data
        const formData = new FormData(this);

        try {
            // Send a POST request to the login endpoint
            const response = await fetch("/login", {
                method: "POST",
                body: formData
            });

            // Check if the response is not OK
            if (!response.ok) {
                // Parse the error response as JSON
                const errorData = await response.json();

                // Display the error message
                document.getElementById("error-message").innerText = errorData.message;
                document.getElementById("error-message").style.display = "block";
                return;
            }

            // Handle successful login (redirect or other actions)
        } catch (error) {
            // Handle any errors that occur during the request
            console.error("An error occurred:", error);
        }
    });
});

document.getElementById("logout-btn").addEventListener("click", async function(event) {
    event.preventDefault();
    
    try {
        const response = await fetch("/api/logout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRF-TOKEN": "{{ csrf_token() }}" // Include CSRF token if needed
            }
        });

        if (!response.ok) {
            throw new Error("Logout failed"); // Handle failed logout
        }

        // Redirect to login page or handle logout success
        window.location.href = "{{ route('login') }}";
    } catch (error) {
        console.error("Logout error:", error);
        // Handle error and display appropriate message to the user
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const requestedQuantity = parseInt(urlParams.get('quantity')); // Get the requested quantity from the URL parameter

    if (isNaN(requestedQuantity) || requestedQuantity <= 0) {
        console.error('Invalid requested quantity');
        return;
    }

    // Display the requested quantity on the page
    document.getElementById('confirmationMessage').textContent = `The requested quantity is ${requestedQuantity}.`;

    // Donation confirmation button click event listener
    document.getElementById('donateConfirmBtn').addEventListener('click', function() {
        const quantityInput = parseInt(document.getElementById('quantityInput').value);

        // Validate the donation quantity
        if (isNaN(quantityInput) || quantityInput < 1) {
            alert('Please enter a valid quantity.'); // Display an alert for invalid quantity
            return;
        }

        // Check if the donated quantity exceeds the requested quantity
        if (quantityInput > requestedQuantity) {
            // Ask for confirmation if the donated quantity exceeds the requested quantity
            const confirmMessage = `You are donating ${quantityInput} devices, which is more than the requested quantity of ${requestedQuantity}. Do you want to continue?`;
            if (confirm(confirmMessage)) {
                // Proceed with donation and redirect to pickup page
                confirmDonation(quantityInput);
            }
        } else {
            // Proceed with donation and redirect to pickup page
            confirmDonation(quantityInput);
        }
    });

    // Function to confirm the donation and redirect to pickup page
    function confirmDonation(quantity) {
        // Redirect to pickup page with donation quantity as a query parameter
        window.location.href = `pickup.html?quantity=${quantity}`;
    }

    // Back button click event listener
    document.getElementById('backBtn').addEventListener('click', function() {
        // Navigate back to the previous page (medical device details page)
        window.history.back();
    });

    // Home button click event listener (you can implement this based on your application's routing)
    document.getElementById('homeBtn').addEventListener('click', function() {
        // Redirect to the home page
        window.location.href = 'home.html';
    });

    // Logout button click event listener (you can implement this based on your application's routing)
    document.getElementById('logoutBtn').addEventListener('click', function() {
        // Redirect to the logout page
        window.location.href = 'logout.html';
    });
});
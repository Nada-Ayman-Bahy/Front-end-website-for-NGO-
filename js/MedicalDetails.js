document.addEventListener('DOMContentLoaded', function() {
    // Sample data for medical devices (replace with your actual data)
    const medicalDevices = [
        { id: 1, name: 'Glucometer', type: 'Portable', use: 'Blood Glucose Monitoring', image: 'Pictures/Glucometer.png', quantity: 10 },
        { id: 2, name: 'Nebulizer', type: 'Stationary', use: 'Medication Inhalation', image: 'Pictures/Nebulizer.png', quantity: 5 },
        { id: 3, name: 'Wheelchair', type: 'Standard', use: 'Mobility Assistance', image: 'Pictures/Wheelchair.png', quantity: 3 },
        { id: 4, name: 'Ventilator', type: 'Life Support', use: 'Breathing Support', image: 'Pictures/Ventilator.png', quantity: 2 },
        { id: 5, name: 'Antibiotics', type: 'Medication', use: 'Infection Treatment', image: 'Pictures/Antibiotics.png', quantity: 20 },
        { id: 6, name: 'Antidiabetic Medications', type: 'Medication', use: 'Blood Sugar Management', image: 'Pictures/Antidiabetic.png', quantity: 15 },
        // Add more medical devices as needed
    ];

    // Get the device ID from the URL query parameter (you can implement this based on your application's routing)
    const urlParams = new URLSearchParams(window.location.search);
    const deviceId = parseInt(urlParams.get('id'));

    // Find the device details by ID
    const device = medicalDevices.find(device => device.id === deviceId);

    // Populate the device details
    if (device) {
        document.getElementById('deviceName').textContent = device.name;
        document.getElementById('deviceType').textContent = device.type;
        document.getElementById('deviceUse').textContent = device.use;
        document.getElementById('deviceImage').src = device.image;
        document.getElementById('deviceImage').style.width = '250px'; // Set the width to 250 pixels
        document.getElementById('deviceImage').style.height = '250px'; // Set the height to 250 pixels
        document.getElementById('deviceQuantity').textContent = device.quantity;
    } else {
        // Device not found, display an error message or redirect to an error page
        console.error('Device not found');
        // You can handle the error scenario here, e.g., display an error message or redirect to an error page
    }

  
    document.getElementById('donation').addEventListener('click', function() {
        const requestedQuantity = parseInt(document.getElementById('deviceQuantity').textContent);
        const enteredQuantity = parseInt(document.getElementById('quantityInput').value);

        if (enteredQuantity > requestedQuantity) {
            const complement = confirm(`The requested quantity is ${requestedQuantity}, but you entered ${enteredQuantity}. Do you want to complement?`);

            if (complement) {
                // Redirect to complement page or handle complement logic here
                window.location.href = 'pickup.html'; // Replace 'ComplementPage.html' with your actual complement page
            } else {
                // Do nothing or show a message
            }
        } else {
            // Handle case where entered quantity is valid for donation
            window.location.href = 'pickup.html';
            // Redirect or perform further actions as needed
        }
    });
    updateGrid(MedicalSuppliesRequests);
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});
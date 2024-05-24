document.addEventListener('DOMContentLoaded', function() {
    // Function to retrieve item details based on ID from URL parameters
    function getItemDetails() {
        // Parse the ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');

        // Sample data for toy donation requests (replace with your actual data)
        const toyRequests = [
            { id: 1, name: 'Chess Set', type: 'Board Games', gender: 'Male', age: 10, category: 'Board Games', image: 'Pictures/chess.jpg', quantity: 2 },
            { id: 2, name: 'Teddy Bear', type: 'Stuffed Toys', gender: 'Female', age: 5, category: 'Stuffed Toys', image: 'Pictures/teddy].jpg', quantity: 1 },
            {id:3  , name: ' Lego Set', type: ' Legos', gender: 'Female', age: 8, category: ' Board Games', image: 'Pictures/lego.jpg', quantity: 3 },
            {id:4  , name: 'Barbie Doll', type: ' Barbie', gender: 'Female', age: 7, category: ' Dolls', image: 'Pictures/barbie.jpg', quantity: 1 },
            {id:5  , name: 'Basketball', type: ' Basketball', gender: 'Male', age: 12, category: 'Sports', image: 'Pictures/basket.jpg', quantity: 8},
            {id:6  , name: 'Hot Wheels Cars', type: ' Hot Wheels', gender: 'Female', age: 6, category: 'Cars', image: 'Pictures/hotwheels.jpg', quantity: 10 },
            {id:7  , name: 'Bicycle', type: 'Bicycle', gender: 'Male', age: 10, category: 'Outdoor', image: 'Pictures/bije.jpg', quantity: 19 },

       
       
        ];

        // Find the toy item with the matching ID
        const selectedItem = toyRequests.find(item => item.id === parseInt(itemId));

        if (selectedItem) {
            // Update HTML elements with item details
            document.getElementById('itemName').textContent = selectedItem.name;
            document.getElementById('itemType').textContent = selectedItem.type;
            document.getElementById('itemGender').textContent = selectedItem.gender;
            document.getElementById('itemAge').textContent = selectedItem.age;
            document.getElementById('itemCategory').textContent = selectedItem.category;
            document.getElementById('itemQuantity').textContent = selectedItem.quantity;

            // Set the image source
            document.getElementById('itemImage').src = selectedItem.image;
        } else {
            // Handle case where item with specified ID is not found
            console.error('Item not found.');
        }
    }

    // Call getItemDetails when the page loads
    getItemDetails();

    document.getElementById('donation').addEventListener('click', function() {
        const requestedQuantity = parseInt(document.getElementById('itemQuantity').textContent);
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
    
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});
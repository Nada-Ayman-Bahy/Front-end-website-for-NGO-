document.addEventListener('DOMContentLoaded', function() {
    // Function to retrieve item details based on ID from URL parameters
    function getItemDetails() {
        // Parse the ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');

        // Sample data for food donation requests (replace with your actual data)
       
            const foodRequests = [
                { id: 1, name: 'Apples', type: 'Fruits and Vegetables', quantity: '5 KG' },
                { id: 2, name: 'Canned Soup', type: 'Canned Foods', quantity: '10 cans' },
                { id: 3, name: 'Bananas', type: 'Fruits and Vegetables', quantity: '7 KG' },
                { id: 4, name: 'Canned Tuna', type: 'Canned Foods', quantity: '15 cans' },
                { id: 5, name: 'Salad Mix', type: 'Fresh Meals', quantity: '3 packs' },
                { id: 6, name: 'Bagels', type: 'Baked Goods', quantity: '2 dozens' },
                { id: 7,name: 'Oranges', type: 'Fruits and Vegetables', quantity: '8 KG' },
                { id: 8,name: 'Canned Beans', type: 'Canned Foods', quantity: '12 cans' },
                { id: 9,name: 'Berries Mix', type: 'Fruits and Vegetables', quantity: '4 packs' },
                { id: 10,name: 'Canned Corn', type: 'Canned Foods', quantity: '20 cans' },
                { id: 11,name: 'Fresh Pasta', type: 'Fresh Meals', quantity: '5 packs' },
                { id: 12,name: 'Croissants', type: 'Baked Goods', quantity: '3 dozens' },
                { id:13,name: 'Cucumber', type: 'Fruits and Vegetables', quantity: '10 KG' },
                { id:14,name: 'Pepper', type: 'Fruits and Vegetables', quantity: '12 KG'},
                { id:15,name: 'Mushrooms', type: 'Fruits and Vegetables', quantity: '19KG' },
                // Add more food items as needed
            ];
    // Add more food items as needed



        // Find the food item with the matching ID
        const selectedItem = foodRequests.find(item => item.id === parseInt(itemId));

        if (selectedItem) {
            // Update HTML elements with item details
            document.getElementById('itemName').textContent = selectedItem.name;
            document.getElementById('itemType').textContent = selectedItem.type;
            document.getElementById('itemQuantity').textContent = selectedItem.quantity;

            // Set label text for quantity input based on item type
            const quantityLabel = document.getElementById('quantityInputLabel');
            if (selectedItem.type === 'Fruits and Vegetables') {
                quantityLabel.textContent = 'Kilos to be donated:';
            } else {
                quantityLabel.textContent = 'Quantity to be donated:';
            }
        } else {
            // Handle case where item with specified ID is not found
            console.error('Item not found.');
        }
    }
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

    
    

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

});
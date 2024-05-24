document.addEventListener('DOMContentLoaded', function() {

function getItemDetails() {
    // Parse the ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const itemId = urlParams.get('id');

    // Sample data (replace with your actual data retrieval logic)
    const suppliesRequests = [
       
        { id:1,item: 'Notebooks', category: 'Stationary',  quantity: 47, image: 'Pictures/notebook.jpg'},
        { id:2, item: 'Pencils', category: 'Stationary',  quantity: 8 , image: 'Pictures/penciles.jpg'},
        { id: 4,item: 'Erasers', category: 'Stationary',quantity: 19 , image: 'Pictures/erasers.jpeg'},
        { id: 8, item: 'Pens', category: 'Stationary', quantity: 79 , image: 'Pictures/pens.jpg'},
        { id: 9, item: 'A4 Papers', category: 'Stationary',quantity: 5 , image: 'Pictures/A4.jpeg'},
        { id: 12, item: 'Colored Penciles', category: 'Stationary',quantity: 10 , image: 'Pictures/ColoredPEnciles.jpeg'},
        // Add more items as needed
    ];
  
    // Find the item with the matching ID
    const selectedItem = suppliesRequests.find(item => item.id === parseInt(itemId));

    if (selectedItem) {
        // Update HTML elements with item details
        document.getElementById('itemName').textContent = selectedItem.item;
        document.getElementById('itemType').textContent = selectedItem.category;
        document.getElementById('itemQuantity').textContent = selectedItem.quantity;
        document.getElementById('itemQuantity').textContent = selectedItem.quantity;
        document.getElementById('Pic').setAttribute('src', selectedItem.image);
    } 
    else {
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

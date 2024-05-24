document.addEventListener('DOMContentLoaded', function() {
    // Function to retrieve item details based on ID from URL parameters
    function getItemDetails() {
        // Parse the ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');

        const clothingRequests = [
            { id: 1, name: 'Shirt', type: 'Shirts', gender: 'Male', age: 2, season: 'Spring', material: 'Cotton', quantity: 5,  image: 'Pictures/T-Shirt.jpg', },
            { id: 2, name: 'Pants', type: 'Pants', gender: 'Female', age: 36, season: 'Spring', material: 'Denim', quantity: 10 ,  image: 'Pictures/pants.jpeg',},
            { id: 4, name: 'Boot', type: 'Footwear', gender: 'Male', age: 46, season: 'Winter', material: 'Leather', quantity: 4 ,  image: 'Pictures/MEN.jpg',},
            { id: 3, name: 'Dress', type: 'Dresses', gender: 'Female', age: 17, season: 'Fall', material: 'Wool', quantity: 2 ,  image: 'Pictures/dress.jpeg',},
            { id: 5, name: 'TutleNeck', type: 'Tops', gender: 'Male', season: 'Fall', age: 24, material: 'Wool', quantity: 2,  image: 'Pictures/tutleneck.jpg', },
            { id: 6, name: 'Shoes', type: 'Footwear', gender: 'Male', season: 'Summer', age: 26, material: 'Converse', quantity: 2 ,  image: 'Pictures/converse.jpeg',},
            { id: 7, name: 'Sandales', type: 'Footwear', gender: 'Male', season: 'Fall', age: 5, material: 'leather', quantity: 2,  image: 'Pictures/sandles.jpeg', },
            { id: 8, name: 'Dress', type: 'Dresses', gender: 'Female', season: 'Summer', age: 11, material: 'Linen', quantity: 2,  image: 'Pictures/dress11.jpg', },
            { id: 9, name: 'Suit', type: 'Suits', gender: 'Male', season: 'Fall', age: 19, material: 'Wool', quantity: 2,  image: 'Pictures/suit.jpg', },
            { id: 10,name: 'Hat', type: 'Headwear', gender: 'Male', season: 'Winter', age: 13,material: 'Wool', quantity: 2 ,  image: 'Pictures/hat.jpeg',},
        ]
        // Find the item with the matching ID
        const selectedItem = clothingRequests.find(item => item.id === parseInt(itemId));

        if (selectedItem) {
            // Update HTML elements with item details
            document.getElementById('itemName').textContent = selectedItem.name;
            document.getElementById('itemType').textContent = selectedItem.type;
            document.getElementById('itemGender').textContent = selectedItem.gender;
            document.getElementById('itemAge').textContent = selectedItem.age;
            document.getElementById('itemSeason').textContent = selectedItem.season;
            document.getElementById('itemMaterial').textContent = selectedItem.material;
            document.getElementById('itemQuantity').textContent = selectedItem.quantity;
            document.getElementById('Pic').setAttribute('src', selectedItem.image);
        } else {
            // Handle case where item with specified ID is not found
            console.error('Item not found.');
        }
    }

    // Call getItemDetails when the page loads
    getItemDetails();

    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

   

    // Event listener for the logout button
 
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

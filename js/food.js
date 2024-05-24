document.addEventListener('DOMContentLoaded', function() {
    const foodGrid = document.getElementById('foodGrid');
    const foodTypeFilter = document.getElementById('foodTypeFilter');
    const searchInput = document.getElementById('searchInput')

    // Sample data for food donation requests (replace with your actual data)
    const foodRequests = [
            { name: 'Apples', type: 'Fruits and Vegetables', quantity: '5 KG', detailsLink: 'FoodDetails.html?id=1' },
            { name: 'Canned Soup', type: 'Canned Foods', quantity: '10 cans', detailsLink: 'FoodDetails.html?id=2' },
            { name: 'Bananas', type: 'Fruits and Vegetables', quantity: '7 KG', detailsLink: 'FoodDetails.html?id=3' },
            { name: 'Canned Tuna', type: 'Canned Foods', quantity: '15 cans', detailsLink: 'FoodDetails.html?id=4' },
            { name: 'Salad Mix', type: 'Fresh Meals', quantity: '3 packs', detailsLink: 'FoodDetails.html?id=5' },
            { name: 'Bagels', type: 'Baked Goods', quantity: '2 dozens', detailsLink: 'FoodDetails.html?id=6' }, // Add more food items as needed
            { name: 'Oranges', type: 'Fruits and Vegetables', quantity: '8 KG', detailsLink: 'FoodDetails.html?id=7' },
            { name: 'Canned Beans', type: 'Canned Foods', quantity: '12 cans', detailsLink: 'FoodDetails.html?id=8' },
            { name: 'Berries Mix', type: 'Fruits and Vegetables', quantity: '4 packs', detailsLink: 'FoodDetails.html?id=9' },
            { name: 'Canned Corn', type: 'Canned Foods', quantity: '20 cans', detailsLink: 'FoodDetails.html?id=10' },
            { name: 'Fresh Pasta', type: 'Fresh Meals', quantity: '5 packs', detailsLink: 'FoodDetails.html?id=11' },
            { name: 'Croissants', type: 'Baked Goods', quantity: '3 dozens', detailsLink: 'FoodDetails.html?id=12' },
            { name: 'Cucumber', type: 'Fruits and Vegetables', quantity: '10 KG', detailsLink: 'FoodDetails.html?id=13' },
            { name: 'Pepper', type: 'Fruits and Vegetables', quantity: '12 KG', detailsLink: 'FoodDetails.html?id=14' },
            { name: 'Mushrooms', type: 'Fruits and Vegetables', quantity: '19KG', detailsLink: 'FoodDetails.html?id=15' },
 
    ];

    // Function to filter food requests based on selected filter
    function filterFoodRequests(foodType) {
        return foodRequests.filter(request => {
            return !foodType || request.type === foodType;
        });
    }
    function searchItems() {
const searchKeyword = searchInput.value.trim().toLowerCase(); // Get the search keyword

// Filter data based on search keyword
const filteredData = foodRequests.filter(request =>
request.name.toLowerCase().includes(searchKeyword) || // Check if item name matches
request.type.toLowerCase().includes(searchKeyword) // Check if type matches
);

updateGrid(filteredData); // Update the grid with filtered data
}
// Function to update the grid with filtered food requests
    function updateGrid(filteredData) {
        foodGrid.innerHTML = ''; // Clear the existing grid items

        filteredData.forEach(request => {
            // Create a grid item div
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item'); // Add the grid-item class

            // Create elements for food info in the grid item
            const foodInfo = document.createElement('div');
            foodInfo.classList.add('food-item'); // Optional class for styling

            const nameElement = document.createElement('h3');
            nameElement.textContent = request.name;

            const typeElement = document.createElement('p');
            typeElement.textContent = `Type: ${request.type}`;


            const quantityElement = document.createElement('p');
            quantityElement.textContent = `Quantity: ${request.quantity}`;

            // Append elements to the food info container
            foodInfo.appendChild(nameElement);
            foodInfo.appendChild(typeElement);
            foodInfo.appendChild(quantityElement);

            // Append the food info container to the grid item
            gridItem.appendChild(foodInfo);

            // Create a "See Details" link
            const detailsLink = document.createElement('a');
            detailsLink.textContent = 'See Details';
            detailsLink.href = request.detailsLink;
            detailsLink.classList.add('details-link'); // Optional class for styling

            // Append the details link to the grid item
            gridItem.appendChild(detailsLink);

            // Append the grid item to the food grid container
            foodGrid.appendChild(gridItem);
        });
    }

    // Event listener for the filter button
    document.getElementById('filterBtn').addEventListener('click', function() {
        const selectedFoodType = foodTypeFilter.value;

        const filteredData = filterFoodRequests(selectedFoodType);

        if (filteredData.length === 0) {
            const noRequestsMessage = document.createElement('div');
            noRequestsMessage.textContent = 'No requests match the selected criteria.';
            foodGrid.appendChild(noRequestsMessage);
        } else {
            updateGrid(filteredData);
        }
    });

    // Initial population of the grid with all food requests
    
    updateGrid(foodRequests);
    searchInput.addEventListener('input', searchItems);

    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});
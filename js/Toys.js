document.addEventListener('DOMContentLoaded', function() {
    const toyGrid = document.getElementById('toyGrid');
    const ageFilter = document.getElementById('ageFilter');
    const genderFilter = document.getElementById('genderFilter');
    const categoryFilter = document.getElementById('categoryFilter');

    // Sample data for toy donation requests (replace with your actual data)
    const toyRequests = [
        { name: 'Chess Set',type: 'Chess', category: 'Board Games', gender: 'Male', age: 10, quantity: 2, detailsLink: 'toyDetails.html?id=1' },
        { name: 'Teddy Bear',type: 'Teddy Bear', category: 'Stuffed Toys', gender: 'Female', age: 5, quantity: 1, detailsLink: 'toyDetails.html?id=2' },
        { name: 'Lego Set', type: 'Lego',category: 'Board Games', gender: 'Female', age: 8, quantity: 3, detailsLink: 'toyDetails.html?id=3' },
        { name: 'Barbie Doll', type: 'Barbie', category: 'Dolls', gender: 'Female', age: 7, quantity: 1, detailsLink: 'toyDetails.html?id=4' },
        { name: 'Basketball', type: 'Basketball',category: 'Sports', gender: 'Male', age: 12, quantity: 8, detailsLink: 'toyDetails.html?id=5' },
        { name: 'Hot Wheels Car', type: 'Hot Wheels',category: 'Cars', gender: 'Female', age: 6, quantity: 10, detailsLink: 'toyDetails.html?id=6' },
        { name: 'Bicycle',  type: 'Bicycle',category: 'Outdoor', gender: 'Male', age: 10, quantity: 19, detailsLink: 'toyDetails.html?id=7' },
    
        // Add more toy items as needed
    ];

    // Function to filter toy requests based on selected filters
    function filterToyRequests(age, gender, category) {
        return toyRequests.filter(request => {
            const ageMatch = !age || (request.age >= parseInt(age.split('-')[0]) && request.age <= parseInt(age.split('-')[1]));
            const genderMatch = !gender || request.gender === gender;
            const categoryMatch = !category || request.category === category;
            return ageMatch && genderMatch && categoryMatch;
        });
    }

    // Function to update the grid with filtered toy requests
    function updateGrid(filteredData) {
        toyGrid.innerHTML = ''; // Clear the existing grid items

        filteredData.forEach(request => {
            // Create a grid item div
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item'); // Add the grid-item class

            // Create elements for toy info in the grid item
            const toyInfo = document.createElement('div');
            toyInfo.classList.add('toy-item'); // Optional class for styling

            const nameElement = document.createElement('h3');
            nameElement.textContent = request.name;

            const categoryElement = document.createElement('p');
            categoryElement.textContent = `Category: ${request.category}`;

            const ageElement = document.createElement('p');
            ageElement.textContent = `Age: ${request.age}`;

            const quantityElement = document.createElement('p');
            quantityElement.textContent = `Quantity: ${request.quantity}`;

            // Append elements to the toy info container
            toyInfo.appendChild(nameElement);
            toyInfo.appendChild(categoryElement);
            toyInfo.appendChild(ageElement);
            toyInfo.appendChild(quantityElement);

            // Append the toy info container to the grid item
            gridItem.appendChild(toyInfo);

            // Create a "See Details" link
            const detailsLink = document.createElement('a');
            detailsLink.textContent = 'See Details';
            detailsLink.href = request.detailsLink;
            detailsLink.classList.add('details-link'); // Optional class for styling

            // Append the details link to the grid item
            gridItem.appendChild(detailsLink);

            // Append the grid item to the toy grid container
            toyGrid.appendChild(gridItem);
        });
    }

    // Event listener for the filter button
    document.getElementById('filterBtn').addEventListener('click', function() {
        const selectedAge = ageFilter.value;
        const selectedGender = genderFilter.value;
        const selectedCategory = categoryFilter.value;

        const filteredData = filterToyRequests(selectedAge, selectedGender, selectedCategory);

        if (filteredData.length === 0) {
            const noRequestsMessage = document.createElement('div');
            noRequestsMessage.textContent = 'No requests match the selected criteria.';
            toyGrid.appendChild(noRequestsMessage);
        } else {
            updateGrid(filteredData);
        }
    });

    // Initial population of the grid with all toy requests
    updateGrid(toyRequests);
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});
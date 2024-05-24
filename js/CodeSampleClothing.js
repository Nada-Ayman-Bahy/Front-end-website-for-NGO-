document.addEventListener('DOMContentLoaded', function() {
    const clothingGrid = document.getElementById('clothingGrid');
    const ageInput = document.getElementById('ageInput'); // Changed from ageFilter to ageInput
    const searchInput = document.getElementById('searchInput');
    // Sample data for clothing donation requests (replace with your actual data)
    const clothingRequests = [
        { name: 'Shirt', category: 'Tops', gender: 'Female', season: 'Spring', age: 2, detailsLink: 'details.html?id=1' },
        { name: 'Pants', category: 'Pants', gender: 'Male', season: 'Spring', age: 36, detailsLink: 'details.html?id=2' },
        { name: 'Dress', category: 'Dresses', gender: 'Female', season: 'Fall', age: 17, detailsLink: 'details.html?id=3' },
        { name: 'Boot', category: 'Footwear', gender: 'Male', season: 'Winter', age: 46, detailsLink: 'details.html?id=4' },
        { name: 'TutleNeck', category: 'Tops', gender: 'Male', season: 'Fall', age: 24, detailsLink: 'details.html?id=5' },
        { name: 'Shoes', category: 'Footwear', gender: 'Male', season: 'Summer', age: 26, detailsLink: 'details.html?id=6' },
        { name: 'Sandals', category: 'Footwear', gender: 'Male', season: 'Fall', age: 5, detailsLink: 'details.html?id=7' },
        { name: 'Dress', category: 'Dresses', gender: 'Female', season: 'Summer', age: 11, detailsLink: 'details.html?id=8' },
        { name: 'Suit', category: 'Suits', gender: 'Male', season: 'Fall', age: 19, detailsLink: 'details.html?id=9' },
        { name: 'Hat', category: 'Headwear', gender: 'Male', season: 'Winter', age: 13, detailsLink: 'details.html?id=10' },
    ];
   
    function searchItems() {
        const searchKeyword = searchInput.value.trim().toLowerCase(); // Get the search keyword
        
        // Filter data based on search keyword
        const filteredData = clothingRequests.filter(request =>
            request.name.toLowerCase().includes(searchKeyword) || // Check if item name matches
            request.category.toLowerCase().includes(searchKeyword) // Check if category matches
        );

        updateGrid(filteredData); // Update the grid with filtered data
    }
    // Function to filter clothing requests based on age
    function filterClothingRequestsByAge(age) {
        return clothingRequests.filter(request => request.age === parseInt(age)); // Parse age as an integer
    }

    function filterClothingRequestsByGender(gender) {
        return clothingRequests.filter(request => request.gender === gender);
    }

    function filterClothingRequestsBySeason(season) {
        return clothingRequests.filter(request => request.season === season);
    }

    // Function to update the grid with filtered data
    function updateGrid(filteredData) {
        clothingGrid.innerHTML = ''; // Clear the existing grid items

        filteredData.forEach(request => {
            // Create a grid item div
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item'); // Add the grid-item class

            // Create elements for brief info in the first column
            const briefInfo = document.createElement('div');
            briefInfo.classList.add('clothing-item'); // Optional class for styling

            const nameElement = document.createElement('h3');
            nameElement.textContent = request.name;

            const categoryElement = document.createElement('p');
            categoryElement.textContent = `Category: ${request.category}`;

            const genderElement = document.createElement('p');
            genderElement.textContent = `Gender: ${request.gender}`;

            const seasonElement = document.createElement('p');
            seasonElement.textContent = `Season: ${request.season}`;

            const ageElement = document.createElement('p');
            ageElement.textContent = `Age: ${request.age}`;

            // Append elements to the brief info container
            briefInfo.appendChild(nameElement);
            briefInfo.appendChild(categoryElement);
            briefInfo.appendChild(genderElement);
            briefInfo.appendChild(seasonElement);
            briefInfo.appendChild(ageElement); // Add age element

            // Append the brief info container to the grid item
            gridItem.appendChild(briefInfo);

            // Create a "See Details" link in the second column
            const detailsLink = document.createElement('a');
            detailsLink.textContent = 'See Details';
            detailsLink.href = request.detailsLink;
            detailsLink.classList.add('details-link'); // Optional class for styling

            // Append the details link to the grid item
            gridItem.appendChild(detailsLink);

            // Append the grid item to the clothing grid container
            clothingGrid.appendChild(gridItem);

            // Call the redirectToDetails function to add the event listener for details link
            redirectToDetails(detailsLink, request.detailsLink); // Pass details link and details URL
        });
    }
  
    document.getElementById('filterBtn2').addEventListener('click', function() {
        const selectedAge = ageInput.value.trim();
        const selectedGender = genderFilter.value;
        const selectedSeason = seasonFilter.value;
    
        let filteredData = clothingRequests; // Start with all data
    
        if (selectedSeason !== '') {
            filteredData = filterClothingRequestsBySeason(selectedSeason);
        }
    
        if (selectedGender !== '') {
            filteredData = filteredData.filter(request => request.gender === selectedGender);
        }
    
        if (selectedAge !== '') {
            filteredData = filteredData.filter(request => request.age === parseInt(selectedAge));
        }
    
        if (filteredData.length === 0) {
            const noRequestsMessage = document.createElement('div');
            noRequestsMessage.textContent = 'No requests match the selected criteria.';
            clothingGrid.innerHTML = "";
            clothingGrid.appendChild(noRequestsMessage);
        } else {
            updateGrid(filteredData); // Update the grid with the filtered data
        }
    });
    

    updateGrid(clothingRequests);

    function redirectToDetails(detailsLink, detailsUrl) {
        // Add event listener to the details link
        detailsLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            window.location.href = detailsUrl; // Redirect to details URL
        });
    }
    searchInput.addEventListener('input', searchItems);
   
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});

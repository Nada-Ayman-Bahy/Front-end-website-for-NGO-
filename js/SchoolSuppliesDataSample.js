document.addEventListener('DOMContentLoaded', function() {
    const suppliesGrid = document.getElementById('SchoolGrid'); // Updated ID to match the HTML
    const filterBtn = document.getElementById('SchoolFilter'); // Updated ID to match the HTML
    const searchInput = document.getElementById('searchInput');

    // Sample data for school supplies donation requests
    const suppliesRequests = [
        { id: 1, item: 'Notebooks', category: 'Stationary', detailsLink: 'Schooldetails.html?id=1' },
        { id: 2, item: 'Pencils', category: 'Stationary', detailsLink: 'Schooldetails.html?id=2' },
        { id: 3, item: 'Imagine Me', category: 'Books', detailsLink: 'Schooldetails.html?id=3' },
        { id: 4, item: 'Erasers', category: 'Stationary', detailsLink: 'Schooldetails.html?id=4' },
        { id: 5, item: 'Shatter Me', category: 'Books', detailsLink: 'Schooldetails.html?id=5' },
        { id: 6, item: 'Ignite Me', category: 'Books', detailsLink: 'Schooldetails.html?id=6' },
        { id: 7, item: 'Restore Me', category: 'Books', detailsLink: 'Schooldetails.html?id=7' },
        { id: 8, item: 'Pens', category: 'Stationary', detailsLink: 'Schooldetails.html?id=8' },
        { id: 9, item: 'A4 Papers', category: 'Stationary', detailsLink: 'Schooldetails.html?id=9' },
        { id: 10, item: 'November 9', category: 'Books', detailsLink: 'Schooldetails.html?id=10' },
        { id: 11, item: 'Reminders of Him', category: 'Books', detailsLink: 'Schooldetails.html?id=11' },
        { id: 12, item: 'Colored Pencils', category: 'Stationary', detailsLink: 'Schooldetails.html?id=12' }
        // Add more school supplies items as needed
    ];

    // Function to filter supplies by search keyword
    function searchItems() {
        const searchKeyword = searchInput.value.trim().toLowerCase(); // Get the search keyword
        
        // Filter data based on search keyword
        const filteredData = suppliesRequests.filter(request =>
            request.item.toLowerCase().includes(searchKeyword) || // Check if item name matches
            request.category.toLowerCase().includes(searchKeyword) // Check if category matches
        );

        updateGrid(filteredData); // Update the grid with filtered data
    }

    // Function to filter school supplies requests based on category (Books or Stationary)
    function filterSuppliesByCategory(category) {
        return suppliesRequests.filter(request => request.category === category);
    }

    // Function to update the grid with filtered data
    function updateGrid(filteredData) {
        suppliesGrid.innerHTML = ''; // Clear the existing grid items

        // Iterate through filtered data and create grid items
        filteredData.forEach(request => {
            // Create a grid item div
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item'); // Add the grid-item class

            // Create elements for brief info in the first column
            const itemElement = document.createElement('h3');
            itemElement.textContent = request.item;

            const categoryElement = document.createElement('p');
            categoryElement.textContent = `Category: ${request.category}`;

            // Create a "See Details" link
            const detailsLink = document.createElement('a');
            detailsLink.textContent = 'See Details';
            detailsLink.href = request.detailsLink;
            detailsLink.classList.add('details-link');
            
            // Append elements to the grid item
            gridItem.appendChild(itemElement);
            gridItem.appendChild(categoryElement);
            gridItem.appendChild(detailsLink);

            // Append the grid item to the supplies grid container
            suppliesGrid.appendChild(gridItem);

            // Add event listener to details link for item details
            detailsLink.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                if (request.category === 'Books') {
                    redirectToDetails(request.id); // Redirect to book details page
                } else {
                    redirectToBookDetails(request.detailsLink); // Redirect to normal details page
                }
            });
        });
    }

    filterBtn.addEventListener('click', function() {
        const selectedCategory = document.getElementById('ageFilter').value;
        if (selectedCategory === 'Books') {
            const filteredData = filterSuppliesByCategory('Books');
            updateGrid(filteredData);
        } else if (selectedCategory === 'Stationary') {
            const filteredData = filterSuppliesByCategory('Stationary');
            updateGrid(filteredData);
        } else {
            // If no category selected, display all data
            updateGrid(suppliesRequests);
        }
    });

    // Function to redirect to book details page
    function redirectToBookDetails(detailsUrl) {
        // Redirect to BookDeets.html with item ID
        window.location.href = detailsUrl;
    }

    // Function to redirect to details page with item ID
    function redirectToDetails(itemId) {
        const selectedItem = suppliesRequests.find(item => item.id === itemId);
        if (selectedItem && selectedItem.category === 'Books') {
            window.location.href = `BookDeets.html?id=${itemId}`;
        } else {
            window.location.href = `Schooldetails.html?id=${itemId}`;
        }
    }

    // Add event listener for search input
    searchInput.addEventListener('input', searchItems);

    // Initial display of all school supplies requests
    updateGrid(suppliesRequests);
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});

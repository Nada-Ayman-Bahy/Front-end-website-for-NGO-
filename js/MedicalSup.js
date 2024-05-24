document.addEventListener('DOMContentLoaded', function(){
    const medicalGrid = document.getElementById('medicalGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const usageFilter = document.getElementById('usageFilter');
    const errorMessage = document.getElementById('errorMessage');

    // Sample data for medical donation requests (replace with your actual data)
    const MedicalSuppliesRequests = [
        { name: 'Glucometer', category: 'Medical Devices', usage: 'Blood Glucose Monitoring', detailsLink: 'MedDetails.html?id=1' },
        { name: 'Nebulizer',  category: 'Medical Devices', usage: 'Medication Inhalation', detailsLink: 'MedDetails.html?id=2' },
        { name: 'Wheelchair', category: 'Medical Equipment', usage: 'Mobility Assistance', detailsLink: 'MedDetails.html?id=3' },
        { name: 'Ventilator',  category: 'Medical Equipment', usage: 'Breathing Support', detailsLink: 'MedDetails.html?id=4' },
        { name: 'Antibiotics',  category: 'Medications', usage: 'Infection Treatment', detailsLink: 'MedDetails.html?id=5' },
        { name: 'Antidiabetic Medications',  category: 'Medications', usage: 'Blood Sugar Management', detailsLink: 'MedDetails.html?id=6' },
        // Add more medical items as needed
    ];
    function searchItems() {
        const searchKeyword = searchInput.value.trim().toLowerCase(); // Get the search keyword
        
        // Filter data based on search keyword
        const filteredData = MedicalSuppliesRequests.filter(request =>
            request.name.toLowerCase().includes(searchKeyword) || // Check if item name matches
            request.category.toLowerCase().includes(searchKeyword) // Check if category matches
        );

        updateGrid(filteredData); // Update the grid with filtered data
    }
    searchInput.addEventListener('input', searchItems);
    // F
    // Function to populate category dropdown
    function populateCategories() {
        const categories = ['All', ...new Set(MedicalSuppliesRequests.map(item => item.category))];
        populateDropdownOptions(categories, categoryFilter);
    }

    // Function to populate usage dropdown
    function populateUsages() {
        const usages = ['All', ...new Set(MedicalSuppliesRequests.map(item => item.usage))];
        populateDropdownOptions(usages, usageFilter);
    }

    // Function to populate dropdown options
    function populateDropdownOptions(options, dropdown) {
        dropdown.innerHTML = ''; // Clear dropdown options
        options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option.charAt(0).toUpperCase() + option.slice(1); // Capitalize first letter
            dropdown.appendChild(optionElement);
        });
    }

    // Populate category and usage dropdowns initially
    populateCategories();
    populateUsages();

    // Event listener for the filter button
    document.getElementById('filterBtn').addEventListener('click', function() {
        const selectedCategory = categoryFilter.value;
        const selectedUsage = usageFilter.value;

        let filteredData = MedicalSuppliesRequests;

        if (selectedCategory !== 'All') {
            filteredData = filteredData.filter(item => item.category === selectedCategory);
        }

        if (selectedUsage !== 'All') {
            filteredData = filteredData.filter(item => item.usage === selectedUsage);
        }

        if (filteredData.length === 0) {
            errorMessage.textContent = "No data available for the selected filters.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }

        updateGrid(filteredData); // Update the grid with the filtered data
    });

    // Function to update the grid
    function updateGrid(filteredData) {
        medicalGrid.innerHTML = ''; // Clear the existing grid items

        filteredData.forEach(request => {
            // Create a grid item div
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item'); // Add the grid-item class

            // Create elements for brief info in the first column
            const briefInfo = document.createElement('div');
            briefInfo.classList.add('medical-item'); // Optional class for styling

            const nameElement = document.createElement('h3');
            nameElement.textContent = request.name;

            const categoryElement = document.createElement('p');
            categoryElement.textContent = `Category: ${request.category}`;

            const usageElement = document.createElement('p');
            usageElement.textContent = `Usage: ${request.usage}`;

            // Append elements to the brief info container
            briefInfo.appendChild(nameElement);
            briefInfo.appendChild(categoryElement);
            briefInfo.appendChild(usageElement); // Add usage element

            // Append the brief info container to the grid item
            gridItem.appendChild(briefInfo);

            // Create a "See Details" link in the second column
            const detailsLink = document.createElement('a');
            detailsLink.textContent = 'See Details';
            detailsLink.href = request.detailsLink;
            detailsLink.classList.add('details-link'); // Optional class for styling

            // Append the details link to the grid item
            gridItem.appendChild(detailsLink);

            // Append the grid item to the medical grid container
            medicalGrid.appendChild(gridItem);
        });
    }

    // Initial population of the grid
    updateGrid(MedicalSuppliesRequests);
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});
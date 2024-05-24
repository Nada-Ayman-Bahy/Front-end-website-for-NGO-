document.addEventListener('DOMContentLoaded', function(){
    const bloodGrid = document.getElementById('bloodGrid');
    const hospitalFilter = document.getElementById('hospitalFilter');
    const governateFilter = document.getElementById('governateFilter');
    const areaFilter = document.getElementById('areaFilter');
    const errorMessage = document.getElementById('errorMessage');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // Sample data for blood donation requests (replace with your actual data)
    const BloodDonationRequests = [
        { hospital: 'El Salam Hospital', governate: 'Cairo', area: 'Nasr City', bloodRequested: 'A+', detailsLink: 'BloodDonDetails.html?id=1' },
        { hospital: 'Maadi Military Hospital', governate: 'Cairo', area: 'Maadi', bloodRequested: 'B-', detailsLink: 'BloodDonDetails.html?id=2' },
        { hospital: 'El Safwa Hospital', governate: 'Giza', area: 'Mohandessin', bloodRequested: 'O+', detailsLink: 'BloodDonDetails.html?id=3' },
        { hospital: 'Misr International Hospital', governate: 'Giza', area: 'Zamalek', bloodRequested: 'AB-', detailsLink: 'BloodDonDetails.html?id=4' },
        { hospital: 'Heliopolis Hospital', governate: 'Cairo', area: 'Heliopolis', bloodRequested: 'O-', detailsLink: 'BloodDonDetails.html?id=5' },
        { hospital: 'Dar El Fouad Hospital', governate: 'Giza', area: 'Dokki', bloodRequested: 'A-', detailsLink: 'BloodDonDetails.html?id=6' },
        { hospital: 'Agouza Hospital', governate: 'Giza', area: 'Agouza', bloodRequested: 'B+', detailsLink: 'BloodDonDetails.html?id=7' },
        { hospital: 'New Cairo Hospital', governate: 'Cairo', area: 'New Cairo', bloodRequested: 'AB+', detailsLink: 'BloodDonDetails.html?id=8' },
        { hospital: 'Shubra General Hospital', governate: 'Cairo', area: 'Shubra', bloodRequested: 'A+', detailsLink: 'BloodDonDetails.html?id=9' },
        { hospital: 'Alexandria Main University Hospital', governate: 'Alexandria', area: 'Al Attarin', bloodRequested: 'O+', detailsLink: 'BloodDonDetails.html?id=10' }
    ];

    // Populate dropdowns initially
    populateFilters();

    // Populate dropdowns function
    function populateFilters() {
        populateDropdown('hospital', hospitalFilter);
        populateDropdown('governate', governateFilter);
        populateDropdown('area', areaFilter);
    }

    // Populate dropdown function
    function populateDropdown(property, dropdown) {
        const options = ['All', ...new Set(BloodDonationRequests.map(item => item[property]))];
        dropdown.innerHTML = '';
        options.forEach(option => {
            const optionElement = document.createElement("option");
            optionElement.value = option;
            optionElement.textContent = option.charAt(0).toUpperCase() + option.slice(1);
            dropdown.appendChild(optionElement);
        });
    }

    // Event listener for the filter button
    document.getElementById('filterBtn').addEventListener('click', updateGrid);

    // Event listener for the search button
    searchBtn.addEventListener('click', function() {
        searchBloodDonations(searchInput.value.trim());
    });

    // Function to update the grid
    function updateGrid() {
        const selectedHospital = hospitalFilter.value;
        const selectedGovernate = governateFilter.value;
        const selectedArea = areaFilter.value;

        let filteredData = BloodDonationRequests.filter(item => {
            return (selectedHospital === 'All' || item.hospital === selectedHospital) &&
                (selectedGovernate === 'All' || item.governate === selectedGovernate) &&
                (selectedArea === 'All' || item.area === selectedArea);
        });

        renderBloodDonations(filteredData);
    }

    // Function to render blood donations in the grid
    function renderBloodDonations(data) {
        bloodGrid.innerHTML = ''; // Cleascsr the existing grid items

        if (data.length === 0) {
            errorMessage.textContent = "No data available for the selected filters.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }

        data.forEach(request => {
            // Create a grid item div
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item'); // Add the grid-item class

            // Create elements for brief info in the first column
            const briefInfo = document.createElement('div');
            briefInfo.classList.add('blood-item'); // Optional class for styling

            const hospitalElement = document.createElement('h3');
            hospitalElement.textContent = request.hospital;

            const governateElement = document.createElement('p');
            governateElement.textContent = `Governate: ${request.governate}`;

            const areaElement = document.createElement('p');
            areaElement.textContent = `Area: ${request.area}`;

            const bloodRequestedElement = document.createElement('p');
            bloodRequestedElement.textContent = `Blood Type Requested: ${request.bloodRequested}`;

            // Append elements to the brief info container
            briefInfo.appendChild(hospitalElement);
            briefInfo.appendChild(governateElement);
            briefInfo.appendChild(areaElement); // Add area element
            briefInfo.appendChild(bloodRequestedElement); // Add blood requested element

            // Append the brief info container to the grid item
            gridItem.appendChild(briefInfo);

            // Create a "Show Details" button in the second column
            const detailsBtn = document.createElement('button');
            detailsBtn.textContent = 'Show Details';
            detailsBtn.dataset.detailsLink = request.detailsLink; // Store details link as a data attribute
            detailsBtn.classList.add('details-btn'); // Optional class for styling

            // Event listener for details button click
            detailsBtn.addEventListener('click', function() {
                window.location.href = this.dataset.detailsLink; // Redirect to details page
            });

            // Append the details button to the grid item
            gridItem.appendChild(detailsBtn);

            // Append the grid item to the blood grid container
            bloodGrid.appendChild(gridItem);
        });
    }

    // Function to search blood donations
    function searchBloodDonations(keyword) {
        const filteredData = BloodDonationRequests.filter(request => {
            return (
                request.hospital.toLowerCase().includes(keyword.toLowerCase()) ||
                request.governate.toLowerCase().includes(keyword.toLowerCase()) ||
                request.area.toLowerCase().includes(keyword.toLowerCase()) ||
                request.bloodRequested.toLowerCase().includes(keyword.toLowerCase())
            );
        });

        renderBloodDonations(filteredData);
    }

    // Initial population of the grid
    updateGrid();
  // Event listener for the back button
  document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    history.back(); // Go back to the previous page
});
});
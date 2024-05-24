document.addEventListener('DOMContentLoaded', function(){
    const teachingGrid = document.getElementById('teachingGrid');
    const subjectFilter = document.getElementById('subjectFilter');
    const governorateFilter = document.getElementById('governorateFilter');
    const areaFilter = document.getElementById('areaFilter');
    const errorMessage = document.getElementById('errorMessage');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // Retrieve TeachingPosts data from session storage or initialize if not present
    let TeachingPosts = JSON.parse(sessionStorage.getItem('TeachingPosts'));
    if (!TeachingPosts) {
        TeachingPosts = [
            { subject: 'Mathematics', area: 'New Cairo', governorate: 'Cairo', detailsLink: 'TeachingDetails.html?id=1' },
            { subject: 'Science', area: 'Sheikh Zayed', governorate: 'Giza', detailsLink: 'TeachingDetails.html?id=2' },
            { subject: 'English', area: 'El Maamora', governorate: 'Alexandria', detailsLink: 'TeachingDetails.html?id=3' },
            { subject: 'Arabic', area: 'Heliopolis', governorate: 'Cairo', detailsLink: 'TeachingDetails.html?id=4' },
            { subject: 'Physics', area: 'Mohandessin', governorate: 'Giza', detailsLink: 'TeachingDetails.html?id=5' },
            { subject: 'Chemistry', area: 'Nasr City', governorate: 'Cairo', detailsLink: 'TeachingDetails.html?id=6' },
            { subject: 'Biology', area: 'Agouza', governorate: 'Giza', detailsLink: 'TeachingDetails.html?id=7' },
            { subject: 'History', area: 'Zamalek', governorate: 'Cairo', detailsLink: 'TeachingDetails.html?id=8' },
            { subject: 'Geography', area: 'Maadi', governorate: 'Cairo', detailsLink: 'TeachingDetails.html?id=9' }
        ];
        sessionStorage.setItem('TeachingPosts', JSON.stringify(TeachingPosts));
    }

    // Function to populate subjects dropdown
    function populateSubjects() {
        const subjects = ['All', ...new Set(TeachingPosts.map(item => item.subject))];
        populateDropdownOptions(subjects, subjectFilter);
    }

    // Function to populate governorates dropdown
    function populateGovernorates() {
        const governorates = ['All', ...new Set(TeachingPosts.map(item => item.governorate))];
        populateDropdownOptions(governorates, governorateFilter);
    }

    // Function to populate areas dropdown
    function populateAreas() {
        const areas = ['All', ...new Set(TeachingPosts.map(item => item.area))];
        populateDropdownOptions(areas, areaFilter);
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
    populateSubjects();
    populateGovernorates();
    populateAreas();

    // Event listener for the filter button
    document.getElementById('filterBtn').addEventListener('click', function() {
        const selectedSubject = subjectFilter.value;
        const selectedGovernorate = governorateFilter.value;
        const selectedArea = areaFilter.value;

        let filteredData = TeachingPosts;

        if (selectedSubject !== 'All') {
            filteredData = filteredData.filter(item => item.subject === selectedSubject);
        }

        if (selectedGovernorate !== 'All') {
            filteredData = filteredData.filter(item => item.governorate === selectedGovernorate);
        }

        if (selectedArea !== 'All') {
            filteredData = filteredData.filter(item => item.area === selectedArea);
        }

        if (filteredData.length === 0) {
            errorMessage.textContent = "No data available for the selected filters.";
            errorMessage.style.display = "block";
        } else {
            errorMessage.style.display = "none";
        }

        updateGrid(filteredData); // Update the grid with the filtered data
    });

    // Event listener for the search button
    searchBtn.addEventListener('click', function() {
        searchTeachingPosts(searchInput.value.trim());
    });

    // Function to update the grid
    function updateGrid(filteredData) {
        teachingGrid.innerHTML = ''; // Clear the existing grid items

        filteredData.forEach(request => {
            // Create a grid item div
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item'); // Add the grid-item class

            // Create elements for brief info in the first column
            const briefInfo = document.createElement('div');
            briefInfo.classList.add('teaching-item'); // Optional class for styling

            const subjectElement = document.createElement('h3');
            subjectElement.textContent = `${request.subject}`;

            const governorateElement = document.createElement('p');
            governorateElement.textContent = `Governorate: ${request.governorate}`;

            const areaElement = document.createElement('p');
            areaElement.textContent =` Area: ${request.area}`;

            // Append elements to the brief info container
            briefInfo.appendChild(subjectElement);
            briefInfo.appendChild(governorateElement);
            briefInfo.appendChild(areaElement); // Add usage element

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
            teachingGrid.appendChild(gridItem);
        });
    }

    // Function to search teaching posts
    function searchTeachingPosts(keyword) {
        const filteredData = TeachingPosts.filter(post => {
            return (
                post.subject.toLowerCase().includes(keyword.toLowerCase()) ||
                post.governorate.toLowerCase().includes(keyword.toLowerCase()) ||
                post.area.toLowerCase().includes(keyword.toLowerCase())
            );
        });

        updateGrid(filteredData);
    }

    // Initial population of the grid
    updateGrid(TeachingPosts);
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });
    document.getElementById('Pro').addEventListener('click', function(event) {
        window.location.href = `subjects.html`;
    });


});
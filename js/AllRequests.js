document.addEventListener('DOMContentLoaded', function(){
    const requestGrid = document.getElementById('requestGrid');
    const categoryFilter = document.getElementById('categoryFilter');
    const errorMessage = document.getElementById('errorMessage');
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.getElementById('searchBtn');

    // Fisher-Yates (aka Knuth) Shuffle Algorithm
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Retrieve AllRequests data from session storage or initialize if not present
    let AllRequests = JSON.parse(sessionStorage.getItem('AllRequests'));
    if (!AllRequests) {
        AllRequests = [
        { main: 'Clothes', name: 'Shirt', category: 'Tops', gender: 'Female', season: 'Spring', age: 2, detailsLink: 'details.html?id=1' },
        { main: 'Clothes', name: 'Pants', category: 'Pants', gender: 'Male', season: 'Spring', age: 36, detailsLink: 'details.html?id=2' },
        { main: 'Clothes', name: 'Dress', category: 'Dresses', gender: 'Female', season: 'Fall', age: 17, detailsLink: 'details.html?id=3' },
        { main: 'Clothes', name: 'Boot', category: 'Footwear', gender: 'Male', season: 'Winter', age: 46, detailsLink: 'details.html?id=4' },
        { main: 'Clothes', name: 'TutleNeck', category: 'Tops', gender: 'Male', season: 'Fall', age: 24, detailsLink: 'details.html?id=5' },
        { main: 'Clothes', name: 'Shoes', category: 'Footwear', gender: 'Male', season: 'Summer', age: 26, detailsLink: 'details.html?id=6' },
        { main: 'Clothes', name: 'Sandals', category: 'Footwear', gender: 'Male', season: 'Fall', age: 5, detailsLink: 'details.html?id=7' },
        { main: 'Clothes', name: 'Dress', category: 'Dresses', gender: 'Female', season: 'Summer', age: 11, detailsLink: 'details.html?id=8' },
        { main: 'Clothes', name: 'Suit', category: 'Suits', gender: 'Male', season: 'Fall', age: 19, detailsLink: 'details.html?id=9' },
        { main: 'Clothes', name: 'Hat', category: 'Headwear', gender: 'Male', season: 'Winter', age: 13, detailsLink: 'details.html?id=10' },
        { main: 'Food', name: 'Apples', type: 'Fruits and Vegetables', quantity: '5 KG', detailsLink: 'FoodDetails.html?id=1' },
        { main: 'Food', name: 'Canned Soup', type: 'Canned Foods', quantity: '10 cans', detailsLink: 'FoodDetails.html?id=2' },
        { main: 'Food', name: 'Bananas', type: 'Fruits and Vegetables', quantity: '7 KG', detailsLink: 'FoodDetails.html?id=3' },
        { main: 'Food', name: 'Canned Tuna', type: 'Canned Foods', quantity: '15 cans', detailsLink: 'FoodDetails.html?id=4' },
        { main: 'Food', name: 'Salad Mix', type: 'Fresh Meals', quantity: '3 packs', detailsLink: 'FoodDetails.html?id=5' },
        { main: 'Food', name: 'Bagels', type: 'Baked Goods', quantity: '2 dozens', detailsLink: 'FoodDetails.html?id=6' }, // Add more food items as needed
        { main: 'Food', name: 'Oranges', type: 'Fruits and Vegetables', quantity: '8 KG', detailsLink: 'FoodDetails.html?id=7' },
        { main: 'Food', name: 'Canned Beans', type: 'Canned Foods', quantity: '12 cans', detailsLink: 'FoodDetails.html?id=8' },
        { main: 'Food', name: 'Berries Mix', type: 'Fruits and Vegetables', quantity: '4 packs', detailsLink: 'FoodDetails.html?id=9' },
        { main: 'Food', name: 'Canned Corn', type: 'Canned Foods', quantity: '20 cans', detailsLink: 'FoodDetails.html?id=10' },
        { main: 'Food', name: 'Fresh Pasta', type: 'Fresh Meals', quantity: '5 packs', detailsLink: 'FoodDetails.html?id=11' },
        { main: 'Food', name: 'Croissants', type: 'Baked Goods', quantity: '3 dozens', detailsLink: 'FoodDetails.html?id=12' }, 
        { main: 'Toys', name: 'Chess Set',type: 'Chess', category: 'Board Games', gender: 'Male', age: 10, quantity: 2, detailsLink: 'toyDetails.html?id=1' },
        { main: 'Toys', name: 'Teddy Bear',type: 'Teddy Bear', category: 'Stuffed Toys', gender: 'Female', age: 5, quantity: 1, detailsLink: 'toyDetails.html?id=2' },
        { main: 'Toys', name: 'Lego Set', type: 'Lego',category: 'Board Games', gender: 'Unisex', age: 8, quantity: 3, detailsLink: 'toyDetails.html?id=3' },
        { main: 'Toys', name: 'Barbie Doll', type: 'Barbie', category: 'Dolls', gender: 'Female', age: 7, quantity: 1, detailsLink: 'toyDetails.html?id=4' },
        { main: 'Toys', name: 'Basketball', type: 'Basketball',category: 'Sports', gender: 'Unisex', age: 12, quantity: 8, detailsLink: 'toyDetails.html?id=5' },
        { main: 'Toys', name: 'Hot Wheels Car', type: 'Hot Wheels',category: 'Cars', gender: 'Unisex', age: 6, quantity: 10, detailsLink: 'toyDetails.html?id=6' },
        { main: 'Toys', name: 'Bicycle',  type: 'Bicycle',category: 'Outdoor', gender: 'Unisex', age: 10, quantity: 19, detailsLink: 'toyDetails.html?id=7' },
        { main: 'School Supplies', id: 1, item: 'Notebooks', category: 'Stationary', detailsLink: 'Schooldetails.html?id=1' },
        { main: 'School Supplies', id: 2, item: 'Pencils', category: 'Stationary', detailsLink: 'Schooldetails.html?id=2' },
        { main: 'School Supplies', id: 3, item: 'Imagine Me', category: 'Books', detailsLink: 'BookDeets.html?id=3' },
        { main: 'School Supplies', id: 4, item: 'Erasers', category: 'Stationary', detailsLink: 'Schooldetails.html?id=4' },
        { main: 'School Supplies', id: 5, item: 'Shatter Me', category: 'Books', detailsLink: 'BookDeets.html?id=5' },
        { main: 'School Supplies', id: 6, item: 'Ignite Me', category: 'Books', detailsLink: 'BookDeets.html?id=6' },
        { main: 'School Supplies', id: 7, item: 'Restore Me', category: 'Books', detailsLink: 'BookDeets.html?id=7' },
        { main: 'School Supplies', id: 8, item: 'Pens', category: 'Stationary', detailsLink: 'Schooldetails.html?id=8' },
        { main: 'School Supplies', id: 9, item: 'A4 Papers', category: 'Stationary', detailsLink: 'Schooldetails.html?id=9' },
        { main: 'School Supplies', id: 10, item: 'November 9', category: 'Books', detailsLink: 'BookDeets.html?id=10' },
        { main: 'School Supplies', id: 11, item: 'Reminders of Him', category: 'Books', detailsLink: 'BookDeets.html?id=11' },
        { main: 'School Supplies', id: 12, item: 'Colored Pencils', category: 'Stationary', detailsLink: 'Schooldetails.html?id=12' },
        { main: 'Medical Supplies', name: 'Glucometer', category: 'Medical Devices', usage: 'Blood Glucose Monitoring', detailsLink: 'MedDetails.html?id=1' },
        { main: 'Medical Supplies', name: 'Nebulizer',  category: 'Medical Devices', usage: 'Medication Inhalation', detailsLink: 'MedDetails.html?id=2' },
        { main: 'Medical Supplies', name: 'Wheelchair', category: 'Medical Equipment', usage: 'Mobility Assistance', detailsLink: 'MedDetails.html?id=3' },
        { main: 'Medical Supplies', name: 'Ventilator',  category: 'Medical Equipment', usage: 'Breathing Support', detailsLink: 'MedDetails.html?id=4' },
        { main: 'Medical Supplies', name: 'Antibiotics',  category: 'Medications', usage: 'Infection Treatment', detailsLink: 'MedDetails.html?id=5' },
        { main: 'Medical Supplies', name: 'Antidiabetic Medications',  category: 'Medications', usage: 'Blood Sugar Management', detailsLink: 'MedDetails.html?id=6' },
        { main: 'Blood Donations', hospital: 'El Salam Hospital', governate: 'Cairo', area: 'Nasr City', bloodRequested: 'A+', detailsLink: 'BloodDonDetails.html?id=1' },
        { main: 'Blood Donations', hospital: 'Maadi Military Hospital', governate: 'Cairo', area: 'Maadi', bloodRequested: 'B-', detailsLink: 'BloodDonDetails.html?id=2' },
        { main: 'Blood Donations', hospital: 'El Safwa Hospital', governate: 'Giza', area: 'Mohandessin', bloodRequested: 'O+', detailsLink: 'BloodDonDetails.html?id=3' },
        { main: 'Blood Donations', hospital: 'Misr International Hospital', governate: 'Giza', area: 'Zamalek', bloodRequested: 'AB-', detailsLink: 'BloodDonDetails.html?id=4' },
        { main: 'Blood Donations', hospital: 'Heliopolis Hospital', governate: 'Cairo', area: 'Heliopolis', bloodRequested: 'O-', detailsLink: 'BloodDonDetails.html?id=5' },
        { main: 'Blood Donations', hospital: 'Dar El Fouad Hospital', governate: 'Giza', area: 'Dokki', bloodRequested: 'A-', detailsLink: 'BloodDonDetails.html?id=6' },
        { main: 'Blood Donations', hospital: 'Agouza Hospital', governate: 'Giza', area: 'Agouza', bloodRequested: 'B+', detailsLink: 'BloodDonDetails.html?id=7' },
        { main: 'Blood Donations', hospital: 'New Cairo Hospital', governate: 'Cairo', area: 'New Cairo', bloodRequested: 'AB+', detailsLink: 'BloodDonDetails.html?id=8' },
        { main: 'Blood Donations', hospital: 'Shubra General Hospital', governate: 'Cairo', area: 'Shubra', bloodRequested: 'A+', detailsLink: 'BloodDonDetails.html?id=9' },
        { main: 'Blood Donations', hospital: 'Alexandria Main University Hospital', governate: 'Alexandria', area: 'Al Attarin', bloodRequested: 'O+', detailsLink: 'BloodDonDetails.html?id=10' }
        ];
        AllRequests = shuffle(AllRequests);
        sessionStorage.setItem('AllRequests', JSON.stringify(AllRequests));
    }

    // Function to populate subjects dropdown
    function populateCategory() {
        const category = ['All Categories', ...new Set(AllRequests.map(item => item.main))];
        populateDropdownOptions(category, categoryFilter);
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

    // Populate category
    populateCategory();

    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

    // Event listener for the filter button
    filterBtn.addEventListener('click', function() {
        const selectedOption = categoryFilter.value;

        if (selectedOption === 'Clothes') {
            
            window.location.href = 'Clothes.html'; //redirect 3ala clothes page
        } 
        if (selectedOption === 'Food'){
            window.location.href = 'Food.html';
        }
        if (selectedOption === 'Toys'){
            window.location.href = 'Toys.html';
        }
        if (selectedOption === 'School Supplies'){
            window.location.href = 'SchoolSuplies.html';  //redirect 3ala school page
        }
       
        if (selectedOption === 'Medical Supplies'){
            window.location.href = 'MedSupReq.html';
        }
       
        if (selectedOption === 'Blood Donations'){
            window.location.href = 'BloodDon.html';
        }
       
       
    });
    // Event listener for the search button
    searchBtn.addEventListener('click', function() {
        searchAllRequests(searchInput.value.trim());
    });

    // Function to update the grid
    function updateGrid(filteredData) {
        requestGrid.innerHTML = ''; // Clear the existing grid items
    
        filteredData.forEach(request => {
            // Create a grid item div
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item'); // Add the grid-item class
    
            // Create elements for brief info in the first column
            const briefInfo = document.createElement('div');
            briefInfo.classList.add('request-item'); // Optional class for styling
    
            // Populate different information based on the category
            if (request.main === 'Clothes') {
                const categorymainElement = document.createElement('h3');
                categorymainElement.textContent = `${request.main}`;

                const nameElement = document.createElement('p');
                nameElement.textContent =` Name: ${request.name}`;
    
                const genderElement = document.createElement('p');
                genderElement.textContent = `Gender: ${request.gender}`;
    
                const ageElement = document.createElement('p');
                ageElement.textContent = `Age: ${request.age}`;
    
                const seasonElement = document.createElement('p');
                seasonElement.textContent = `Season: ${request.season}`;
    
                briefInfo.appendChild(categorymainElement);
                briefInfo.appendChild(nameElement);
                briefInfo.appendChild(genderElement);
                briefInfo.appendChild(ageElement);
                briefInfo.appendChild(seasonElement);

            } else if (request.main === 'Food') {
                
                const categorymainElement = document.createElement('h3');
                categorymainElement.textContent = `${request.main}`;

                const nameElement = document.createElement('p');
                nameElement.textContent =` Name: ${request.name}`;
                
                const typeElement = document.createElement('p');
                typeElement.textContent = `Type: ${request.type}`;
                
                const quantityElement = document.createElement('p');
                quantityElement.textContent = `Quantity: ${request.quantity}`;
    
                briefInfo.appendChild(categorymainElement);
                briefInfo.appendChild(nameElement);
                briefInfo.appendChild(typeElement);
                briefInfo.appendChild(quantityElement);

            } else if (request.main === 'Toys') {
                const categorymainElement = document.createElement('h3');
                categorymainElement.textContent = `${request.main}`;

                const nameElement = document.createElement('p');
                nameElement.textContent = `Name: ${request.name}`;
    
                const categoryElement = document.createElement('p');
                categoryElement.textContent = `Category: ${request.category}`;
    
                const ageElement = document.createElement('p');
                ageElement.textContent = `Age: ${request.age}`;

                const quantityElement = document.createElement('p');
                quantityElement.textContent = `Category: ${request.quantity}`;

                briefInfo.appendChild(categorymainElement);
                briefInfo.appendChild(nameElement);
                briefInfo.appendChild(categoryElement);
                briefInfo.appendChild(ageElement);
                briefInfo.appendChild(quantityElement);

            } else if (request.main === 'School Supplies') {
                const categorymainElement = document.createElement('h3');
                categorymainElement.textContent = `${request.main}`;

                const itemElement = document.createElement('p');
                itemElement.textContent = `Item: ${request.item}`;
    
                const categoryElement = document.createElement('p');
                categoryElement.textContent = `Category: ${request.category}`;
    
                briefInfo.appendChild(categorymainElement);
                briefInfo.appendChild(itemElement);
                briefInfo.appendChild(categoryElement);

            } else if (request.main === 'Medical Supplies') {
                const categorymainElement = document.createElement('h3');
                categorymainElement.textContent = `${request.main}`;

                const nameElement = document.createElement('p');
                nameElement.textContent = `Name: ${request.name}`;
    
                const categoryElement = document.createElement('p');
                categoryElement.textContent = `Category: ${request.category}`;
    
                const usageElement = document.createElement('p');
                usageElement.textContent = `Usage: ${request.usage}`;
    
                briefInfo.appendChild(categorymainElement);
                briefInfo.appendChild(nameElement);
                briefInfo.appendChild(categoryElement);
                briefInfo.appendChild(usageElement);

            } else if (request.main === 'Blood Donations') {
                const categorymainElement = document.createElement('h3');
                categorymainElement.textContent = `${request.main}`;

                const hospitalElement = document.createElement('p');
                hospitalElement.textContent = `Hospital: ${request.hospital}`;
    
                const governateElement = document.createElement('p');
                governateElement.textContent = `Governate: ${request.governate}`;
    
                const areaElement = document.createElement('p');
                areaElement.textContent = `Area: ${request.area}`;
    
                const bloodRequestedElement = document.createElement('p');
                bloodRequestedElement.textContent =` Blood Type Requested: ${request.bloodRequested}`;
    
                briefInfo.appendChild(categorymainElement);
                briefInfo.appendChild(hospitalElement);
                briefInfo.appendChild(governateElement);
                briefInfo.appendChild(areaElement);
                briefInfo.appendChild(bloodRequestedElement);
            }
    
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
            requestGrid.appendChild(gridItem);
        });
    }    

    // Function to search all requests
    // Function to search all requests by category
function searchAllRequests(category) {
    const filteredData = AllRequests.filter(request => {
        return (
            request.main.toLowerCase() === category.toLowerCase()
        );
    });

    updateGrid(filteredData);
}

    // Initial population of the grid
    updateGrid(AllRequests);
});
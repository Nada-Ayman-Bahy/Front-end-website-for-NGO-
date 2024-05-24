document.addEventListener('DOMContentLoaded', function() {
    const donatedItemsGrid = document.getElementById('donatedItemsGrid');

    // Sample data of donated items with donor details
    const donatedItems = [
        { name: 'Clothes Donations', donor: 'John Doe' },
        { name: 'Medical Supplies Donations', donor: 'Jane Smith' },
        { name: 'Food Donations', donor: 'Michael Johnson' },
        { name: 'Blood Donations', donor: 'Emily Brown' },
        { name: 'Toys Supplies Donations', donor: 'David Wilson' },
        { name: 'School Supplies Donations', donor: 'Emma Taylor' }
        // Add more items here if needed
    ];

    // Populate the grid with donated items
    donatedItems.forEach(item => {
        const itemContainer = document.createElement('div');
        itemContainer.classList.add('donated-item');

        const itemName = document.createElement('span');
        itemName.textContent = item.name;

        const donorDetailsButton = document.createElement('button');
        donorDetailsButton.textContent = 'View Donor Details';
        donorDetailsButton.classList.add('donor-details-btn');
        donorDetailsButton.addEventListener('click', () => {
            // Redirect to page with donor details
            window.location.href = `DetailsDonor.html?donor=${encodeURIComponent(item.donor)}`;
        });

        const dropoffButton = document.createElement('button');
        dropoffButton.textContent = 'Select Drop-off Time';
        dropoffButton.classList.add('dropoff-btn');
        dropoffButton.addEventListener('click', () => {
            // Redirect to drop-off time selection page
            window.location.href = 'dropoff.html';
        });

        const buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.appendChild(donorDetailsButton);
        buttonContainer.appendChild(dropoffButton);

        itemContainer.appendChild(itemName);
        itemContainer.appendChild(buttonContainer);
        donatedItemsGrid.appendChild(itemContainer);
    });
});

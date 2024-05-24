document.addEventListener('DOMContentLoaded', function() {
    const donorDetailsContainer = document.getElementById('donorDetails');

    // Get donor details from URL query parameter
    const urlParams = new URLSearchParams(window.location.search);
    const donorName = urlParams.get('donor');

    // Sample donor data (dummy data)
    const donorData = {
        'John Doe': {
            'Name': 'John Doe',
            'Email': 'john@example.com',
            'Phone': '+1234567890',
            'Address': '123 Main St, City, Country'
        },
        'Jane Smith': {
            'Name': 'Jane Smith',
            'Email': 'jane@example.com',
            'Phone': '+1987654321',
            'Address': '456 Elm St, Town, Country'
        },
        'Michael Johnson': {
            'Name': 'Michael Johnson',
            'Email': 'michael@example.com',
            'Phone': '+1122334455',
            'Address': '789 Oak St, Village, Country'
        },
        'Emily Brown': {
            'Name': 'Emily Brown',
            'Email': 'emily@example.com',
            'Phone': '+9988776655',
            'Address': '321 Pine St, Hamlet, Country'
        },
        'David Wilson': {
            'Name': 'David Wilson',
            'Email': 'david@example.com',
            'Phone': '+5544332211',
            'Address': '987 Cedar St, Borough, Country'
        },
        'Emma Taylor': {
            'Name': 'Emma Taylor',
            'Email': 'emma@example.com',
            'Phone': '+6677889900',
            'Address': '654 Maple St, District, Country'
        }
    };

    // Check if donor name exists in the donor data
    if (donorData.hasOwnProperty(donorName)) {
        const details = donorData[donorName];

        // Populate donor details
        Object.keys(details).forEach(key => {
            const detailItem = document.createElement('div');
            detailItem.classList.add('detail-item');

            const label = document.createElement('span');
            label.textContent = `${key}:`;

            const value = document.createElement('span');
            value.textContent = details[key];

            detailItem.appendChild(label);
            detailItem.appendChild(value);
            donorDetailsContainer.appendChild(detailItem);
        });
    } else {
        // Display a message if donor details are not found
        const message = document.createElement('p');
        message.textContent = 'Donor details not found.';
        donorDetailsContainer.appendChild(message);
    }
});
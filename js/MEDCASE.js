document.addEventListener('DOMContentLoaded', function() {

    function getItemDetails() {
        // Parse the ID from the URL
        const urlParams = new URLSearchParams(window.location.search);
        const itemId = urlParams.get('id');
    
        // Sample data (replace with your actual data retrieval logic)
        const medicalCases = [
            {
                caseId: 1,
                medicalSpecialty: 'Cardiology',
                organizationName: 'Heart Health Clinic',
                description: 'Patient is diagnosed with coronary artery disease.',
                patientName: "John Doe",
                age: 45,
                gender: 'Male',
                weight: '80 kg',
                location: 'Egypt, Cairo',
                address: '123 Main Street, City, Country'
            },
            {
                caseId: 2,
                medicalSpecialty: 'Oncology',
                organizationName: 'Cancer Care Center',
                description: 'Patient is diagnosed with stage 3 breast cancer.',
                patientName: 'Jane Smith',
                age: 38,
                gender: 'Female',
                weight: '65 kg',
                location: 'Egypt,Giza',
                address: '456 Oak Avenue, City, Country'
            },
        
                {
                    "caseId": 3,
                    "medicalSpecialty": "Pediatrics",
                    "organizationName": "Children's_Hospital",
                    "description": "Patient is a 6-year-old with symptoms of respiratory infection.",
                    "patientName": "John Doe",
                    "age": 6,
                    "gender": "Male",
                    "weight": "20 kg",
                    "location": "Egypt, Cairo",
                    "address": "123 Maple Street, City, Country"
                },
                {
                    "caseId": 4,
                    "medicalSpecialty": "Neurology",
                    "organizationName": "Brain_Health_Institute",
                    "description": "Patient is suffering from migraines and dizziness.",
                    "patientName": "Emily Johnson",
                    "age": 42,
                    "gender": "Female",
                    "weight": "55 kg",
                    "location": "Egypt, Alexandria",
                    "address": "789 Elm Avenue, City, Country"
                },
                {
                    "caseId": 5,
                    "medicalSpecialty": "Orthopedics",
                    "organizationName": "Bone_and_Joint_Clinic",
                    "description": "Patient has a fracture in the right arm.",
                    "patientName": "Michael Brown",
                    "age": 25,
                    "gender": "Male",
                    "weight": "75 kg",
                    "location": "Egypt, Luxor",
                    "address": "456 Oak Avenue, City, Country"
                }
            
            
            // Other medical cases go here
        ];

        // Find the item with the matching ID
        const selectedItem = medicalCases.find(item => item.caseId === parseInt(itemId));

        if (selectedItem) {
            // Update HTML elements with item details
            document.getElementById('PatientName').textContent = selectedItem.patientName;
            document.getElementById('age').textContent = selectedItem.age;
            document.getElementById('gen').textContent = selectedItem.gender;
            document.getElementById('wei').textContent = selectedItem.weight;
            document.getElementById('loc').textContent = selectedItem.location;
            document.getElementById('add').textContent = selectedItem.address;
            document.getElementById('org').textContent = selectedItem.organizationName;
            document.getElementById('spe').textContent = selectedItem.medicalSpecialty;
            document.getElementById('des').textContent = selectedItem.description;
        } else {
            // Handle case where item with specified ID is not found
            console.error('Item not found.');
        }
    }
    
    // Initialize Leaflet map
    const map = L.map('map').setView([26.8206, 30.8025], 6);

    // Add OpenStreetMap tiles to the map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Add a marker representing your location
    L.marker([26.8206, 30.8025]).addTo(map)
        .bindPopup('Your Location')
        .openPopup();

    // Call getItemDetails when the page loads
    getItemDetails();

    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });


    // Event listener for fulfilling medical case button
    document.getElementById('fulfillMedicalCaseBtn').addEventListener('click', function() {
        const fulfillmentConfirmation = document.getElementById('fulfillMedicalCaseConfirmation');
        fulfillmentConfirmation.style.display = 'block';
    });

    // Event listener for confirming fulfillment
    document.getElementById('confirmFulfillMedicalCaseBtn').addEventListener('click', function() {
        const fulfillmentConfirmation = document.getElementById('fulfillMedicalCaseConfirmation');
        const fulfillmentMessage = document.getElementById('fulfillmentMessage');
        // Display fulfillment message
        fulfillmentMessage.textContent = 'Medical case fulfilled!';
        fulfillmentMessage.style.display = 'block';

        // Hide confirmation dialog
        fulfillmentConfirmation.style.display = 'none';
    });

    // Event listener for canceling fulfillment
    document.getElementById('cancelFulfillMedicalCaseBtn').addEventListener('click', function() {
        const fulfillmentConfirmation = document.getElementById('fulfillMedicalCaseConfirmation');
        fulfillmentConfirmation.style.display = 'none';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const clothingGrid = document.getElementById('MedicalGrid');
    const Speciality = document.getElementById('Speciality');
    const organization_input = document.getElementById('organization_input');
    const Area = document.getElementById('Area');
    const governorate = document.getElementById('governorate');
    const medicalrequest = [
        {
            "caseId": 1,
            "medicalSpecialty": "Cardiology",
            "organizationName": "Heart_Health_Clinic",
            "area": "Downtown",
            "governorate": "Capital_City",
            detailsLink: 'MedCase.html?id=1'
        },
        {
            "caseId": 2,
            "medicalSpecialty": "Oncology",
            "organizationName": "Cancer_Care_Center",
            "area": "Suburb",
            "governorate": "Northern_Region",
            detailsLink: 'MedCase.html?id=2'
        },
        {
            "caseId": 3,
            "medicalSpecialty": "Pediatrics",
            "organizationName": "Children's_Hospital",
            "area": "City_Center",
            "governorate": "Central_Province",
            detailsLink: 'MedCase.html?id=3'

        },
        {
            "caseId": 4,
            "medicalSpecialty": "Neurology",
            "organizationName": "Brain_Health_Institute",
            "area": "Coastal_Area",
            "governorate": "Southern_Region",
            detailsLink: 'MedCase.html?id=4'

        },
        {
            "caseId": 5,
            "medicalSpecialty": "Orthopedics",
            "organizationName": "Bone_and_Joint_Clinic",
            "area": "Rural",
            "governorate": "Eastern_Province",
            detailsLink: 'MedCase.html?id=5'

        }
    ];

    function filtermedicalspec(medicalSpecialty) {
        return medicalrequest.filter(request => request.medicalSpecialty.toLowerCase() === medicalSpecialty.toLowerCase());
    }

    function filtermedicalorg(organizationName) {
        return medicalrequest.filter(request => request.organizationName.toLowerCase() === organizationName.toLowerCase());
    }

    function filtermedicalarea(area) {
        return medicalrequest.filter(request => request.area.toLowerCase() === area.toLowerCase());
    }

    function filtermedicalgov(governorate) {
        return medicalrequest.filter(request => request.governorate.toLowerCase() === governorate.toLowerCase());
    }

    function updateGrid(filteredData) {
        clothingGrid.innerHTML = '';

        filteredData.forEach(request => {
            const gridItem = document.createElement('div');
            gridItem.classList.add('grid-item');

            const briefInfo = document.createElement('div');
            briefInfo.classList.add('clothing-item');

            const nameElement = document.createElement('h3');
            nameElement.textContent = request.medicalSpecialty;

            const categoryElement = document.createElement('p');
            categoryElement.textContent = request.organizationName;

            const genderElement = document.createElement('p');
            genderElement.textContent = request.area;

            const seasonElement = document.createElement('p');
            seasonElement.textContent = request.governorate;

            briefInfo.appendChild(nameElement);
            briefInfo.appendChild(categoryElement);
            briefInfo.appendChild(genderElement);
            briefInfo.appendChild(seasonElement);

            gridItem.appendChild(briefInfo);

            const detailsLink = document.createElement('a');
            detailsLink.textContent = 'See Details';
            detailsLink.href = request.detailsLink; // Link to details page
            detailsLink.classList.add('details-link'); // Optional class for styling
            // Add event listener to details link for item details
            detailsLink.addEventListener('click', function(event) {
                event.preventDefault(); // Prevent default link behavior
                redirectToDetails(request.detailsLink); // Redirect to details page
            });

            gridItem.appendChild(detailsLink);

            clothingGrid.appendChild(gridItem);
        });
    }

    document.getElementById('filterBtn2').addEventListener('click', function() {
        const speciality = Speciality.value.trim();
        const org = organization_input.value.trim();
        const area = Area.value.trim();
        const gov = governorate.value.trim();

        let filteredData = medicalrequest;

        if (speciality !== '') {
            filteredData = filtermedicalspec(speciality);
        }

        if (org !== '') {
            filteredData = filtermedicalorg(org);
        }

        if (area !== '') {
            filteredData = filtermedicalarea(area);
        }

        if (gov !== '') {
            filteredData = filtermedicalgov(gov);
        }

        updateGrid(filteredData);

        if (filteredData.length === 0) {
            const noRequestsMessage = document.createElement('div');
            noRequestsMessage.textContent = 'No requests match the selected criteria.';
            clothingGrid.appendChild(noRequestsMessage);
        }
    });

    updateGrid(medicalrequest);

    function redirectToDetails(detailsUrl) {
        window.location.href = detailsUrl; // Redirect to details URL
    }
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});

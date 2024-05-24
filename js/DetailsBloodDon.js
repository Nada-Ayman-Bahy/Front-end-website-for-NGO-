document.addEventListener('DOMContentLoaded', function(){
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    // Sample data for blood donation requests (replace with your actual data)
    const BloodDonationRequests = [
        { id: '1', patientName: 'John Doe', bloodType: 'A+', hospitalName: 'El Salam Hospital', area: 'Nasr City', governorate: 'Cairo', hospitalAddress: '456 Salah Salem St, Nasr City, Cairo' },
        { id: '2', patientName: 'Jane Smith', bloodType: 'B-', hospitalName: 'Maadi Military Hospital', area: 'Maadi', governorate: 'Cairo', hospitalAddress: '789 El Nasr St, Maadi, Cairo' },
        { id: '3', patientName: 'Michael Johnson', bloodType: 'O+', hospitalName: 'El Safwa Hospital', area: 'Mohandessin', governorate: 'Giza', hospitalAddress: '123 Gamal Abdel Nasser St, Mohandessin, Giza' },
        { id: '4', patientName: 'Sarah Adams', bloodType: 'AB-', hospitalName: 'Misr International Hospital', area: 'Zamalek', governorate: 'Giza', hospitalAddress: '10 Nile Corniche, Zamalek' },
        { id: '5', patientName: 'Ahmed Mohamed', bloodType: 'O-', hospitalName: 'Heliopolis Hospital', area: 'Heliopolis', governorate: 'Cairo', hospitalAddress: '15 Abbas El Akkad St, Heliopolis' },
        { id: '6', patientName: 'Fatma Ali', bloodType: 'A-', hospitalName: 'Dar El Fouad Hospital', area: 'Dokki', governorate: 'Giza', hospitalAddress: '5 Ahmed El Sawy St, Dokki' },
        { id: '7', patientName: 'Mohamed Hassan', bloodType: 'B+', hospitalName: 'Agouza Hospital', area: 'Agouza', governorate: 'Giza', hospitalAddress: '20 Abdel Khalek Tharwat St, Agouza' },
        { id: '8', patientName: 'Nour Hussein', bloodType: 'AB+', hospitalName: 'New Cairo Hospital', area: 'New Cairo', governorate: 'Cairo', hospitalAddress: '30 Central Axis St, New Cairo' },
        { id: '9', patientName: 'Ali Amer', bloodType: 'A+', hospitalName: 'Shubra General Hospital', area: 'Shubra', governorate: 'Cairo', hospitalAddress: '40 Shubra St, Shubra' },
        { id: '10', patientName: 'Laila Adel', bloodType: 'O+', hospitalName: 'Alexandria Main University Hospital', area: 'Al Attarin', governorate: 'Alexandria', hospitalAddress: '50 Tariq El Horreya St, Al Attarin' }
    ];

    // Find the blood donation request with the given ID
    const bloodDonation = BloodDonationRequests.find(item => item.id === id);

    // Display blood donation details or error message
    if (bloodDonation) {
        document.getElementById('patientName').textContent = bloodDonation.patientName;
        document.getElementById('bloodType').textContent = bloodDonation.bloodType;
        document.getElementById('hospitalName').textContent = bloodDonation.hospitalName;
        document.getElementById('area').textContent = bloodDonation.area;
        document.getElementById('governorate').textContent = bloodDonation.governorate;
        document.getElementById('hospitalAddress').textContent = bloodDonation.hospitalAddress;
    } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "Blood donation request not found.";
        errorMessage.style.color = "red";
        document.body.appendChild(errorMessage);
    }

    // Event listener for the back button
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

    // Event listener for the donation button
    document.getElementById('donateBtn').addEventListener('click', function() {
        // Display donation message
        alert('Thank you for your donation! Your support saves lives.');

        // You can optionally perform other actions here, like sending donation data to the server.
    });
});
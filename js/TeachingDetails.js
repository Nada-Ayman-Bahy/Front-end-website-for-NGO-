document.addEventListener('DOMContentLoaded', function(){
    const numStudentsElement = document.getElementById('numStudents');
    const addressElement = document.getElementById('address');
    const subjectsElement = document.getElementById('subjects');
    const fulfillTeachingCaseBtn = document.getElementById('fulfillTeachingCaseBtn');
    const fulfillmentConfirmation = document.getElementById('fulfillTeachingCaseConfirmation');
    const fulfillmentMessage = document.getElementById('fulfillmentMessage'); // New element to display fulfillment message

    // Sample data for teaching post details (replace with your actual data)
    const teachingPostDetails = [
        { id: 1, numStudents: '30', address: 'Villa 123, Street 456, Fifth Settlement, New Cairo, Cairo, Egypt', subject: 'Mathematics' },
            { id: 2, numStudents: '25', address: 'Apartment 101, Building XYZ, Sheikh Zayed City, Giza, Egypt', subject: 'Science' },
            { id: 3, numStudents: '45', address: 'House 789, El Maamora District, Alexandria, Egypt', subject: 'English' },
            { id: 4, numStudents: '20', address: 'Apartment 201, Building ABC, Heliopolis, Cairo, Egypt', subject: 'Arabic' },
            { id: 5, numStudents: '35', address: 'Flat 303, Al Rehab City, Mohandessin, Giza, Egypt', subject: 'Physics' },
            { id: 6, numStudents: '40', address: 'Villa 456, Nasr City, Cairo, Egypt', subject: 'Chemistry' },
            { id: 7, numStudents: '28', address: 'Apartment 505, Agouza District, Giza, Egypt', subject: 'Biology' },
            { id: 8, numStudents: '32', address: 'House 101, Street XYZ, Zamalek, Cairo, Egypt', subject: 'History' },
            { id: 9, numStudents: '22', address: 'Flat 707, Building LMN, Maadi, Cairo, Egypt', subject: 'Geography' }
    ];

    // Display teaching post details
    const selectedPostId = parseInt(window.location.search.substring(1).split('=')[1]); // Get the post ID from URL query parameter
    const selectedPost = teachingPostDetails.find(post => post.id === selectedPostId); // Find the selected post by ID

    if (selectedPost) {
        numStudentsElement.textContent = selectedPost.numStudents;
        addressElement.textContent = selectedPost.address;
        subjectsElement.textContent = selectedPost.subject;
    }

    // Event listener for fulfill teaching case button
    fulfillTeachingCaseBtn.addEventListener('click', function() {
        fulfillmentConfirmation.style.display = 'block';
    });

    // Event listener for confirming fulfillment
    document.getElementById('confirmFulfillTeachingCaseBtn').addEventListener('click', function() {
        // Display fulfillment message
        fulfillmentMessage.textContent = 'Teaching case fulfilled!';
        fulfillmentMessage.style.display = 'block';

        // Hide confirmation dialog
        fulfillmentConfirmation.style.display = 'none';
    });

    // Event listener for canceling fulfillment
    document.getElementById('cancelFulfillTeachingCaseBtn').addEventListener('click', function() {
        fulfillmentConfirmation.style.display = 'none';
    });
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});
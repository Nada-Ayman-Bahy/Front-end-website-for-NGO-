 // Retrieve data from local storage
 const userData = JSON.parse(localStorage.getItem('registrationData'));

 // Display user data
 const userDataContainer = document.getElementById('userData');
 if (userData) {
   for (const [key, value] of Object.entries(userData)) {
     userDataContainer.innerHTML += <p><strong>${key}:</strong> ${value}</p>;
   }
 } else {
   userDataContainer.innerHTML = "<p>No data available</p>";
 }

 function redirectToUpdate() {
   window.location.href = 'update_profile.html';
 }

 function redirectToDelete() {
   window.location.href = 'delete_data.html';
 }
 document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default link behavior
  history.back(); // Go back to the previous page
});

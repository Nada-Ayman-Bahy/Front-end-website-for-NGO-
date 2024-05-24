  // Retrieve existing data from local storage
  const userData = JSON.parse(localStorage.getItem('registrationData'));

  // Prefill the form with existing data
  document.getElementById('firstname').value = userData.firstName 
  document.getElementById('lastname').value = userData.lastName || '';
  document.getElementById('email').value = userData.email || '';
  document.getElementById('password').value = userData.password || '';
  document.getElementById('address').value = userData.address || '';
  document.getElementById('area').value = userData.area || '';
  document.getElementById('governorate').value = userData.governorate || '';
  document.getElementById('contact').value = userData.contact || '';

  // Handle form submission
  const deleteForm = document.getElementById('deleteForm');
  deleteForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get updated form data
    const updatedData = {
      firstName: document.getElementById('firstname').value.trim() || '',
      lastName: document.getElementById('lastname').value.trim() || '',
      email: document.getElementById('email').value.trim() || '',
      password: document.getElementById('password').value.trim() || '',
      address: document.getElementById('address').value.trim() || '',
      area: document.getElementById('area').value.trim() || '',
      governorate: document.getElementById('governorate').value.trim() || '',
      contact: document.getElementById('contact').value.trim() || '',
    };

    // Update data in local storage
    localStorage.setItem('registrationData', JSON.stringify(updatedData));

    // Redirect to donor profile page
    window.location.href = 'donor_profile.html';
    
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default link behavior
      history.back(); // Go back to the previous page
  });


  });
  // Retrieve existing data from local storage
  const userData = JSON.parse(localStorage.getItem('registrationData'));

  // Prefill the form with existing data
  document.getElementById('firstname').value = userData.firstName;
  document.getElementById('lastname').value = userData.lastName;
  document.getElementById('email').value = userData.email;
  document.getElementById('password').value = userData.password;
  document.getElementById('gender').value = userData.gender;
  document.getElementById('address').value = userData.address;
  document.getElementById('area').value = userData.area;
  document.getElementById('governorate').value = userData.governorate;
  document.getElementById('contact').value = userData.contact;

  // Handle form submission
  const updateForm = document.getElementById('updateForm');
  updateForm.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get updated form data
    const updatedData = {
      firstName: document.getElementById('firstname').value,
      lastName: document.getElementById('lastname').value,
      email: document.getElementById('email').value,
      password: document.getElementById('password').value,
      gender: document.getElementById('gender').value,
      address: document.getElementById('address').value,
      area: document.getElementById('area').value,
      governorate: document.getElementById('governorate').value,
      contact: document.getElementById('contact').value,
    };

    // Update data in local storage
    localStorage.setItem('registrationData', JSON.stringify(updatedData));

    // Redirect to donor profile page
    window.location.href = 'donor_profile.html';
  });
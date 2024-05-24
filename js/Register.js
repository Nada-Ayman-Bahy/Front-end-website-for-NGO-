const form = document.getElementById('registrationForm');
    const firstNameInput = document.getElementById('firstname');
    const lastNameInput = document.getElementById('lastname');
    const genderInput = document.getElementById('gender');
    const emailInput = document.getElementById('email');
    const areaInput = document.getElementById('area');
    const passwordInput= document.getElementById('password');// Include password field
    const addressInput= document.getElementById('address');
    const governorateInput = document.getElementById('governorate');
    const contactInput = document.getElementById('contact');
  
    form.addEventListener('submit', function(event) {
      if (!isValidName(firstNameInput.value)) {
        alert('Please enter a valid first name (only letters allowed).');
        event.preventDefault();
        return;
      }
      if (!isValidName(lastNameInput.value)) {
        alert('Please enter a valid last name (only letters allowed).');
        event.preventDefault();
        return;
      }
      if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return;
      }
      if (!isValidName(governorateInput.value)) {
        alert('Please enter a valid governorate (only letters allowed).');
        event.preventDefault();
        return;
      }
      if (!isValidContactNumber(contactInput.value)) {
        alert('Please enter a valid contact number (only numbers allowed).');
        event.preventDefault();
        return;
      }
  
      // If all validations pass, prevent the default form submission
      event.preventDefault();
  
      // Get form data
      const formData = {
        firstName: firstNameInput.value,
        lastName: lastNameInput.value,
        email: emailInput.value,
        password: passwordInput.value,
        gender:genderInput.value,
        address: addressInput.value,
        area: areaInput.value,
        governorate: governorateInput.value,
        contact: contactInput.value,
      };

      // Save data to local storage
      localStorage.setItem('registrationData', JSON.stringify(formData));

      // Redirect to donor profile page
      window.location.href = 'donor_profile.html';
    });
  
    function isValidName(name) {
      return /^[a-zA-Z]+$/.test(name);
    }
    function isValidEmail(email) {
      return /\S+@\S+\.\S+/.test(email);
    }
  
    function isValidContactNumber(number) {
      return /^\d+$/.test(number);
    }
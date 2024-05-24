document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.getElementById('submitbutton');
    
    submitButton.addEventListener('click', function(event) {
        // Get the values of the input fields
        var subject = document.getElementById('Subject').value.trim();
        var probonoClasses = document.getElementById('probonoClasses').value.trim();
        var privProbonoStudents = document.getElementById('privProbonoStudents').value.trim();

        if (!subject || !probonoClasses || !privProbonoStudents) {
            // Display an alert message if any of the fields are empty or null
            alert('Please fill in all fields.');
            // Prevent form submission
            event.preventDefault();
        } else {
            alert("You have successfully submitted!");
        }
    });
});
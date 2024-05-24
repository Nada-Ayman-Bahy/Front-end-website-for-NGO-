document.addEventListener('DOMContentLoaded', function() {
    const categoryFilter = document.getElementById('category');
    const filterBtn = document.getElementById('filterBtn');

    // Event listener for filter button click
    filterBtn.addEventListener('click', function() {
        const selectedOption = categoryFilter.value;

        if (selectedOption === 'Clothing') {
            
            window.location.href = 'Clothes.html'; //redirect 3ala clothes page
        } 
        if (selectedOption === 'Food'){
            window.location.href = 'Food.html';
        }
        if (selectedOption === 'Toys'){
            window.location.href = 'Toys.html';
        }
        if (selectedOption === 'School'){
            window.location.href = 'SchoolSuplies.html';  //redirect 3ala school page
        }
       
        if (selectedOption === 'Medical'){
            window.location.href = 'MedSupReq.html';
        }
       
        if (selectedOption === 'BloodDonations'){
            window.location.href = 'BloodDon.html';
        }
       
       
    });


});


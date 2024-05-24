(function ($) {
    "use strict";

    /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        var check = true;

        for(var i = 0; i < input.length; i++) {
            if(validate(input[i]) == false) {
                showValidate(input[i]);
                check = false;
            }
        }

        if (check) {
            var username = $('[name="username"]').val().trim(); // Use name selector
            var password = $('[name="pass"]').val().trim(); // Use name selector

            if(username === 'Sarah_John' && password === '123'){
                // Populate user data
                const userData = {
                firstName: 'Sara',
                lastName: 'John',
                password: '123',
                gender: 'Female',
                email: 'sara@gmail.com',
                address: 'Pyramids',
                area: 'New Cairo',
                governorate: 'Cairo',
                contact: '0462',
                role:'Doctor'
            };
                
                // Save data to local storage
                localStorage.setItem('registrationData', JSON.stringify(userData));

                // Redirect to donor profile
                window.location.href = 'dashboardDoctor.html';
            }else if(username === 'Wael_Ahmed' && password === '456'){
                // Populate user data
                const userData = {
                firstName: 'Wael',
                lastName: 'Ahmed',
                password: '456',
                gender: 'Male',
                email: 'wael@gmail.com',
                address: '123 south',
                area: 'maadi',
                governorate: 'Cairo',
                contact: '110',
                role:'Teacher'
            };
                
                // Save data to local storage
                localStorage.setItem('registrationData', JSON.stringify(userData));

                // Redirect to donor profile
                window.location.href = 'dashboardTeacher.html';

        }else if(username === 'Mariam_Sameh' && password === '789'){
                // Populate user data
                const userData = {
                firstName: 'Mariam',
                lastName: 'Sameh',
                password: '789',
                gender: 'Female',
                email: 'mariam@gmail.com',
                address: 'Nile',
                area: 'mokatam',
                governorate: 'Cairo',
                contact: '100',
                role:'Regular_Donor'
            };
                
                // Save data to local storage
                localStorage.setItem('registrationData', JSON.stringify(userData));

                // Redirect to donor profile
                window.location.href = 'dashboard.html';
        
        }
        else if(username === 'Salma_Sakr' && password === '000'){
            // Populate user data
            const userData = {
            firstName: 'Salma',
            lastName: 'Sakr',
            password: '000',
            gender: 'Female',
            email: 'salma@gmail.com',
            address: 'zamalek123',
            area: 'zamalek',
            governorate: 'Cairo',
            contact: '099',
            organization_name:'resala',
			organization_type:'f&c donations',
			organization_address:'nasr_city'
        }
        localStorage.setItem('registrationData', JSON.stringify(userData));

                    // Redirect to donor profile
                    window.location.href = 'pickup.html';
    }else if(username === 'admin' && password === 'admin'){
        // Populate user data

        // Redirect to donor profile
        window.location.href = 'org_dash.html';

}
        
        else {
                alert('Incorrect username or password.');
            }
        }
    });

    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
            hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    /*==================================================================
    [ Show pass ]*/
    var showPass = 0;
    $('.btn-show-pass').on('click', function(){
        if(showPass == 0) {
            $(this).next('input').attr('type','text');
            $(this).addClass('active');
            showPass = 1;
        }
        else {
            $(this).next('input').attr('type','password');
            $(this).removeClass('active');
            showPass = 0;
        }
        
    });

})(jQuery);
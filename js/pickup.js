document.addEventListener('DOMContentLoaded', function() {
    const schedulePickupBtn = document.getElementById('schedulePickupBtn');
    const etaContainer = document.getElementById('etaContainer');
    const etaElement = document.getElementById('eta');
    const etaTimeElement = document.getElementById('etaTime');
    const arrivalMessage = document.getElementById('arrivalMessage');
    const arrivalMessageText = document.getElementById('arrivalMessageText');
    const vehicleSelect = document.getElementById('vehicleSelect');
    let intervalId; // Variable to hold the interval ID

    // Function to calculate estimated time of arrival
    function calculateETA(pickupTime) {
        const currentTime = new Date();
        const pickupDateTime = new Date(pickupTime);
        const millisecondsToETA = pickupDateTime - currentTime;

        // Convert milliseconds to hours, minutes, and seconds
        const hours = Math.floor(millisecondsToETA / (1000 * 60 * 60));
        const minutes = Math.floor((millisecondsToETA % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((millisecondsToETA % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
    }

    // Function to play notification sound
    function playNotificationSound() {
        const audio = new Audio('Audio/DriverArrived.mp3');
        audio.play();
    }

    // Function to format the remaining time as HH:MM:SS
    function formatTime(hours, minutes, seconds) {
        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }

    // Function to update the countdown every second
    function updateCountdown(pickupTime) {
        const { hours, minutes, seconds } = calculateETA(pickupTime);

        if (hours < 0 || minutes < 0 || seconds < 0) {
            clearInterval(intervalId);
            etaContainer.style.display = 'none';
            arrivalMessageText.textContent = '';
            alert("Pickup time has passed. Please choose another time.");
            return;
        }

        const remainingTime = formatTime(hours, minutes, seconds);
        etaElement.textContent = remainingTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
            const selectedVehicle = vehicleSelect.options[vehicleSelect.selectedIndex].text;
            etaContainer.style.display = 'none';
            const arrivalTime = new Date();
            arrivalTime.setSeconds(arrivalTime.getSeconds() - seconds);
            arrivalMessageText.textContent = `${selectedVehicle} driver has arrived at ${arrivalTime.toLocaleTimeString()}`;
            arrivalMessage.style.display = 'block';
            playNotificationSound();
            clearInterval(intervalId);
            // Add a line thanking the user for their donation
            const donationThankYou = document.createElement('p');
            donationThankYou.textContent = 'Thank you for your donation!';
            arrivalMessage.appendChild(donationThankYou)
        } else {
            const eta = new Date();
            eta.setHours(eta.getHours() + hours);
            eta.setMinutes(eta.getMinutes() + minutes);
            eta.setSeconds(eta.getSeconds() + seconds);
            etaTimeElement.textContent = `ETA: ${eta.toLocaleTimeString()}`;
        }
    }

    // Event listener for schedule pickup button
    schedulePickupBtn.addEventListener('click', function() {
        const pickupTime = document.getElementById('pickupTime').value;
        const selectedVehicle = vehicleSelect.value;

        if (!pickupTime) {
            alert("Please select a pickup time.");
            return;
        }

        if (selectedVehicle === "choose") {
            alert("Please choose a vehicle.");
            return;
        }

        etaContainer.style.display = 'block';

        // Update countdown every second
        updateCountdown(pickupTime);
        intervalId = setInterval(() => {
            updateCountdown(pickupTime);
        }, 1000);
    });
    document.getElementById('backToRequestsBtn').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        history.back(); // Go back to the previous page
    });

});
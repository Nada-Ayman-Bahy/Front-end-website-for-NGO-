document.addEventListener('DOMContentLoaded', function() {
    const scheduledDropoffBtn = document.getElementById('scheduledDropoffBtn');
    const etaContainer = document.getElementById('etaContainer');
    const etaElement = document.getElementById('eta');
    const etaTimeElement = document.getElementById('etaTime');
    const arrivalMessage = document.getElementById('arrivalMessage');
    const arrivalMessageText = document.getElementById('arrivalMessageText');
    const vehicleSelect = document.getElementById('vehicleSelect');
    let intervalId; // Variable to hold the interval ID

    // Function to calculate estimated time of arrival
    function calculateETA(dropoffTime) {
        const currentTime = new Date();
        const dropoffDateTime = new Date(dropoffTime);
        const millisecondsToETA = dropoffDateTime - currentTime;

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
    function updateCountdown(dropoffTime) {
        const { hours, minutes, seconds } = calculateETA(dropoffTime);

        if (hours < 0 || minutes < 0 || seconds < 0) {
            clearInterval(intervalId);
            etaContainer.style.display = 'none';
            arrivalMessageText.textContent = '';
            alert("Dropoff time has passed. Please choose another time.");
            return;
        }

        const remainingTime = formatTime(hours, minutes, seconds);
        etaElement.textContent = remainingTime;

        if (hours === 0 && minutes === 0 && seconds === 0) {
            etaContainer.style.display = 'none';
            const arrivalTime = new Date();
            arrivalTime.setSeconds(arrivalTime.getSeconds() - seconds);
            arrivalMessageText.textContent = `Donations are received by the organization at ${arrivalTime.toLocaleTimeString()}`;
            arrivalMessage.style.display = 'block';
            playNotificationSound();
            clearInterval(intervalId);
        } else {
            const eta = new Date();
            eta.setHours(eta.getHours() + hours);
            eta.setMinutes(eta.getMinutes() + minutes);
            eta.setSeconds(eta.getSeconds() + seconds);
            etaTimeElement.textContent = `ETA: ${eta.toLocaleTimeString()}`;
        }
    }

    // Event listener for schedule dropoff button
    scheduledDropoffBtn.addEventListener('click', function() {
        const dropoffTime = document.getElementById('dropoffTime').value;

        if (!dropoffTime) {
            alert("Please select a dropoff time.");
            return;
        }

        etaContainer.style.display = 'block';

        // Update countdown every second
        updateCountdown(dropoffTime);
        intervalId = setInterval(() => {
            updateCountdown(dropoffTime);
        }, 1000);
    });
});

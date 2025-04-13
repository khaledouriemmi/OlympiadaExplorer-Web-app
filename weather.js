document.addEventListener("DOMContentLoaded", function() {
    const userStatus = localStorage.getItem('userStatus');
    if (!userStatus) {
        window.location.href = 'status.html';
    }

    const cities = JSON.parse(localStorage.getItem('filteredCities')) || [];
    let currentIndex = 0;

    // Setup navigation buttons
    const nextButton = document.getElementById('next-button');
    const prevButton = document.getElementById('prev-button');

    function updateNavigationButtons() {
        nextButton.disabled = currentIndex >= cities.length - 1;
        prevButton.disabled = currentIndex <= 0;
    }

    nextButton.addEventListener('click', function() {
        if (currentIndex < cities.length - 1) {
            currentIndex++;
            fetchWeather(cities[currentIndex]);
            updateNavigationButtons();
        }
    });

    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            fetchWeather(cities[currentIndex]);
            updateNavigationButtons();
        }
    });

    if (cities.length > 0) {
        fetchWeather(cities[currentIndex]);
        updateNavigationButtons();
    } else {
        console.log("No stored cities to display.");
    }
});

function fetchWeather(city) {
    const apiKey = '6b80fa5dd81c52e7c82eda0ee40f2c75'; // Replace with your API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.getElementById('weather-container').innerHTML = 'Error loading weather data.';
        });
}

function displayWeather(data) {
    const weatherContainer = document.getElementById('weather-container');
    weatherContainer.style.opacity = 0;

    setTimeout(() => {
        if (data && data.main) {
            const { temp, feels_like, temp_min, temp_max, humidity } = data.main;
            const { name } = data;

            weatherContainer.innerHTML = `
                <h2>${name}</h2>
                <p>Temperature: ${temp}°C</p>
                <p>Feels Like: ${feels_like}°C</p>
                <p>Min Temperature: ${temp_min}°C</p>
                <p>Max Temperature: ${temp_max}°C</p>
                <p>Humidity: ${humidity}%</p>
            `;
        } else {
            weatherContainer.innerHTML = '<p>No weather data available.</p>';
        }
        weatherContainer.style.opacity = 1;
    }, 500); // Smooth transition for weather data display
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('go-to-oeai').addEventListener('click', function() {
        window.location.href = 'oeai.html'; // Ensure the file name is correct
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const userStatus = localStorage.getItem('userStatus');
    const redirectButton = document.getElementById('redirect-button');

    if (userStatus === 'Athlete') {
        redirectButton.addEventListener('click', function() {
            window.location.href = 'athlete.html';
        });
    } else if (userStatus === 'Visitor') {
        redirectButton.addEventListener('click', function() {
            window.location.href = 'visitor.html';
        });
    }

    redirectButton.textContent = `Go to ${userStatus} Page`; // Optional: update button text dynamically
});

function startCountdown() {
    const targetDate = new Date('July 26, 2024 19:30:00 GMT+0200').getTime();
    const timer = document.getElementById('timer');

    const countdownFunction = setInterval(function() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        timer.innerHTML = days + " Days " + hours + " Hrs " + minutes + " Min " + seconds + " Sec ";

        if (distance < 0) {
            clearInterval(countdownFunction);
            timer.innerHTML = "Event already started";
        }
    }, 1000);
}

window.onload = startCountdown;

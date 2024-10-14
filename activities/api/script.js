// Clear the information display when launching the website
weatherResult.style.display = "none";

document.getElementById("getWeatherButton").addEventListener("click", function() {
    const apiKey = "e7ba4b789d1a0b51afd74e99ca7405d4";
    const city = document.getElementById("cityInput").value;
    const weatherResult = document.getElementById("weatherResult");
    const errorMessage = document.getElementById("errorMessage");

    if (!city) {
        errorMessage.textContent = "Please enter a city name.";
        weatherResult.style.display = "none";
        return;
    }

    // Clear any previous error messages
    errorMessage.textContent = "";

    // Fetch weather data
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error("City not found");
            }
            return response.json();
        })
        .then(data => {
            // Fetch the country ID for country names
            function getCountryName(countryCode) {
                switch (countryCode) {
                    case "US": return "United States";
                    case "CA": return "Canada";
                    case "GB": return "United Kingdom";
                    case "AU": return "Australia";
                    case "FR": return "France";
                    case "DE": return "Germany";
                    case "IN": return "India";
                    case "JP": return "Japan";
                    case "KR": return "South Korea";
                    case "PH": return "Philippines";
                    default: return countryCode;
                }
            }

            const countryName = getCountryName(data.sys.country);
            const cityName = `${data.name}, ${countryName}`;
            const temperature = data.main.temp;
            const condition = `${data.weather[0].main} (${data.weather[0].description})`;
            const icon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
            const feelsLike = data.main.feels_like;
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;
            const visibility = data.visibility / 1000;
            const fullTemperatureDetails = `${data.main.temp_min}°C - ${data.main.temp_max}°C`;

            // Convert Unix timestamp for sunrise/sunset to readable time
            const sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
            const sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

            document.getElementById("cityName").textContent = `${cityName}`;
            document.getElementById("temperature").textContent = `${temperature}°C | Feels like: ${feelsLike}°C`;
            document.getElementById("condition").textContent = condition;
            document.getElementById("weatherIcon").src = icon;

            document.getElementById("humidity").textContent = `Humidity: ${humidity}%`;
            document.getElementById("visibility").textContent = `Visibility: ${visibility} km`;
            document.getElementById("fullTemperature").textContent = `Min / Max Temperature: ${fullTemperatureDetails}`;
            document.getElementById("windSpeed").textContent = `Wind Speed: ${windSpeed} m/s`;
            document.getElementById("sunrise").textContent = `Sunrise: ${sunrise}`;
            document.getElementById("sunset").textContent = `Sunset: ${sunset}`;

            weatherResult.style.display = "block";
        })
        .catch(error => {
            errorMessage.textContent = "Invalid city name or failed request. Please try again.";
            weatherResult.style.display = "none";
        });
});

async function getWeather() {
    const city = document.getElementById("cityInput").value;
    const apiKey = 'cfc784a62cf268ad92f45d7dc55b0efe';  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("City not found");  
        }

        const data = await response.json();

        const temperature = data.main.temp;
        const weatherDescription = data.weather[0].description;

        alert(`Temperature in ${city}: ${temperature}°C\nWeather: ${weatherDescription}`);
    } catch (error) {
        alert(error.message);  
    }
}

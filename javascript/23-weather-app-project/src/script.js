
import { getUserLocation } from "./components/location";
import { getCurrentWeatherForLocation, getWeatherForNextDays } from "./components/weatherApi";

    let location = localStorage.getItem("location") || getUserLocation();
    localStorage.setItem("location", location);

await showForecast();

document.getElementById("changeLocation").addEventListener("click", async () => {
    location = getUserLocation();
    localStorage.setItem("location", location);

    await showForecast();
});

const response = await getCurrentWeatherForLocation(location);

    if(!response.data.current.is_day) {
        document.querySelector("body").style.backgroundColor = "#383838"
    }

async function showForecast() {
    const forecastResponse = await getWeatherForNextDays(location);

    document.getElementById("locationName").innerText =
        forecastResponse.data.location.name;

    const forecastHolder = document.getElementById("forecastHolder");
    forecastHolder.innerHTML = "";

    for (let day of forecastResponse.data.forecast.forecastday) {
        forecastHolder.innerHTML += `
            <div>
                <h3>${day.date}</h3>
                <img src="https:${day.day.condition.icon}" alt="${day.day.condition.text}">
                <p>${day.day.condition.text}</p>
                <p>Min: ${day.day.mintemp_c} °C</p>
                <p>Max: ${day.day.maxtemp_c} °C</p>
                <hr>
            </div>
        `;
    }
}





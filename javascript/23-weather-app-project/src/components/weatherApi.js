import axios from "axios";

const apiKey = "e0b952bce56749909c1145715241905";

export async function getCurrentWeatherForLocation(location) {
    return await axios.get("https://api.weatherapi.com/v1/current.json", {
        params: {
            key: apiKey,
            q: location,
            aqi: "no"
            }
        });
}

export async function getWeatherForNextDays(location) {
    return await axios.get("https://api.weatherapi.com/v1/forecast.json", {
        params: {
            key: apiKey,
            q: location,
            days: 3,
            aqi: "no",
            alerts: "no"
        }
    });
}
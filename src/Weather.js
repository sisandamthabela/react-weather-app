import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";

export default function Weather() {
  const [weatherInfo, setWeatherInfo] = useState({ loaded: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherInfo({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  if (weatherInfo.loaded) {
    return (
      <div className="weather">
        <form>
          <input
            type="search"
            placeholder="Enter a location"
            className="search-bar"
            required
            autoFocus
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <h1>Lisbon</h1>
        <p className="date">Wednesday 9:00</p>
        <div>
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
          ></img>
          <h2>{Math.round(weatherInfo.temperature)}°C</h2>
          <p className="condition text-capitalize">{weatherInfo.description}</p>
        </div>
        <div className="d-flex justify-content-evenly weather-info ">
          <p>Humidity: {weatherInfo.humidity}%</p>

          <p>Wind: {weatherInfo.wind}km/h</p>
        </div>
      </div>
    );
  } else {
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";
    let city = "lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return (
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="black"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );
  }
}

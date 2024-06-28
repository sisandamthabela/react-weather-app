import React, { useState } from "react";
import "./Weather.css";
import axios from "axios";

import WeatherData from "./WeatherData";

export default function Weather(props) {
  const [weatherInfo, setWeatherInfo] = useState({ loaded: false });
  const [cityName, setCityName] = useState(props.defaultCity);
  function handleResponse(response) {
    console.log(response);
    setWeatherInfo({
      loaded: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  function search() {
    const apiKey = "5293d8454b519c30f6f6331f38c85b4c";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChanges(event) {
    setCityName(event.target.value);
  }

  if (weatherInfo.loaded) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a location"
            className="search-bar"
            required
            autoFocus
            onChange={handleChanges}
          />
          <input type="submit" value="Search" className="search-button" />
        </form>
        <WeatherData data={weatherInfo} />
      </div>
    );
  } else {
    search();

    return "loading...";
  }
}

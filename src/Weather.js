import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h2>6°C</h2>
        <p className="condition">partly cloudy </p>
      </div>
      <div className="d-flex justify-content-evenly weather-info ">
        <div>
          <p>Humidity: 72%</p>
        </div>
        <div>
          <p>Wind: 7km/h</p>
        </div>
      </div>
    </div>
  );
}

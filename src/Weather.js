import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <form>
        <input type="search" placeholder="Enter a location" />
        <input type="submit" value="Search" />
      </form>

      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday 08:00</li>
        <li>Mostly Cloudy</li>
      </ul>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
            alt="weather icon"
          ></img>
          6°C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humiidity: 72%</li>

            <li>Wind: 5km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

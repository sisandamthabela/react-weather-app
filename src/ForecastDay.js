import React from "react";

import WeatherIcon from "./WeatherIcon";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];

    return days[day];
  }

  function maxTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  return (
    <div>
      <div className="forecast-day mb-3">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={46} />
      <div className="temperatures">
        <span className="max-temp">{maxTemperature()}</span>{" "}
        <span className="min-temp ms-2">{minTemperature()}</span>
      </div>
    </div>
  );
}

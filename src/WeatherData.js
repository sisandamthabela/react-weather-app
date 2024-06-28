import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherData(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <p className="date">
        <FormattedDate date={props.data.date} />{" "}
      </p>
      <div>
        <img src={props.data.icon} alt="weather icon"></img>
        <h2>{Math.round(props.data.temperature)}°C</h2>
        <p className="condition text-capitalize">{props.data.description}</p>
      </div>
      <div className="d-flex justify-content-evenly weather-info ">
        <p>Humidity: {props.data.humidity}%</p>

        <p>Wind: {props.data.wind}km/h</p>
      </div>
    </div>
  );
}

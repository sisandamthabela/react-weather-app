import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherData(props) {
  return (
    <div>
      <h1>{props.data.city}</h1>
      <p className="date">
        <FormattedDate date={props.data.date} />{" "}
      </p>
      <div>
        <div className="weather-icon">
          <WeatherIcon code={props.data.icon} />
        </div>
        <WeatherTemperature celsius={props.data.temperature} />

        <p className="condition text-capitalize">{props.data.description}</p>
      </div>
      <div className="d-flex justify-content-evenly weather-info ">
        <p>Humidity: {props.data.humidity}%</p>

        <p>Wind: {props.data.wind}km/h</p>
      </div>
    </div>
  );
}

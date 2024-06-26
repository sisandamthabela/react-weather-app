import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="d-flex justify-content-center">
        <h2>{Math.round(props.celsius)} </h2>
        <div>
          <span className="unit">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;

    return (
      <div className="d-flex justify-content-center">
        <h2>{Math.round(fahrenheit)} </h2>
        <div>
          <span className="unit">
            <a href="/" onClick={showCelsius}>
              °C |
            </a>
            °F{" "}
          </span>
        </div>
      </div>
    );
  }
}

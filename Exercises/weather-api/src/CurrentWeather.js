import React from "react";
export default function CurrentWeather(props) {
  return (
    <>
      <img className="image-1" src={props.image} alt="weather-logo" />
      <figcaption>{props.weather}</figcaption>
      <div className="currentWeather">
        <div className="temp">
          <h3>Temperature</h3>
          <p>
            {Math.round(props.temperature_min)}°C to{" "}
            {Math.round(props.temperature_max)}°C
          </p>
        </div>
        <div className="pressure">
          <h4>Humidity</h4>
          <p>{props.humidity}%</p>
          <h4>Pressure</h4>
          <p>{props.pressure}</p>
        </div>
      </div>
    </>
  );
}

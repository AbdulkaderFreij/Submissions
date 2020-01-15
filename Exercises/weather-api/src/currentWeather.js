import React from "react";
import mostlycloudy from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/mostlycloudy.svg";
import clear from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/clear.svg";
export default function CurrentWeather(props) {
  return (
    <>
      <img className="image-1" src={clear} alt="weather-logo" />
      <figcaption>{props.weather}</figcaption>
      <div className="currentWeather">
        <div className="temp">
          <h3>Temperature</h3>
          <p>{Math.floor(props.temperature - 273.15)}°C</p>
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

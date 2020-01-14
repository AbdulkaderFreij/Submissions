import React from "react";
import mostlycloudy from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/mostlycloudy.svg";

export default function CurrentWeather(props) {
  return (
    <>
      {" "}
      <img className="image-1" src={mostlycloudy} alt="weather-logo" />
      <figcaption>Overcast Clouds</figcaption>
      <div className="currentWeather">
        <div className="temp">
          <h3>Temperature</h3>
          <p>{props.temperature}</p>
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

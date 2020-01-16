import React from "react";

export default function FutureWeather(props) {
  return (
    <>
      <div className="forecast-details">
        {" "}
        <p>{props.list.dt_txt.substring(11, 16)}</p>
        <img src={props.image} alt="weather-logo" />
        <p> {Math.round(props.list.main.temp)}°C</p>
      </div>
    </>
  );
}

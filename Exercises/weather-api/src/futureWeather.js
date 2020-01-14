import React from "react";
import mostlycloudy from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/mostlycloudy.svg";
import clear from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/clear.svg";

export default function FutureWeather(props) {
  return (
    <>
      {props.list.map(item => (
        <div className="forecast-details">
          {" "}
          <p>{item.dt_txt.split(" ")[1]}</p>
          <img className="image-2" src={mostlycloudy} alt="weather-logo" />{" "}
          <p> {item.main.temp}</p>{" "}
        </div>
      ))}
    </>
  );
}

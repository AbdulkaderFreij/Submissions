import React from "react";
import mostlycloudy from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/mostlycloudy.svg";
import clear from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/clear.svg";
import Storm from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/storm.svg";
import Drizzle from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/drizzle.svg";
import Fog from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/fog.svg";
import Rain from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/rain.svg";
import Snow from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/snow.svg";
import partlycloudy from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/partlycloudy.svg";

function checkWeather(weather) {
  console.log(weather);
  if (weather < 300) {
    return <img src={Storm} alt="" />;
  } else if (weather > 300 && weather < 499) {
    return <img src={Drizzle} alt="" />;
  } else if (weather > 500 && weather < 599) {
    return <img src={Rain} alt="" />;
  } else if (weather > 600 && weather < 699) {
    return <img src={Snow} alt="" />;
  } else if (weather > 700 && weather < 799) {
    return <img src={Fog} alt="" />;
  } else if (weather === 800) {
    return <img src={clear} alt="" />;
  } else if (weather === 801) {
    return <img src={partlycloudy} alt="" />;
  } else if (weather > 801 && weather < 805) {
    return <img src={mostlycloudy} alt="" />;
  } else return <img src={mostlycloudy} alt="" />;
}

export default function FutureWeather(props) {
  return (
    <>
      <div className="forecast-details">
        {" "}
        <p>{props.list.dt_txt.substring(11, 16)}</p>
        {checkWeather(props.list.weather[0].id)}
        <p> {Math.floor(props.list.main.temp - 273.15)}°C</p>
      </div>
    </>
  );
}

import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";

import "./App.css";
import Search from "./Search.js";
import CurrentWeather from "./CurrentWeather.js";
import FutureWeather from "./FutureWeather.js";
import Mostlycloudy from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/mostlycloudy.svg";
import Clear from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/clear.svg";
import Storm from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/storm.svg";
import Drizzle from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/drizzle.svg";
import Fog from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/fog.svg";
import Rain from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/rain.svg";
import Snow from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/snow.svg";
import Partlycloudy from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/partlycloudy.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
<<<<<<< HEAD
      weather: [],
      input: "Beirut"
    };
  }

  getData(value) {
    console.log(value);
    fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=" +
        `${value}` +
        "&cnt=8&units=metric&appid=0fde7058d03651102c4ab6198ec81304"
    )
      .then(response => {
        if (!response.ok) {
          throw response;
        }
        return response.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ weather: data });
        //console.log(this.state.todos.list[0].weather[0].description)
      })
      .catch(err => {
        console.log(err);
      });
  }

  inputChange = (value, event) => {
    event.preventDefault();
    this.getData(value);
  };
  componentDidMount() {
    this.getData(this.state.input);
  }

  checkWeather = weather => {
    console.log(weather);
    if (weather < 300) {
      return { src: Storm, color: "red" };
    } else if (weather >= 300 && weather < 499) {
      return { src: Drizzle, color: "blue" };
    } else if (weather >= 500 && weather < 599) {
      return { src: Rain, color: "red" };
    } else if (weather >= 600 && weather < 699) {
      return { src: Snow, color: "white" };
    } else if (weather >= 700 && weather <= 799) {
      return { src: Fog, color: "lightyellow" };
    } else if (weather === 800) {
      return { src: Clear, color: "yellow" };
    } else if (weather === 801) {
      return { src: Partlycloudy, color: "gray" };
    } else if (weather > 801 && weather < 805) {
      return { src: Mostlycloudy, color: "gray" };
    } else return Mostlycloudy;
  };

  render() {
    return this.state.weather.length === 0 ? null : (
      <div
        className="app"
        style={{
          backgroundColor: this.checkWeather(
            this.state.weather.list[0].weather[0].id
          ).color
        }}
      >
        <header className="app__header">
          <Search handleInput={this.inputChange} />
        </header>
        <main className="app__main">
          <div className="image-container">
            <CurrentWeather
              image={
                this.checkWeather(this.state.weather.list[0].weather[0].id).src
              }
              humidity={this.state.weather.list[0].main.humidity}
              pressure={this.state.weather.list[0].main.pressure}
              temperature_min={this.state.weather.list[0].main.temp_min}
              temperature_max={this.state.weather.list[0].main.temp_max}
              weather={this.state.weather.list[0].weather[0].main}
            />
            <div className="forecast">
              {this.state.weather.list.slice(1, 8).map((item, value) => {
                return (
                  <FutureWeather
                    key={value}
                    list={item}
                    image={this.checkWeather(item.weather[0].id).src}
                  />
                );
              })}
            </div>
          </div>
        </main>
=======
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        <SayHi />
        <SayHello color="black" name={this.state.name} />
        <Search handleInput={this.handleInputChange} />
>>>>>>> dbfca94249132279d87cdc433793d8f550b80fc5
      </div>
    );
  }
}

export default App;

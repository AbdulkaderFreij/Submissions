import React, { Component } from "react";
import "./App.css";
import Search from "./Search.js";
import CurrentWeather from "./CurrentWeather.js";
import FutureWeather from "./FutureWeather.js";
import mostlycloudy from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/mostlycloudy.svg";
import clear from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/clear.svg";
import Storm from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/storm.svg";
import Drizzle from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/drizzle.svg";
import Fog from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/fog.svg";
import Rain from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/rain.svg";
import Snow from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/snow.svg";
import partlycloudy from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/img/weather-icons/partlycloudy.svg";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      return Storm;
    } else if (weather > 300 && weather < 499) {
      return Drizzle;
    } else if (weather > 500 && weather < 599) {
      return Rain;
    } else if (weather > 600 && weather < 699) {
      return Snow;
    } else if (weather > 700 && weather < 799) {
      return Fog;
    } else if (weather === 800) {
      return clear;
    } else if (weather === 801) {
      return partlycloudy;
    } else if (weather > 801 && weather < 805) {
      return mostlycloudy;
    } else return mostlycloudy;
  };

  render() {
    return this.state.weather.length === 0 ? null : (
      <div className="app">
        <header className="app__header">
          <Search handleInput={this.inputChange} />
        </header>
        <main className="app__main">
          <div className="image-container">
            <CurrentWeather
              image={this.checkWeather(
                this.state.weather.list[0].weather[0].id
              )}
              humidity={this.state.weather.list[0].main.humidity}
              pressure={this.state.weather.list[0].main.pressure}
              temperature={this.state.weather.list[0].main.temp}
              weather={this.state.weather.list[0].weather[0].main}
            />
            <div className="forecast">
              {this.state.weather.list.slice(1, 8).map((item, value) => {
                return (
                  <FutureWeather
                    key={value}
                    list={item}
                    image={this.checkWeather(item.weather[0].id)}
                  />
                );
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
import Search from "./search.js";
import CurrentWeather from "./currentWeather.js";
import FutureWeather from "./futureWeather.js";
import FakeWeather from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/data/FakeWeather.json";

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search city={FakeWeather.city.name} />
        </header>
        <main className="app__main">
          <div className="image-container">
            <CurrentWeather
              humidity={FakeWeather.list[0].main.humidity}
              pressure={FakeWeather.list[0].main.pressure}
              temperature={FakeWeather.list[0].main.temp}
            />
            <div className="forecast">
              <FutureWeather list={FakeWeather.list} />
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

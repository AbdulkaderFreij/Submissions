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
              weather={FakeWeather.list[0].weather[0].main}
            />
            <div className="forecast">
              {FakeWeather.list.map((item, value) => {
                if (value > 0 && value < 8)
                  return <FutureWeather list={item} />;
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

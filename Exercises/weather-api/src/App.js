import React, { Component } from "react";
import "./App.css";
import Search from "./search.js";
import CurrentWeather from "./currentWeather.js";
import FutureWeather from "./futureWeather.js";
import FakeWeather from "/home/abdulkader/Documents/week-1/Submissions/Exercises/weather-api/src/data/FakeWeather.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  async componentDidMount() {
    const response = await fetch(
      "http://api.openweathermap.org/data/2.5/forecast?q=Beirut&cnt=8&units=metric&appid=0fde7058d03651102c4ab6198ec81304"
    );
    const r = await response.json();
    console.log(r);
    //console.log(r.list[0].main.temp);
    this.setState({ data: r });
  }
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Search city={this.state.city} />
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
              {FakeWeather.list.slice(1, 8).map((item, value) => {
                return <FutureWeather key={value} list={item} />;
              })}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./App.css";
export default class Search extends Component {
  state = {
    input: ""
  };
  render() {
    return (
      <>
        <form className="findTemp">
          <input
            className="city"
            type="text"
            placeholder="Type in a city name"
            onChange={event => {
              this.setState({ input: event.target.value });
            }}
          />
          <button
            type="submit"
            value="submit"
            onClick={event => {
              this.props.handleInput(this.state.input, event);
            }}
          >
            Find Weather
          </button>
        </form>
      </>
    );
  }
}

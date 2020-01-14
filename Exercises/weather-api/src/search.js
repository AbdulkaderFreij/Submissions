import React from "react";

export default function Search(props) {
  return (
    <>
      {" "}
      <form className="findTemp">
        <input
          className="city"
          type="text"
          placeholder="Type in a city name"
          value={props.city}
        />
        <button type="submit" value="submit">
          Find Weather
        </button>{" "}
      </form>
    </>
  );
}

import React from "react";

import DateAndTime from "./DateAndTime";

export default function Search(props) {
  return (
  <div className="search">
  <DateAndTime />
  <div className="list">
    <ul>
      <li>Temperature: {Math.round(props.data.temperature)}•C</li>
      <li className="text-capitalize">Description: {props.data.description}</li>
      <li>Humidity: {props.data.humidity}%</li>
      <li>Wind: {props.data.wind}km/h</li>
      <li>
        <img className="icon" src={props.data.icon} alt="weather icon" />
      </li>
    </ul>
    </div>
  </div>
  );
}
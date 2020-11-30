import React from "react";
import DateAndTime from "./DateAndTime";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="searchResults">
      <h1>{props.data.city}</h1>
      <div className="row">
      <div className="list">
        <ul>
          <li><em><DateAndTime /></em></li>
          <li><Temperature celsius={Math.round(props.data.temperature)} /></li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
        </ul>
        </div>
        <WeatherIcon
          code={props.data.icon}
          alt={props.data.description}
          size={90}
          color={props.data.color}
        />
        </div>
          <h1>
          {props.data.description}
      </h1>
        </div>
  );
}

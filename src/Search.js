import React from "react";
import DateAndTime from "./DateAndTime";
import WeatherIcon from "./WeatherIcon";
import Temperature from "./Temperature";
import "./Search.css";

export default function Search(props) {
  return (
    <div className="search">
      <DateAndTime />
      <div className="list">
        <ul>
          <li><Temperature celsius={Math.round(props.data.temperature)} /></li>
          <li className="text-capitalize">
            Description: {props.data.description}
          </li>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind}km/h</li>
          <li>
              <WeatherIcon
                code={props.data.icon}
                alt={props.data.description}
              />
            </li>
        </ul>
      </div>
    </div>
  );
}

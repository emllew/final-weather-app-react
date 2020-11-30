import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastDays(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp)
    return `${temperature}•C`
  }

  return (
    <div className="upcomingForecast">
      <div className="col">
        {hours()}
        <WeatherIcon code={props.data.weather[0].icon} size={43}/>
        {temperature()}
      </div>
    </div>
  );
}
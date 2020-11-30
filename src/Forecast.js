import React, { useState } from "react";
import axios from "axios";
import ForecastDays from "./ForecastDays";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data); 
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="row">
        <ForecastDays data={forecast.list[0]} />
        <ForecastDays data={forecast.list[1]} />
        <ForecastDays data={forecast.list[2]} />
        <ForecastDays data={forecast.list[3]} />
        <ForecastDays data={forecast.list[4]} />
        <ForecastDays data={forecast.list[5]} />
      </div>
    );

  } else {
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=33b9889a2520a43a8c73d715b7b85a96&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
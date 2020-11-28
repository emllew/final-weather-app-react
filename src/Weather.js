import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import "./Weather.css";

export default function Weather() {
  const [city, setCity] = useState("");
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  
  function displayWeather(response) {
    setReady(true);
  setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(event.target.value);
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33b9889a2520a43a8c73d715b7b85a96&units=metric`;
    axios.get(apiURL).then(displayWeather);
  }

  function updateCityInfo(event) {
    setCity(event.target.value);
  }

  function AutoCities() {
    navigator.geolocation.getCurrentPosition(currentLocation);
      function currentLocation(position) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        let apiKey = "33b9889a2520a43a8c73d715b7b85a96";
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        axios.get(url).then(displayWeather);
      }
  }

  let form = (
    <div className="topButtons">
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter your City"
          onChange={updateCityInfo}
          className="searchBar"
        />
        <button className="button" type="submit">Search</button>
      </form>
      <button className="button" onClick={AutoCities}>Get Current Location</button>
    </div>
  );

  if (ready) {
    return (
      <div className="Weather">
        {form}
        <h1>{city}</h1>

        <div className="row">
          <ul>
            <li>Temperature: {Math.round(weatherData.temperature)}•C</li>
            <li className="text-capitalize">Description: {weatherData.description}</li>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind}km/h</li>
            <li>
              <img className="icon" src={weatherData.icon} alt="weather icon" />
            </li>
          </ul>
        </div>
      </div>
    );
  } else {

    return (
      <div className="notSearchedForm">
        <div className="form">{form}</div>
        <Loading />
      </div>
    );
  }
}

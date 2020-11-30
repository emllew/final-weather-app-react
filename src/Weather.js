import React, { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import Forecast from "./Forecast";
import "./Weather.css";
import Search from "./Search";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});

  function displayWeather(response) {
    setReady(true);
    setWeatherData({
      temperature: Math.round(response.data.main.temp),
      wind: Math.round(response.data.wind.speed),
      description: response.data.weather[0].description,
      humidity: Math.round(response.data.main.humidity),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
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

  function search() {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=33b9889a2520a43a8c73d715b7b85a96&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter your City"
          onChange={updateCityInfo}
          className="searchBar"
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <button className="button" onClick={AutoCities}>
        Get Current Location
      </button>
    </div>
  );

  if (ready) {
    return (
      <div className="Weather">
        {form}
        <Search data={weatherData} />
        <Forecast city={weatherData.city}/>
      </div>
    );
  } else {
    search();
    return (
      <div className="notSearchedForm">
        <div className="form">{form}</div>
        <Loading />
      </div>
    );
  }
}

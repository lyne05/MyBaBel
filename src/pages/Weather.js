import React from "react";
import "./Weather.css";
import background from "../images/weather/background.jpg";
import { useState } from "react";
import cloud from "../images/weather/cloud.png";
import humidity from "../images/weather/humidity.png";
import temperature from "../images/weather/temperature.png";

const api = {
  key: "9b794f58a380a482b7cdd668bac17762",
  base: "https://api.openweathermap.org/data/2.5/",
};

const Weather = () => {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  const searchPressed = () => {
    console.log("Search pressed!");
    fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("City not found");
        }
        return res.json();
      })
      .then((result) => {
        setWeather(result);
      })
      .catch((error) => {
        console.error("Error fetching the weather data: ", error);
        setWeather({});
      });
  };

  return (
    <div>
      <div className="weather-content">
        <img className="background" src={background} alt="background" />
        <div className="weather-title">
          <h1>Weather</h1>
        </div>

        {/* Search Box */}
        <div className="weatherInput">
          <input
            type="text"
            placeholder="Enter city/town..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <div>
            <button onClick={searchPressed}>Search</button>
          </div>
        </div>
        {weather.name && (
          <div
            className="weather-info"
            style={{ display: weather.name ? "block" : "none" }}
          >
            <div className="weather-result-location">
              {/* Location */}
              <h1>{weather.name}</h1>
            </div>
            <div className="weather-results">
              <div className="weather-result">
                {/* Temperature C */}
                <img src={temperature} alt="Temperature" />
                {weather.main && (
                  <p>
                    Temperature <br />
                    {weather.main.temp}°C
                  </p>
                )}
              </div>
              <div className="weather-result">
                {/* Humidity */}
                <img src={humidity} alt="Humidity" />
                {weather.main && (
                  <p>
                    Humidity <br /> {weather.main.humidity}%
                  </p>
                )}
              </div>
              <div className="weather-result">
                {/* Condition (Sunny) */}
                <img src={cloud} alt="Condition" />
                {weather.weather && (
                  <div>
                    <p>{weather.weather[0].main}</p>
                    <p>({weather.weather[0].description})</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Weather;

import React from "react";
import './Result.css';

export default function Result({ weatherData , searchQuery }) {
    if ( !weatherData || Object.keys(weatherData).length === 0) {
        return (
          <div className="result">
            <h3>Please enter a valid city name</h3>
          </div>
        );
      }
    
  const { city, list } = weatherData;

  if (!city || !list) {
    return (
      <div className="result">
        <h3>Please enter a valid city name</h3>
      </div>
    );
  }

  // Only render the data if city and list are present
  return (
    <div className="result">
      <h2>{city.name}</h2>
      <div className="all1">
        <div>
          <img src={`http://openweathermap.org/img/wn/${list[0].weather[0].icon}@2x.png`} />
        </div>
        <div>
          Description
          <br />
          {list[0].weather[0].description}
        </div>
      </div>
      <div className="all">
        <div className="styled">Temp_min: {list[0].main.temp_min}</div>
        <div className="styled">Temp_max: {list[0].main.temp_max}</div>
        <div className="styled">Humidity: {list[0].main.humidity}%</div>
        <div className="styled">Wind speed: {list[0].wind.speed} Km/h</div>
      </div>
    </div>
  );
}
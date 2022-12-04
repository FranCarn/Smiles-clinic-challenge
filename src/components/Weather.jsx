import React, { useEffect, useState } from "react";
import { Loader } from "./Loader";
import { getWeather } from "../services/api";
import styles from "../pages/Dashboard/components/TopCards/cards.module.css";

export const Weather = () => {
  const [weatherState, setweatherState] = useState(null);
  const getInitialData = () => {
    let lat;
    let lon;
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      const weatherData = await getWeather(lat, lon);
      setweatherState(weatherData);
    });
  };
  useEffect(() => getInitialData(), []);

  if (!weatherState) return <Loader width={20} />;

  return (
    <div className={styles.rightIcons}>
      <div className={styles.cardWeatherContainer}>
        <img
          src={`/icons/${weatherState.weather[0].icon}.png`}
          className={styles.cardWeatherIcon}
          alt={`${weatherState.weather[0].main}-img`}
        />
        <div className={styles.weatherTitle}>
          {Math.round(weatherState.main.temp)}°
        </div>
      </div>
      <div>{weatherState.name}</div>
    </div>
  );
};

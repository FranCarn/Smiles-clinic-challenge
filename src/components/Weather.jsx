import React from "react";
import { Loader } from "./Loader";
import { useWeather } from "../hooks/useWeather";
import styles from "../pages/Dashboard/components/TopCards/cards.module.css";

export const Weather = ({ style }) => {
  const { weatherState } = useWeather();
  if (!weatherState) return <Loader width={20} />;
  return (
    <div>
      <div className={styles.cardWeatherContainer}>
        <img
          src={`/icons/${weatherState.weather[0].icon}.png`}
          className={styles.cardWeatherIcon}
          alt={`${weatherState.weather[0].main}-img`}
        />
        <div className={style}>{Math.round(weatherState.main.temp)}°</div>
      </div>
      <div>{weatherState.name}</div>
    </div>
  );
};

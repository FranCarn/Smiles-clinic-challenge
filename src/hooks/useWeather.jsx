import { useEffect, useState } from "react";

export const useWeather = () => {
  const [weatherState, setweatherState] = useState(null);
  const getInitialData = () => {
    let lat;
    let lon;
    if (!navigator.geolocation) return;
    navigator.geolocation.getCurrentPosition(async (position) => {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      let weatherData = await getWeather(lat, lon);
      setweatherState(weatherData);
    });
  };
  useEffect(() => getInitialData(), []);
  return weatherState;
};

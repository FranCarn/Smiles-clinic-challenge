import axios from "axios";

export const validLogin = async ({ email, password }) => {
  try {
    const res = await axios.get();
    const checkUser = res.data.find(
      (item) => item === email && item === password
    );
    return checkUser;
  } catch (err) {
    console.log(err);
  }
};

export const getAllUsers = async () => {
  try {
    let res = await axios.get(`${import.meta.env.VITE_BASEURL + "/users"}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

// TODO ACOMODAR

const API_KEY = `666a9c0eec2c719f937083ca9dde8a7c`;

export const getWeather = async (lat, lon) => {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${API_KEY}`;
  try {
    let res = await fetch(apiUrl);
    res = await res.json();
    return res;
  } catch (error) {
    return null;
  }
};

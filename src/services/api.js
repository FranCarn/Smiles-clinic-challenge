import axios from "axios";

export const validLogin = async ({ email, password }) => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASEURL + "/users"}`);
    const checkUser = res.data.filter(
      (item) => item.email === email && item.password === password
    );
    return checkUser;
  } catch (err) {
    return;
  }
};

export const getAllUsers = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_BASEURL + "/users"}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const saveNewUser = async (userInfo) => {
  try {
    const res = await axios.post(
      `${import.meta.env.VITE_BASEURL + "/users"}`,
      userInfo
    );
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getWeather = async (lat, lon) => {
  const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=sp&units=metric&appid=${
    import.meta.env.VITE_WEATHER_API_KEY
  }`;
  try {
    const res = await axios.get(baseURL);
    return res.data;
  } catch (error) {
    return null;
  }
};

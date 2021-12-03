import React from "react";

const WeatherContext = React.createContext({
  apiKey: "",
  city: "",
  current: {},
  daily: [],
  getCurrentLocation: () => {},
  getWeather: () => {},
});

export default WeatherContext;

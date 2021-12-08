import React, { useEffect, useCallback, useState } from "react";
import WeatherContext from "./weather-context";
import moment from "moment";
import axios from "axios";
const apiKey = "32030a3601954e2ec68b426133737514";

let lat, long, city;
const units = "metric";

const WeatherProvider = (props) => {
  const [weather, setWeather] = useState(null);

  // Get City Name using Reverse Geocoding API
  const getCurrentLocation = useCallback(async (lat, long) => {
    try {
      const res = await fetch(
        `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${long}&limit=10&appid=${apiKey}`
      );
      if (!res.ok) throw new Error("Something went wrong. Error:" + res.status);
      const data = await res.json();
      city = data[data.length - 1].name;
      console.log(data[data.length - 1].name);
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  // Get weather using Latitude and longitude
  const getWeather = useCallback(
    async (lat, long, units, apiKey) => {
      try {
        const res = await axios(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=${units}&exclude=hourly,minutely&appid=${apiKey}`
        );
        // If response is returned with statusText not set as OK then
        if (res.statusText !== "OK")
          throw new Error(`Something went wrong. Error ${res.status}`);
        // Destructure data from response
        const { data } = res;
        // Set Weather Data
        const weatherData = {
          apiKey: apiKey,
          city: city,
          current: {
            ...data.current,
            today: moment().format("ddd, Do MMM"),
          },
          daily: data.daily.slice(0, 5),
          getCurrentLocation: getCurrentLocation,
          getWeather: getWeather,
        };
        // Set Weather State
        setWeather(weatherData);
      } catch (err) {
        console.error(err.message);
      }
    },
    [getCurrentLocation]
  );

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          lat = pos.coords.latitude;
          long = pos.coords.longitude;
          getCurrentLocation(lat, long);
          getWeather(lat, long, units, apiKey);
        },
        (err) => {
          console.error(err);
        }
      );
    }
  }, [getCurrentLocation, getWeather]);

  return (
    <WeatherContext.Provider value={weather}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;

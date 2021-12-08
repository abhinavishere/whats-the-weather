import React, { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import ForecastItem from "./ForecastItem";

const ForecastList = () => {
  const { daily } = useContext(WeatherContext);
  const forecastDaily =
    daily &&
    daily.map((item) => {
      return {
        temp: item.temp,
        weather: item.weather,
      };
    });
  return (
    <ul className="w-full h-screen bg-very-dark-blue text-white grid px-9 py-12  grid-cols-2 gap-x-6 gap-y-8">
      {forecastDaily &&
        forecastDaily.map((item, index) => (
          <ForecastItem item={item} key={index} />
        ))}
    </ul>
  );
};

export default ForecastList;

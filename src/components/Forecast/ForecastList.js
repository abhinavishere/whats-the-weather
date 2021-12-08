import React, { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import ForecastItem from "./ForecastItem";
import moment from "moment";

const ForecastList = () => {
  const weatherCtx = useContext(WeatherContext);
  console.log(weatherCtx);

  const forecastDaily =
    weatherCtx?.daily &&
    weatherCtx.daily.map((item, index) => {
      return {
        day: moment()
          .add(index + 1, "days")
          .format("dddd"),
        temp: item.temp,
        weather: item.weather,
      };
    });
  console.log(forecastDaily);
  return (
    <ul className="w-full h-screen bg-very-dark-blue text-white grid px-9 py-12  grid-cols-2 gap-x-6 gap-y-8">
      {forecastDaily &&
        forecastDaily.map((item, index) => (
          <ForecastItem item={item} key={index} />
        ))}
      {!weatherCtx && !forecastDaily && (
        <p className="text-center">No Context Found</p>
      )}
    </ul>
  );
};

export default ForecastList;

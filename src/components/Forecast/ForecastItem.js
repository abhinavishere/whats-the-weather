import React from "react";

const ForecastItem = ({ item }) => {
  const forecastIcon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@4x.png`;

  return (
    <li className=" border-2 border-transparent flex flex-col justify-evenly bg-dark-blue focus:border-white">
      <p className="text-center font-semibold text-lg">{item.day}</p>
      <img src={forecastIcon} alt="forecast icon" />
      <div className="flex justify-between items-center px-3 font-semibold text-md">
        <span>{item.temp.max.toFixed(1)}&#176;C</span>
        <span className="text-gray-600">{item.temp.min.toFixed(1)}&#176;C</span>
      </div>
    </li>
  );
};

export default ForecastItem;

import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Fade } from "react-awesome-reveal";

const WeatherContent = ({ current, city }) => {
  // Get current weather icon from current object in weather context
  const currentWeatherConditionIcon = `http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`;
  return (
    <div className="flex flex-col w-full h-full py-16 justify-between items-center">
      <Fade cascade="true" triggerOnce>
        {/* Weather Icon */}
        <img
          className="z-10 relative w-40 filter brightness-200"
          src={currentWeatherConditionIcon}
          alt=""
        />
        {/* Weather Temp */}
        <h1 className="text-9xl">
          {parseInt(current.temp)}
          <span className="text-4xl text-gray-400 hover:text-white">
            &#176;C
          </span>
        </h1>
        {/* Weather Condition */}
        <p className="text-3xl capitalize font-semibold text-gray-400 hover:text-white">
          {current.weather[0].description}
        </p>
        {/* Date and Day */}
        <div className="flex space-x-2 text-xl items-center justify-center text-gray-400 hover:text-white">
          <span>Today</span>
          <span>.</span>
          <span>{current.today}</span>
        </div>
        {/* Location of the weather */}
        <div className="flex items-end justify-center space-x-1 text-gray-400 hover:text-white cursor-pointer">
          <LocationOnIcon className="w-4 h-4" />
          <span>{city}</span>
        </div>
      </Fade>
    </div>
  );
};

export default WeatherContent;

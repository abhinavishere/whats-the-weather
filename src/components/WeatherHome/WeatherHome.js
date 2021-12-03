import React, { useContext } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WeatherContext from "../../store/weather-context";
import Loader from "../UI/Loader";

const WeatherHome = () => {
  const weatherCtx = useContext(WeatherContext);

  let homeContent = "";
  // If weather context is not returned
  if (!weatherCtx) {
    homeContent = (
      // Loadins Spinner
      <div className="w-full h-full flex justify-center items-center">
        <Loader />
      </div>
    );
  } else {
    const { current, city } = weatherCtx;
    // Get current weather icon from current object in weather context
    const currentWeatherConditionIcon = `http://openweathermap.org/img/wn/${current.weather[0].icon}@4x.png`;

    // Set homecontext as current weather
    homeContent = (
      <div className="flex flex-col w-full h-full py-16 justify-between items-center">
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
      </div>
    );
  }
  // console.log(weatherCtx);

  // ON GeoButtton Click
  const onGeoButtonClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        const lat = pos.coords.latitude;
        const long = pos.coords.longitude;
        weatherCtx.getCurrentLocation(lat, long);
        weatherCtx.getWeather(lat, long, "metric", weatherCtx.apiKey);
      });
    }
  };

  return (
    // Main
    <main
      className="h-screen w-full max-w-lg bg-dark-blue
    text-white overflow-x-hidden flex flex-col md:max-w-sm"
    >
      {/* Header */}
      <header className="flex items-center justify-between p-4">
        <button className="p-2 bg-gray-700 shadow-sm">Search For Places</button>
        {/* GeoButton */}
        <button
          className="p-2 bg-gray-700 rounded-3xl flex items-center justify-center"
          onClick={onGeoButtonClick}
        >
          <MyLocationIcon className="w-5 h-5" />
        </button>
      </header>
      {/* Section */}
      <section className="relative w-full flex-grow">
        {/* Background image */}
        <img
          className="absolute top-10 h-56 w-full transform scale-150 z-0 opacity-10"
          src="/assets/Cloud-background.png"
          alt=""
        />
        {/* HomeContent */}
        {homeContent}
      </section>
    </main>
  );
};

export default WeatherHome;

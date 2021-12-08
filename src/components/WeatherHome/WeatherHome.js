import React, { useContext } from "react";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import WeatherContext from "../../store/weather-context";
import Loader from "../UI/Loader";
import WeatherContent from "./WeatherContent";

const WeatherHome = () => {
  const weatherCtx = useContext(WeatherContext);

  let homeContent = "";
  const spinner = (
    <div className="w-full h-full flex justify-center items-center">
      <Loader />
    </div>
  );
  // If weather context is not returned
  if (!weatherCtx) {
    homeContent = spinner;
  } else {
    const { current, city } = weatherCtx;
    // Set homecontext as current weather
    homeContent = <WeatherContent current={current} city={city} />;
  }

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

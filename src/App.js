import React from "react";
import ForecastList from "./components/Forecast/ForecastList";
import WeatherHome from "./components/WeatherHome/WeatherHome";

import WeatherProvider from "./store/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <WeatherHome />
      <ForecastList />
      {/* Highlights */}
    </WeatherProvider>
  );
}

export default App;

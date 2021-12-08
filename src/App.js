import React from "react";
import ForecastList from "./components/Forecast/ForecastList";
import WeatherHome from "./components/WeatherHome/WeatherHome";

import WeatherProvider from "./store/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <div className="lg:grid font-raleway">
        <WeatherHome />
        <ForecastList />
        {/* Highlights */}
      </div>
    </WeatherProvider>
  );
}

export default App;

import React from "react";
import WeatherHome from "./components/WeatherHome/WeatherHome";
import WeatherProvider from "./store/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <WeatherHome />
      {/* WeatherInputForm */}
      {/* Weather Forecast */}
      {/* Highlights */}
    </WeatherProvider>
  );
}

export default App;

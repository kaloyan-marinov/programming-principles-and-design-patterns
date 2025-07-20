/*
Leveraging the Adapter pattern,
causes conversions to be concentrated in one place.
*/

import {
  WeatherAPI,
  WeatherApp,
  ThirdPartyWeatherAPI,
} from "./2025-03-30-14-23-08-adapter-pattern";

class WeatherAdapter implements WeatherApp {
  constructor(private weatherAPI: WeatherAPI) {
    /*
    TODO: (2025/06/01, 20:32 UTC)
          double-check whether
          this constructor is actually admissible by JavaScript/TypeScript
    */
  }

  getTempF(): number {
    return (this.weatherAPI.getTempC() * 9) / 5 + 32;
  }

  getHumidity(): number {
    // No conversion is needed here.
    return this.weatherAPI.getHumidity();
  }

  getWindSpeedMPH(): number {
    return this.weatherAPI.getWindSpeedKPH() * 0.621371;
  }
}

const weatherAdapter = new WeatherAdapter(new ThirdPartyWeatherAPI());

if (weatherAdapter.getTempF() > 75) {
  console.log("It's hot!");
}

if (weatherAdapter.getWindSpeedMPH() > 10) {
  console.log("It's windy");
}

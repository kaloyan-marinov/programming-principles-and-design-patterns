/*
Without leveraging the Adapter pattern,
conversions will be scattered in many places across the codebase.
*/

import { ThirdPartyWeatherAPI } from "./2025-03-30-14-23-08-adapter-pattern";

const weatherAPI = new ThirdPartyWeatherAPI();

if ((weatherAPI.getTempC() * 9) / 5 + 32 > 75) {
  console.log("It's hot!");
}

if (weatherAPI.getWindSpeedKPH() * 0.621371 > 10) {
  console.log("It's windy!");
}

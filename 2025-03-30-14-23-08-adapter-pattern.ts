// Third-party weather API interface
export interface WeatherAPI {
  getTempC(): number;
  getHumidity(): number;
  getWindSpeedKPHH(): number;
}

// Our app's expected interface
export interface WeatherApp {
  getTempF(): number;
  getHumidity(): number;
  getWindSpeedMPH(): number;
}

// Concrete implementation of the third-party API
export class ThirdPartyWeatherAPI implements WeatherAPI {
  getTempC(): number {
    // Example: 22°C
    return 22;
  }

  getHumidity(): number {
    // Example: 65%
    return 65;
  }
  getWindSpeedKPHH(): number {
    // Example: 15 kph
    return 15;
  }
}

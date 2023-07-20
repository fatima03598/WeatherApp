import daySVG from "../assets/weather-icons/day.svg";
import nightSVG from "../assets/weather-icons/night.svg";
import dayPartCloudy from "../assets/weather-icons/day-partly-cloudy.svg";
import nightPartCloudy from "../assets/weather-icons/night-partly-cloudy.svg";
import cloudy from "../assets/weather-icons/cloudy.svg";
import fog from "../assets/weather-icons/fog.svg";
import drizzle from "../assets/weather-icons/drizzle.svg";
import rainy from "../assets/weather-icons/rainy.svg";
import snowy from "../assets/weather-icons/snowy.svg";
import snowGrains from "../assets/weather-icons/snow-grains.svg";
import showers from "../assets/weather-icons/showers.svg";
import snowShowers from "../assets/weather-icons/snow-showers.svg";
import thunder from "../assets/weather-icons/thunder.svg";

const weatherIconMap = {
  clear: {
    title: "Clear Sky",
    day: daySVG,
    night: nightSVG,
  },
  partCloudy: {
    title: "Partly cloudy",
    day: dayPartCloudy,
    night: nightPartCloudy,
  },
  cloudy: {
    title: "Cloudy",
    day: cloudy,
    night: cloudy,
  },
  fog: {
    title: "Fog",
    day: fog,
    night: fog,
  },
  drizzle: {
    title: "Drizzle",
    day: drizzle,
    night: drizzle,
  },
  freezingDrizzle: {
    title: "Freezing Drizzle",
    day: drizzle,
    night: drizzle,
  },
  rain: {
    title: "Rain",
    day: rainy,
    night: rainy,
  },
  freezingRain: {
    title: "Freezing Rain",
    day: rainy,
    night: rainy,
  },
  snow: {
    title: "Snow",
    day: snowy,
    night: snowy,
  },
  snowGrains: {
    title: "Snow grains",
    day: snowGrains,
    night: snowGrains,
  },
  showers: {
    title: "Showers",
    day: showers,
    night: showers,
  },
  snowShowers: {
    title: "Snow Showers",
    day: snowShowers,
    night: snowShowers,
  },
  thunder: {
    title: "Thunderstorm",
    day: thunder,
    night: thunder,
  },
};

const weatherCodeIconMap = {
  0: "clear",
  1: "partCloudy",
  2: "partCloudy",
  3: "cloudy",
  45: "fog",
  48: "fog",
  51: "drizzle",
  53: "drizzle",
  55: "drizzle",
  56: "freezingDrizzle",
  57: "freezingDrizzle",
  61: "rain",
  63: "rain",
  65: "rain",
  66: "freezingRain",
  67: "freezingRain",
  71: "snow",
  73: "snow",
  75: "snow",
  77: "snowGrains",
  80: "showers",
  81: "showers",
  82: "showers",
  85: "snowShowers",
  86: "snowShowers",
  95: "thunder",
  96: "thunder",
  99: "thunder",
};

export const getOpenWeatherIcon = (iconNum) => {
  return weatherIconMap[weatherCodeIconMap[iconNum]];
};

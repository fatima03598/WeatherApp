import {
  faSun,
  faCloudSun,
  faCloud,
  faSmog,
  faCloudRain,
  faCloudShowersHeavy,
  faSnowflake,
  faCloudBolt,
} from "@fortawesome/free-solid-svg-icons";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
export const weatherIconMap = {
  0: faSun,
  1: faCloudSun,
  2: faCloudSun,
  3: faCloud,
  45: faSmog,
  48: faSmog,
  51: faCloudRain,
  53: faCloudRain,
  55: faCloudRain,
  56: faCloudRain,
  57: faCloudRain,
  61: faCloudShowersHeavy,
  63: faCloudShowersHeavy,
  65: faCloudShowersHeavy,
  66: faCloudShowersHeavy,
  67: faCloudShowersHeavy,
  71: faSnowflake,
  73: faSnowflake,
  75: faSnowflake,
  77: faSnowflake,
  80: faCloudShowersHeavy,
  81: faCloudShowersHeavy,
  82: faCloudShowersHeavy,
  85: faCloudShowersHeavy,
  86: faCloudShowersHeavy,
  95: faCloudBolt,
  96: faCloudBolt,
  99: faCloudBolt,
};

export const getTime = (date) => {
  let dateParsed = new Date(date);
  let hour = dateParsed.getHours();

  if (hour.toString().length == 1) {
    hour = "0" + hour;
  }

  let minutes = dateParsed.getMinutes();
  if (minutes.toString().length == 1) {
    minutes = minutes + "0";
  }
  return `${hour}:${minutes}`;
};

export const getDate = (dateString) => {
  const parsedDate = new Date(dateString);
  const date = `${days[parsedDate.getDay()]} ${parsedDate.getDate()} ${
    months[parsedDate.getMonth()]
  }, ${parsedDate.getFullYear()}`;

  return date;
};

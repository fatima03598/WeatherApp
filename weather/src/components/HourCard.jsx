import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import { weatherIconMap, getTime } from "../utils/dataUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faMoon,
  faTemperatureThreeQuarters,
} from "@fortawesome/free-solid-svg-icons";

export default function HourCard({ hourlyForecastData, dataUnits, listIndex }) {
  const time = getTime(hourlyForecastData.time[listIndex]);
  const weatherCode = hourlyForecastData.weathercode[listIndex];
  const temp =
    hourlyForecastData.apparent_temperature[listIndex] +
    ` ${dataUnits.apparent_temperature}`;
  const isDay = hourlyForecastData.is_day[listIndex];
  const uvIndex = hourlyForecastData.uv_index[listIndex];
  const precProb =
    hourlyForecastData.precipitation_probability[listIndex] +
    `${dataUnits.precipitation_probability}`;

  return (
    <>
      <Paper elevation={2} className="h-full p-2 flex flex-col">
        <section className="text-center text-lg font-semibold">
          <span className="m-2">
            <FontAwesomeIcon icon={isDay == 1 ? faSun : faMoon} size="sm" />
          </span>
          {time}
        </section>
        <section className="grow flex justify-center">
          <FontAwesomeIcon
            icon={weatherIconMap[weatherCode]}
            size="4x"
            style={{ color: "#c3c4d8", stroke: "black", strokeWidth: "7px" }}
          />
        </section>
        <section className="grow flex w-full">
          <FontAwesomeIcon icon={faTemperatureThreeQuarters} size="lg" />
          {temp}
        </section>
        <section className="grow text-sm">
          <p>Precipitation Probability: {precProb}</p>
          <p>UV Index: {uvIndex}</p>
        </section>
      </Paper>
    </>
  );
}

HourCard.propTypes = {
  hourlyForecastData: PropTypes.object,
  listIndex: PropTypes.number,
  dataUnits: PropTypes.object,
};

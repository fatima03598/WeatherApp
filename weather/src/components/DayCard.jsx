import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";
import { weatherIconMap, getTime, getDate } from "../utils/dataUtils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTemperatureLow,
  faTemperatureHigh,
} from "@fortawesome/free-solid-svg-icons";
export default function DayCard({ dailyForecastData, dataUnits, listIndex }) {
  const date = getDate(dailyForecastData.time[listIndex]);
  const weatherCode = dailyForecastData.weathercode[listIndex];
  const maxTemp =
    dailyForecastData.apparent_temperature_max[listIndex] +
    ` ${dataUnits.apparent_temperature_max}`;
  const minTemp =
    dailyForecastData.apparent_temperature_min[listIndex] +
    ` ${dataUnits.apparent_temperature_min}`;
  const sunrise = getTime(dailyForecastData.sunrise[listIndex]);
  const sunset = getTime(dailyForecastData.sunset[listIndex]);
  const uvIndexMax = dailyForecastData.uv_index_max[listIndex];
  const precProb =
    dailyForecastData.precipitation_probability_max[listIndex] +
    `${dataUnits.precipitation_probability_max}`;

  return (
    <>
      <Paper elevation={2} className="h-full p-2 flex flex-col">
        <section className="text-center text-lg font-semibold">{date} </section>
        <section className="grow flex justify-center">
          <FontAwesomeIcon
            icon={weatherIconMap[weatherCode]}
            size="4x"
            style={{ color: "#c3c4d8", stroke: "black", strokeWidth: "7px" }}
          />
        </section>
        <section className="grow flex w-full">
          <article className="flex w-1/2">
            <div>
              <FontAwesomeIcon icon={faTemperatureLow} size="lg" />
            </div>

            <p className="px-2">{minTemp}</p>
          </article>
          <article className="flex w-1/2">
            <div>
              <FontAwesomeIcon icon={faTemperatureHigh} size="lg" />
            </div>
            <p className="px-2">{maxTemp}</p> <br />
          </article>
        </section>
        <section className="grow text-sm">
          <p>Precipitation Probability: {precProb}</p>
          <p>Sunrise: {sunrise}</p>
          <p>Sunset: {sunset}</p>
          <p>Max UV Index: {uvIndexMax}</p>
        </section>
      </Paper>
    </>
  );
}

DayCard.propTypes = {
  dailyForecastData: PropTypes.object,
  listIndex: PropTypes.number,
  dataUnits: PropTypes.object,
};

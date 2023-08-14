import PropTypes from "prop-types";
import Paper from "@mui/material/Paper";

export default function DayCard({ dailyForecastData, dataUnits, listIndex }) {
  const date = dailyForecastData.time[listIndex];
  const weatherCode = dailyForecastData.weathercode[listIndex];
  const maxTemp = dailyForecastData.apparent_temperature_max[listIndex];
  const mintemp = dailyForecastData.apparent_temperature_min[listIndex];
  const sunrise = dailyForecastData.sunrise[listIndex];
  const sunset = dailyForecastData.sunset[listIndex];
  const uvIndexMax = dailyForecastData.uv_index_max[listIndex];
  const precProb = dailyForecastData.precipitation_probability_max[listIndex];

  return (
    <>
      <Paper elevation={1} />
    </>
  );
}

DayCard.propTypes = {
  dailyForecastData: PropTypes.object,
  listIndex: PropTypes.number,
  dataUnits: PropTypes.object,
};

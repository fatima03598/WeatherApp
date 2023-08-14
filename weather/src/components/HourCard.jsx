import PropTypes from "prop-types";

export default function HourCard({ hourlyForecastData, dataUnits, listIndex }) {
  const time = hourlyForecastData.time[listIndex];
  const weatherCode = hourlyForecastData.weathercode[listIndex];
  const temp = hourlyForecastData.apparent_temperature[listIndex];
  const snowDepth = hourlyForecastData.snow_depth[listIndex];
  const isDay = hourlyForecastData.is_day[listIndex];
  const uvIndex = hourlyForecastData.uv_index[listIndex];
  const precProb = hourlyForecastData.precipitation_probability[listIndex];

  return <> here will be hour</>;
}

HourCard.propTypes = {
  hourlyForecastData: PropTypes.object,
  listIndex: PropTypes.number,
  dataUnits: PropTypes.object,
};

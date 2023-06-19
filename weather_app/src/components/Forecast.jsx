import useFetch from "../hooks/useFetch";
import HourForecastList from "./HourForecastList";
import PropTypes from 'prop-types';


export default function Forecast({ location = null }) {
  const hourlyForecastProps =
    "relativehumidity_2m,apparent_temperature,precipitation_probability,precipitation,snow_depth,weathercode,visibility,windspeed_10m,uv_index,uv_index_clear_sky,is_day";
  const dailyForecastProps =
    "weathercode,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,uv_index_clear_sky_max,precipitation_probability_max";

  //get forecast data
  // eslint-disable-next-line no-unused-vars
  const { data, error } = useFetch(
    "forecast",
    {
      queryParams: {
        latitude: location?.latitude,
        longitude: location?.longitude,
        hourly: hourlyForecastProps,
        daily: dailyForecastProps,
        timezone: location?.timezone
      },
      count: 10,
      format: "json",
    },
    [location]
  );


  if (!location) {
    return null;
  }

  return (
    <>
      <HourForecastList forecastData={data}/>
    </>
  );
}


Forecast.propTypes = {
  location: PropTypes.object
}
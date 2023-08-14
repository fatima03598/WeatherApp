import PropTypes from "prop-types";
import HourCard from "./HourCard";
import useFetch from "../hooks/useFetch";

export default function HourForecastList({ location, date }) {
  const hourProps =
    "apparent_temperature,precipitation_probability,snow_depth,weathercode,uv_index,is_day";

  const { data: hourlyForecast, error } = useFetch(
    "forecast",
    {
      queryParams: {
        latitude: location?.latitude,
        longitude: location?.longitude,
        hourly: hourProps,
        timezone: location?.timezone,
        forecast_days: 1,
        start_date: date,
        end_date: date,
      },
      count: 10,
      format: "json",
    },
    [location]
  );

  const hourItems = hourlyForecast.hourly.time.map((hour, index) => (
    <div key={hour}>
      <HourCard
        hourlyForecastData={hourlyForecast.hourly}
        listIndex={index}
        dataUnits={hourlyForecast.hourlyForecast}
      />
    </div>
  ));
  return (
    <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
      {hourItems}
    </ul>
  );
}

HourForecastList.propTypes = {
  date: PropTypes.string,
  location: PropTypes.object,
};

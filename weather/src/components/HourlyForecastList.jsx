import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import HourCard from "./HourCard";
import useFetch from "../hooks/useFetch";
import Carousel from "./Carousel";

export default function HourForecastList({ location, date }) {
  const [hourlyForecast, setHourlyForecast] = useState(null);
  const hourProps =
    "apparent_temperature,precipitation_probability,weathercode,uv_index,is_day";

  const { data } = useFetch(
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

  useEffect(() => {
    if (data) {
      setHourlyForecast(data);
    } else setHourlyForecast(null);
  }, [data]);

  if (!location || !hourlyForecast) return null;

  const hourItems = hourlyForecast.hourly.time.map((hour, index) => (
    <article key={hour} className="min-w-52 w-72 h-60 mx-3">
      <HourCard
        hourlyForecastData={hourlyForecast.hourly}
        listIndex={index}
        dataUnits={hourlyForecast.hourly_units}
      />
    </article>
  ));
  return (
    <ul className="h-80 w-10/12  flex p-2 rounded-box">
      <Carousel items={hourItems} />
    </ul>
  );
}

HourForecastList.propTypes = {
  date: PropTypes.string,
  location: PropTypes.object,
};

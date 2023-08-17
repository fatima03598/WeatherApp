import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import DailyForcastList from "./DailyForcastList";
import ExpandedForecast from "./ExpandedForecast";
import useFetch from "../hooks/useFetch";

export default function Forecast({ location }) {
  console.log(location);
  const [focusedDay, setFocusedDay] = useState("");

  const [dailyForecast, setDailyForecast] = useState(null);

  const dailyProperties =
    "weathercode,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max";

  const { data, error } = useFetch(
    "forecast",
    {
      queryParams: {
        latitude: location?.latitude,
        longitude: location?.longitude,
        daily: dailyProperties,
        timezone: location?.timezone,
      },
    },
    [location]
  );

  useEffect(() => {
    if (data) {
      console.log(data);
      setDailyForecast(data);
    } else setDailyForecast(null);
  }, [data]);

  if (!location || !dailyForecast) return null;

  return (
    <>
      {focusedDay ? (
        <ExpandedForecast
          dailyForecastData={dailyForecast.daily}
          onSelectDay={setFocusedDay}
          location={location}
        />
      ) : (
        <DailyForcastList
          dailyForecastData={dailyForecast}
          onSelectDay={setFocusedDay}
        />
      )}
    </>
  );
}

Forecast.propTypes = {
  location: PropTypes.object,
};

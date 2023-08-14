import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import DailyForcastList from "./DailyForcastList";
import ExpandedForecast from "./ExpandedForecast";
import useFetch from "../hooks/useFetch";

export default function Forecast({ location }) {
  const [focusedDay, setFocusedDay] = useState("");

  const dailyProperties =
    "weathercode,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,uv_index_max,precipitation_probability_max";

  const { data: dailyForecast, error } = useFetch(
    "forecast",
    {
      queryParams: {
        latitude: location?.latitude,
        longitude: location?.longitude,
        daily: dailyProperties,
        timezone: location?.timezone,
      },
      count: 10,
      format: "json",
    },
    [location]
  );

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

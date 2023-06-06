import { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import HourForecastList from "./HourForecastList";

// eslint-disable-next-line react/prop-types
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
      },
      count: 10,
      format: "json",
    },
    [location]
  );

  useEffect(() => {
    if (data?.results) {
      console.log(data);
    }
  }, [data]);

  if (!location) {
    return null;
  }
  // const listItems = options.map((option) => (
  //   <li
  //     key={option.id}
  //     onClick={() => onSelectedLocation(option)}
  //   >
  //     <button>
  //       {option.name}, {option.country}
  //     </button>
  //   </li>
  // ));
  return (
    <>
      <HourForecastList />
    </>
    //   <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
    //     {listItems}
    //   </ul>
  );
}

import PropTypes from "prop-types";
import Forecast from "../components/Forecast";
import { useMemo } from "react";
import { useLocation } from "react-router-dom";

export default function WeatherPage() {
  function useQuery() {
    const { search } = useLocation();

    return useMemo(() => new URLSearchParams(search), [search]);
  }

  let query = useQuery();

  const location = {
    latitude: query.get("latitude"),
    longitude: query.get("longitude"),
    timezone: query.get("timezone"),
  };

  return <Forecast location={location} />;
}

WeatherPage.propTypes = {
  location: PropTypes.object,
};

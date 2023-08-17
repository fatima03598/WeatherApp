import PropTypes from "prop-types";
import Forecast from "../components/Forecast";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function WeatherPage() {
  const { state } = useLocation();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (state && Object.keys(state).length > 0) {
      const { latitude, longitude, timezone } = state;

      setLocation({
        latitude,
        longitude,
        timezone,
      });
    }
  }, [state]);

  if (!location) return null;

  return (
    <div className="h-full flex justify-center p-3">
      <Forecast location={location} />
    </div>
  );
}

WeatherPage.propTypes = {
  location: PropTypes.object,
};

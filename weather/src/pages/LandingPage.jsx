import LocationSearchBar from "../components/LocationSearchBar";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [location, setLocation] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (location) {
      navigate(`/${location.name}`, {
        state: {
          latitude: location?.latitude,
          longitude: location?.longitude,
          timezone: location?.timezone,
        },
      });
    }
  }, [location]);

  return (
    <div
      style={{ height: "65%" }}
      className={"flex flex-col " + (location ? "" : "justify-center")}
    >
      <LocationSearchBar location={location} onLocationChange={setLocation} />
      <Outlet />
    </div>
  );
}

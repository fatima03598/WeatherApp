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
    <div className="w-full h-[85vh] p-5 flex flex-col">
      <section className="flex-none w-full">
        <LocationSearchBar location={location} onLocationChange={setLocation} />
      </section>
      <section className="flex-1 w-full">
        <Outlet />
      </section>
    </div>
  );
}

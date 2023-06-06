import LocationSearchBar from "../components/LocationSearchBar";
import Forecast from "../components/Forecast";
import { useState } from "react";

export default function LandingPage() {
  const [location, setLocation] = useState(null);

  return (
    <div
      style={{ height: "65%" }}
      className={"flex flex-col " + (location ? "" : "justify-center")}
    >
      <LocationSearchBar location={location} onLocationChange={setLocation} />
      <Forecast location={location} />
    </div>
  );
}

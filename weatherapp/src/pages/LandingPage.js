import LocationSearchBar from "../components/LocationSearchBar";
import { useState } from "react";

export default function LandingPage() {
  const [location, setLocation] = useState(null);

  return (
    <>
      <div className={"flex flex-col " + (location ? "" : "justify-center")}>
        <LocationSearchBar
          location={location}
          onLocationChange={setLocation}
        />
      </div>
    </>
  );
}

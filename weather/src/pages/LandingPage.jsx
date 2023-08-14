import LocationSearchBar from "../components/LocationSearchBar";
import Forecast from "../components/Forecast";
import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const [location, setLocation] = useState(null);

  //const navigate = useNavigate();

  useEffect(() => {
    console.log(location);

    // return () => {
    //     mounted.current = false;
    // };
  }, [location]);
  //const handleClick = () => navigate('/goodbye');

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

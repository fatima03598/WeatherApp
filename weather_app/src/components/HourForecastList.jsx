import HourForecastCard from "./HourForecastCard";
import { useState } from "react";
import { useRef } from "react";
import PropTypes from "prop-types";

export default function HourForecastList({ forecastData = null }) {
  const carousel = useRef(null);
  const [scrollVal, setScrollVal] = useState(0);

  if (!forecastData) {
    return null;
  }

  const moveForward = () => {
    setScrollVal(scrollVal + 30);
    console.log(carousel.current);
    carousel.current.scrollBy({
      top: 0,
      left: scrollVal,
      behavior: "smooth",
    });
  };

  const hourForecastList = forecastData.hourly.time.map((time, index) => (
    <li key={time}>
      <HourForecastCard hourIndex={index} forecastData={forecastData} />
    </li>
  ));
  return (
    <>
      <button
        onClick={moveForward}
        style={{
          background: "red",
        }}
      >
        {" "}
        Move
      </button>
      <div className="carousel carousel-center rounded-box" ref={carousel}>
        {hourForecastList}
      </div>
    </>
  );
}

HourForecastList.propTypes = {
  forecastData: PropTypes.object,
};

import HourForecastCard from "./HourForecastCard";
import Carousel from "./Carousel";
//import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function HourForecastList({ forecastData = null }) {
  // let options = {
  //   root: carousel.current,
  //   rootMargin: "0px",
  //   threshold: 1.0,
  // };

  // let observer = new IntersectionObserver(() => {}, options);

  // useEffect(() => {
  //   document.querySelectorAll(".carousel-item").forEach((card) => {
  //     observer.observe(card);
  //   });

  //   // return () => {
  //   //     mounted.current = false;
  //   // };
  // }, []);

  if (!forecastData) {
    return null;
  }

  const hourForecastList = forecastData.hourly.time.map((time, index) => (
    <HourForecastCard
      key={time}
      hourIndex={index}
      forecastData={forecastData}
    />
  ));
  return (
    <div
      className="m-2"
      style={{
        height: "35vh",
        width: "80%",
      }}
    >
      <Carousel items={hourForecastList} />
    </div>
  );
}

HourForecastList.propTypes = {
  forecastData: PropTypes.object,
};

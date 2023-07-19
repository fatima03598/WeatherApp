import PropTypes from "prop-types";
import YourSvg from "../assets/weather-icons/day.svg";
export default function ForecastCard({ forecastData, hourIndex }) {
  console.log(forecastData);

  return (
    <article className="hourForecast card h-full w-48 mx-1.5 bg-base-100 shadow-md">
      <section className="h-1/5 flex justify-between">
        <img src={YourSvg} alt="Your SVG" />
        <p>Time</p>
      </section>
      <section
        className=" h-2/5 flex justify-center"
        style={{ transform: "scale(1.7)" }}
      >
        <img src={YourSvg} alt="Your SVG" />
      </section>
      <section className="h-2/5"></section>
    </article>
  );
}

ForecastCard.propTypes = {
  forecastData: PropTypes.object,
  hourIndex: PropTypes.number,
};

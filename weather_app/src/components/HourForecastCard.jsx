import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import dayIcon from "../assets/weather-icons/day.svg";
import nightIcon from "../assets/weather-icons/night.svg";
import { getOpenWeatherIcon } from "../utils/weatherIconsUitil";

export default function ForecastCard({ forecastData, hourIndex }) {
  const [hour, setHour] = useState("");
  const [date, setDate] = useState("");
  const [isDay, setIsDay] = useState(false);
  const [weatherCode, setWeatherCode] = useState(0);
  const [weatherDetails, setWeatherDetails] = useState([]);

  useEffect(() => {
    const dayMapping = {
      0: "Sunday",
      1: "Monday",
      2: "Tuesday",
      3: "Wednesday",
      4: "Thursday",
      5: "Friday",
      6: "Saturday",
    };

    const updateDate = (timeString) => {
      const dateObj = new Date(timeString);

      let newHour =
        String(dateObj.getHours()).padStart(2, "0") +
        ":" +
        String(dateObj.getMinutes()).padStart(2, "0");
      let newDate = dayMapping[dateObj.getDay()] + " " + dateObj.getDate();

      setHour(newHour);
      setDate(newDate);
    };

    if (forecastData) {
      const hourData = forecastData.hourly;
      console.log(hourData);
      updateDate(hourData.time[hourIndex]);

      if (hourData.is_day[hourIndex] == 1) {
        setIsDay(true);
      }

      setWeatherCode(hourData.weathercode[hourIndex]);
    }
  }, [forecastData, hourIndex]);

  const detailsList = weatherDetails.map((detail) => (
    <li key={detail.title}>
      {detail.title} : {detail.value}{" "}
    </li>
  ));

  return (
    <article
      className="hourForecast card h-full w-48 mx-1.5 bg-base-100 shadow-md"
      style={{ backgroundColor: isDay ? "#f7f9fd" : "#ebf0fd" }}
    >
      <section className="h-1/5 flex justify-center pt-3">
        <p>
          <span> {date}</span>, <span className="font-semibold"> {hour}</span>
        </p>
      </section>
      <section
        className=" h-2/5 flex justify-center"
        style={{ transform: "scale(1.7)" }}
      >
        <img
          src={
            isDay
              ? getOpenWeatherIcon(weatherCode).day
              : getOpenWeatherIcon(weatherCode).night
          }
          alt="Your SVG"
        />
      </section>
      <section className="h-2/5">
        <ul>{detailsList}</ul>
      </section>
    </article>
  );
}

ForecastCard.propTypes = {
  forecastData: PropTypes.object,
  hourIndex: PropTypes.number,
};

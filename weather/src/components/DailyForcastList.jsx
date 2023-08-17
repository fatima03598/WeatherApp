import PropTypes from "prop-types";
import { useRef, useEffect, useState } from "react";
import DayCard from "./DayCard";
import Carousel from "./Carousel";

export default function DailyForcastList({ dailyForecastData, onSelectDay }) {
  let listElemRef = useRef();
  //const isOveflown = false;
  const [isOveflown, setIsOverflown] = useState(false);

  const resizeObserver = new ResizeObserver((entries) => {
    console.log(entries);
    console.log("use effect");
    const elem = listElemRef.current;
    if (elem.scrollWidth > elem.clientWidth) {
      setIsOverflown(true);
    } else setIsOverflown(false);
  });

  useEffect(() => {
    if (listElemRef.current) {
      resizeObserver.observe(listElemRef.current);
    }

    return () => {
      return resizeObserver.unobserve(listElemRef.current);
    };
  }, []);

  const dayItems = dailyForecastData.daily.time.map((date, index) => (
    <article
      key={date}
      onClick={() => onSelectDay(date)}
      className="min-w-40 w-64 h-48 mx-3"
    >
      <DayCard
        dailyForecastData={dailyForecastData.daily}
        listIndex={index}
        dataUnits={dailyForecastData.daily_units}
      />
    </article>
  ));
  return (
    <ul ref={listElemRef} className="h-64 w-10/12  flex p-2 rounded-box">
      {isOveflown ? <Carousel items={dayItems} /> : dayItems}
    </ul>
  );
}

DailyForcastList.propTypes = {
  dailyForecastData: PropTypes.object,
  onSelectDay: PropTypes.func,
};

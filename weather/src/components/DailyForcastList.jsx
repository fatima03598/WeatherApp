import PropTypes from "prop-types";
import DayCard from "./DayCard";
import Carousel from "./Carousel";

export default function DailyForcastList({ dailyForecastData, onSelectDay }) {
  const dayItems = dailyForecastData.daily.time.map((date, index) => (
    <article
      key={date}
      onClick={() => onSelectDay(date)}
      className="min-w-64 w-72 h-60 mx-3 cursor-pointer"
    >
      <DayCard
        dailyForecastData={dailyForecastData.daily}
        listIndex={index}
        dataUnits={dailyForecastData.daily_units}
      />
    </article>
  ));
  return (
    <ul className="h-80 w-10/12  flex p-2 rounded-box">
      <Carousel items={dayItems} />
    </ul>
  );
}

DailyForcastList.propTypes = {
  dailyForecastData: PropTypes.object,
  onSelectDay: PropTypes.func,
};

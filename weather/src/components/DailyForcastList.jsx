import PropTypes from "prop-types";
import DayCard from "./DayCard";

export default function DailyForcastList({ dailyForecastData, onSelectDay }) {
  const dayItems = dailyForecastData.daily.time.map((date, index) => (
    <div key={date} onClick={() => onSelectDay(date)}>
      <DayCard
        dailyForecastData={dailyForecastData.daily}
        listIndex={index}
        dataUnits={dailyForecastData.daily_units}
      />
    </div>
  ));
  return (
    <ul className="menu menu-compact lg:menu-normal bg-base-100 w-full p-2 rounded-box">
      {dayItems}
    </ul>
  );
}

DailyForcastList.propTypes = {
  dailyForecastData: PropTypes.object,
  onSelectDay: PropTypes.func,
};

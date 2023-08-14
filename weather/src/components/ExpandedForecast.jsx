import PropTypes from "prop-types";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import HourForecastList from "./HourlyForecastList";

export default function ExpandedForecast({
  dailyForecastData,
  onSelectDay,
  location,
}) {
  const [selectedTab, setTab] = useState("");
  const handleChange = (event, newValue) => {
    setTab(newValue);
    onSelectDay(getDate(newValue));
  };

  const getDate = (dateIndex) => {
    return dailyForecastData.time[dateIndex];
  };

  const tabList = dailyForecastData.time.map((date, dateIndex) => (
    <Tab label={getDate(dateIndex)} value={dateIndex} key={date} />
  ));

  const tabContentList = dailyForecastData.time.map((date, dateIndex) => (
    <TabPanel value={dateIndex} key={date}>
      <HourForecastList date={date} location={location} />
      {date}
    </TabPanel>
  ));

  return (
    <>
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={selectedTab}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {tabList}
            </TabList>
          </Box>
          {tabContentList}
        </TabContext>
      </Box>
    </>
  );
}

ExpandedForecast.propTypes = {
  dailyForecastData: PropTypes.object,
  onSelectDay: PropTypes.func,
  location: PropTypes.object,
};

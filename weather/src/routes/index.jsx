import App from "../App";
import WeatherPage from "../pages/WeatherPage";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "location/:latitude/:longitude/:timezone",
    element: <WeatherPage />,
  },
];

export default routes;

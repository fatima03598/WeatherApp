import LandingPage from "../pages/LandingPage";
import WeatherPage from "../pages/WeatherPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "location/:latitude/:longitude/:timezone",
        element: <WeatherPage />,
      },
    ],
  },
];

export default routes;

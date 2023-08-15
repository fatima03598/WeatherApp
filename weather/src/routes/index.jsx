import LandingPage from "../pages/LandingPage";
import WeatherPage from "../pages/WeatherPage";

const routes = [
  {
    path: "/",
    element: <LandingPage />,
    //errorElement: <ErrorPage />,
    children: [
      {
        path: "/:name",
        element: <WeatherPage />,
      },
    ],
  },
];

export default routes;

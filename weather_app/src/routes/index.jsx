import App from "../App";
import WorldPage from "../pages/WorldPage";

const routes = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/world",
    element: <WorldPage />,
  },
];

export default routes;

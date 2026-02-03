import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import NotFound from "../pages/404";
import App from "../App"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    //   {
    //     path: "pokemon/:id",
    //     element: <DetailsPokemon />,
    //   },
    //   {
    //     path: "mentions-legales",
    //     element: <MentionsLegales />,
    //   },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
            
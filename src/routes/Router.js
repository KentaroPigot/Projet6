import Location from "../components/Location/Location.js";
import About from "../components/About/About.js";
import Home from "../components/home/Home.js";
import ErrorPage from "../components/ErrorPage/ErrorPage.js";
import { RouterProvider, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout.js";
import {
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import LocationsContext from "../context/locations-context.js";
import { useContext } from "react";

function Router() {
  const locationsCtx = useContext(LocationsContext);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/:id"
          loader={async ({ params }) => {
            const housing = locationsCtx.find((location) => {
              return location.id === params.id;
            });
            if (housing) {
              return housing;
            }
            throw new Error("Housing not found");
          }}
          element={<Location />}
          errorElement={<ErrorPage />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default Router;

/* eslint-disable react-refresh/only-export-components */
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTE_PATHS } from "@constants/route";
import RootPage from "@pages/RootPage";
import Route from "./route";

const Homepage = lazy(() => import("@pages/Homepage"));
const AboutMePage = lazy(() => import("@pages/AboutMePage"));
const SpecGearPage = lazy(() => import("@pages/SpecGearPage"));

const router = createBrowserRouter(
  [
    {
      path: ROUTE_PATHS.HOME,
      element: <RootPage />,
      children: [
        {
          index: true,
          element: (
            <Route title={"Home"}>
              <Homepage />
            </Route>
          ),
        },
        {
          index: true,
          path: ROUTE_PATHS.ABOUT_ME,
          element: (
            <Route title={"About me"}>
              <AboutMePage />
            </Route>
          ),
        },
        {
          index: true,
          path: ROUTE_PATHS.SPEC_AND_GEAR,
          element: (
            <Route title={"Specs & Gears"}>
              <SpecGearPage />
            </Route>
          ),
        },
      ],
    },
  ],
  { basename: "/" }
);

export default router;

import React, { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../components/layout";
import { ErrorBoundary, fetchDictionary } from "../utils";
import NotFound from "../utils/hoc/NotFound";
import DashBoardLayout from "../components/layout/dashboardlayout/DashBoardLayout";
import {Urls} from "../types"
import DashBoardHome from "../pages/DashBoardHome";
import DashBoardUserProfile from "../pages/DashBoardUserProfile";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));

export const element = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Home />,
				errorElement: <ErrorBoundary />,
				hasErrorBoundary: true,
				loader: fetchDictionary,
			},

			{
				path: "/about",
				element: <About />,
				errorElement: <ErrorBoundary />,
				hasErrorBoundary: true,
			},
		],
	},

	{
		path: `${Urls.user}`,
		element: <DashBoardLayout />,
		children: [
			{
				index: true,
				element: <DashBoardHome />
			},
			{
				path:`${Urls.user}/profile`,
				element: <DashBoardUserProfile />
			}
		]
	},

	{
		path: "*",
		element: <NotFound />,
	},
]);
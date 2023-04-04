import { lazy } from "react";
import {createBrowserRouter} from "react-router-dom"
import { ErrorBoundary, fetchDictionary } from "../utils";
import { NotFound } from "../utils";
import { HomeLayout } from "../components";

const Home = lazy(()=> import("../pages/Home"));
const About = lazy(()=> import("../pages/About"))

export const element = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		children: [
			{
				index: true,
				element: <Home/>,
				errorElement: <ErrorBoundary />,
				hasErrorBoundary: true,
				loader: fetchDictionary
			},

			{
				path: "/about",
				element: <About />,
				errorElement: <ErrorBoundary/>,
				hasErrorBoundary: true,	
			},

	
			
		],
	},

	{
		path: "*",
		element: <NotFound />
	}
])
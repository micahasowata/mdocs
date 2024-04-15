import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Docs from "./layout/Docs";
import Index from "./pages/Index";
import AuthRoutes from "./pages/docs/AuthRoutes";
import ErrorPage from "./pages/docs/ErrorPage";
import Intro from "./pages/docs/Intro";

const App = () => {
	const helmetContext = {};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Index />,
		},
		{
			path: "/docs",
			element: <Docs />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Intro />,
				},
				{
					path: "/docs/auth",
					element: <AuthRoutes />,
				},
			],
		},
	]);

	return (
		<HelmetProvider context={helmetContext}>
			<RouterProvider router={router} />
		</HelmetProvider>
	);
};

export default App;

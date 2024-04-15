import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./layout/Main";
import ErrorPage from "./pages/ErrorPage";
import Index from "./pages/Index";

const App = () => {
	const helmetContext = {};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Main />,
			errorElement: <ErrorPage />,
			children: [
				{
					index: true,
					element: <Index />,
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

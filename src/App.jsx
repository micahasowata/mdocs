import { HelmetProvider } from "react-helmet-async";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Docs from "./layout/Docs";
import Index from "./pages/Index";
import AuthRoutes from "./pages/docs/AuthRoutes";
import ErrorPage from "./pages/docs/ErrorPage";
import Intro from "./pages/docs/Intro";
import PostsRoutes from "./pages/docs/PostsRoutes";
import UsersRoutes from "./pages/docs/UsersRoutes";

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
				{
					path: "/docs/users",
					element: <UsersRoutes />,
				},
				{
					path: "/docs/posts",
					element: <PostsRoutes />,
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

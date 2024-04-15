import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);
	return <p>{error.statusText || error.message}</p>;
};

export default ErrorPage;

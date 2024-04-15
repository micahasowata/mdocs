import { Helmet } from "react-helmet-async";

const Head = ({ title }) => {
	return (
		<Helmet>
			<title>Minasa Docs | {title}</title>
		</Helmet>
	);
};

export default Head;

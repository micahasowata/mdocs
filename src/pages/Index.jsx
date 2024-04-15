import Footer from "../components/Footer";
import Head from "../components/Head";
import Navbar from "../components/Navbar";

const Index = () => {
	return (
		<>
			<Head title={"Welcome"} />
			<Navbar />
			<div className="h-screen">
				<h2>Index</h2>
			</div>
			<Footer />
		</>
	);
};

export default Index;

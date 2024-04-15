import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
	return (
		<>
			<Navbar />
			<div className="grid grid-cols-12 min-h-dvh">
				<Outlet />
			</div>
			<Footer />
		</>
	);
};

export default Main;

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SideNavBar from "../components/SideNavBar";

const Docs = () => {
	return (
		<>
			<Navbar />
			<div className="grid grid-cols-12 min-h-dvh select-text">
				<div className="grid col-start-1 col-end-3 shadow-sm shadow-black p-3">
					<SideNavBar />
				</div>
				<div className="grid col-start-3 col-end-13 p-3">
					<Outlet />
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Docs;

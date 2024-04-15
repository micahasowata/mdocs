import { NavLink } from "react-router-dom";
import wordmarkWhite from "../assets/wordmarkWhite.svg";
const Navbar = () => {
	return (
		<nav className="bg-black text-white">
			<ul className="flex flex-row justify-between p-3">
				<NavLink to={"/"}>
					<img
						src={wordmarkWhite}
						alt="Minasa Icon with the word Developers in white to its left"
					/>
				</NavLink>
				<div>
					<NavLink to={"/docs"} className="font-medium">
						Docs
					</NavLink>
				</div>
			</ul>
		</nav>
	);
};

export default Navbar;

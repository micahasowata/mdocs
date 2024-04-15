import { NavLink } from "react-router-dom";
const SideNavBar = () => {
	return (
		<>
			<div>
				<ul className="flex flex-col scroll-smooth">
					<NavLink
						exact
						to={"/docs"}
						className={({ isActive }) =>
							isActive ? "font-bold" : "font-medium"
						}
					>
						Introduction
					</NavLink>
					<NavLink
						exact
						to={"/docs/auth"}
						className={({ isActive }) =>
							isActive ? "font-bold" : "font-medium"
						}
					>
						Auth
					</NavLink>
				</ul>
			</div>
		</>
	);
};

export default SideNavBar;

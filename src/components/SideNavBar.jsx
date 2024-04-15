import { NavLink } from "react-router-dom";
const SideNavBar = () => {
	return (
		<>
			<div>
				<ul className="flex flex-col scroll-smooth">
					<NavLink
						to={"/docs"}
						className={({ isActive }) =>
							isActive ? "font-bold" : "font-medium"
						}
						end
					>
						Introduction
					</NavLink>

					<h2>API Reference</h2>
					<NavLink
						to={"/docs/auth"}
						className={({ isActive }) =>
							isActive ? "font-bold" : "font-medium"
						}
					>
						Auth
					</NavLink>
					<NavLink
						to={"/docs/users"}
						className={({ isActive }) =>
							isActive ? "font-bold" : "font-medium"
						}
					>
						Users
					</NavLink>
					<NavLink
						to={"/docs/posts"}
						className={({ isActive }) =>
							isActive ? "font-bold" : "font-medium"
						}
					>
						Post
					</NavLink>
				</ul>
			</div>
		</>
	);
};

export default SideNavBar;

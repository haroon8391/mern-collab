import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Link, NavLinkRenderProps } from "react-router-dom";
import { logout } from "../store/authSlice";

const Navbar: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const navLinkClass = ({ isActive }: NavLinkRenderProps) => {
		const navLinkStyles = `${
			isActive
				? "bg-gray-100 text-black hover:bg-gray-500 hover:text-white"
				: "text-gray-300 hover:bg-gray-700 text-white"
		}   px-5 py-2 rounded-md text-sm font-bold`;
		return isActive ? ` ${navLinkStyles}` : ` ${navLinkStyles}`;
	};

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	const closeMenu = () => setIsOpen(false);

	const handleLogout = () => {
		dispatch(logout());
		closeMenu();
	};

	const emptyFunction = () => {};

	const isAuth = useSelector((state: any) => state.authSlice.isAuthenticated);
	const NavLinks = [
		{ title: "Home", path: "/" },
		{ title: "Create Job", path: "/create-job" },
		{ title: "Job List", path: "/jobs" },
		{ title: "Dashboard", path: "/dashboard" },
		{
			title: isAuth ? "Logout" : "Login",
			path: isAuth ? "/" : "/login",
			onClick: isAuth ? handleLogout : emptyFunction,
		},
	];

	return (
		<nav className="bg-gray-800">
			<div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<div className="flex-shrink-0">
							<Link to="/" className="text-white text-2xl font-bold">
								Job Portal
							</Link>
						</div>
						<div className="hidden md:block">
							<div className="ml-20 flex items-baseline space-x-4">
								{NavLinks.map((link) => (
									<NavLink
										key={link.title}
										to={link.path}
										className={navLinkClass}
										onClick={link.onClick}
									>
										{link.title}
									</NavLink>
								))}
							</div>
						</div>
					</div>
					<div className="-mr-2 flex md:hidden">
						<button
							onClick={toggleMenu}
							type="button"
							className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
							aria-controls="mobile-menu"
							aria-expanded="false"
						>
							<span className="sr-only">Open main menu</span>
							{isOpen ? (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="block h-6 w-6"
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16m-7 6h7"
									/>
								</svg>
							)}
						</button>
					</div>
				</div>
			</div>

			<div
				className={`${isOpen ? "block" : "hidden"} md:hidden`}
				id="mobile-menu"
			>
				<div className="flex flex-col justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
					{NavLinks.map((link) => (
						<NavLink
							onClick={closeMenu}
							key={link.title}
							to={link.path}
							className={navLinkClass}
						>
							{link.title}
						</NavLink>
					))}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

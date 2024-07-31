import { TypeLink } from "./Navbar";

export const getNavLinks = (isAdmin: boolean, isAuth: boolean): TypeLink[] => {
	const adminLinks: TypeLink[] = [
		{ title: "Home", path: "/" },
		{ title: "Create Job", path: "/create-job" },
		{ title: "Dashboard", path: "/dashboard" },
	];

	const userLinks: TypeLink[] = [
		{ title: "Home", path: "/" },
		{ title: "Job List", path: "/jobs" },
	];

	return [
		...(isAdmin ? adminLinks : userLinks),
		{
			title: `${isAuth ? "Logout" : "Login"}`,
			path: "/login",
		},
	];
};

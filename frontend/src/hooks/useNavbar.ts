import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store/authSlice";
import { toast } from "react-toastify";
import { getNavLinks } from "../utils/utility";

const useNavbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	const toggleMenu = () => setIsOpen(!isOpen);
	const closeMenu = () => setIsOpen(false);

	const handleLogout = () => {
		dispatch(logout());
		toast("Logged out successfully", { type: "success" });
		closeMenu();
	};

	const isAuth = useSelector((state: any) => state.authSlice.isAuthenticated);
	const isAdmin = useSelector((state: any) => state.authSlice.isAdmin);

	const navLinks = getNavLinks(isAdmin, isAuth);

	return {
		isOpen,
		toggleMenu,
		closeMenu,
		handleLogout,
		navLinks,
		isAuth,
	};
};

export default useNavbar;

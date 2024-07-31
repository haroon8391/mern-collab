import { FC } from "react";
import { NavLink } from "react-router-dom";

interface NavLinkProps {
	title: string;
	path: string;
	onClick?: () => void;
}

const navLinkClass = ({ isActive }: { isActive: boolean }) => {
	const navLinkStyles = `${
		isActive
			? "bg-gray-100 text-black hover:bg-gray-500 hover:text-white"
			: "text-gray-300 hover:bg-gray-700 text-white"
	}   px-5 py-2 rounded-md text-sm font-bold`;
	return isActive ? ` ${navLinkStyles}` : ` ${navLinkStyles}`;
};

// Navlink Component
const NavLinkComponent: FC<NavLinkProps> = ({
	title,
	path,
	onClick,
}: NavLinkProps) => {
	return (
		<NavLink to={path} className={navLinkClass} onClick={onClick}>
			{title}
		</NavLink>
	);
};

export default NavLinkComponent;

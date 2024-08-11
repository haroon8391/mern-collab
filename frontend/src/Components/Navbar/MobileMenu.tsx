import { FC } from "react";
import NavLinkComponent from "./NavLinkComponent";
import { TypeLink } from "./Navbar";

interface MobileMenuProps {
<<<<<<< HEAD
	commonLinks: TypeLink[];
=======
	navLinks: TypeLink[];
>>>>>>> test-branch2
	handleLogout: () => void;
	closeMenu: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({
<<<<<<< HEAD
	commonLinks,
=======
	navLinks,
>>>>>>> test-branch2
	closeMenu,
	handleLogout,
}) => {
	return (
		<div className="md:hidden">
			<div className="flex flex-col justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
<<<<<<< HEAD
				{commonLinks.map((link) => (
=======
				{navLinks.map((link) => (
>>>>>>> test-branch2
					<NavLinkComponent
						key={link.title}
						title={link.title}
						path={link.path}
						onClick={link.title === "Logout" ? handleLogout : closeMenu}
					/>
				))}
			</div>
		</div>
	);
};
export default MobileMenu;

import { FC } from "react";
import NavLinkComponent from "./NavLinkComponent";
import { TypeLink } from "./Navbar";

interface MobileMenuProps {
	commonLinks: TypeLink[];
	handleLogout: () => void;
	closeMenu: () => void;
}

const MobileMenu: FC<MobileMenuProps> = ({
	commonLinks,
	closeMenu,
	handleLogout,
}) => {
	return (
		<div className="md:hidden">
			<div className="flex flex-col justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
				{commonLinks.map((link) => (
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

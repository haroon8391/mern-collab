import { FC } from "react";
import NavLinkComponent from "./NavLinkComponent";
import { TypeLink } from "./Navbar";

interface DesktopMenuProps {
	navLinks: TypeLink[];
}

const DesktopMenu: FC<DesktopMenuProps> = ({ navLinks }) => (
	<div className="hidden md:block">
		<div className="ml-20 flex items-baseline space-x-4">
			{navLinks.map((link) => (
				<NavLinkComponent
					key={link.title}
					path={link.path}
					title={link.title}
				/>
			))}
		</div>
	</div>
);

export default DesktopMenu;

import { FC } from "react";
import MobileMenu from "./MobileMenu";
import MenuButton from "./MenuButton";
import DesktopMenu from "./DesktopMenu";
import Logo from "./Logo";
import useNavbar from "../../hooks/useNavbar";

export type TypeLink = {
	title: string;
	path: string;
};

const Navbar: FC = () => {
	const { isOpen, toggleMenu, closeMenu, handleLogout, navLinks } = useNavbar();

	return (
		<nav className="bg-gray-800">
			<div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="flex items-center">
						<Logo />
<<<<<<< HEAD
						<DesktopMenu navLinks={navLinks} />
=======
						<DesktopMenu navLinks={navLinks} handleLogout={handleLogout} />
>>>>>>> test-branch2
					</div>
					<MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
				</div>
			</div>

			<div
				className={`${isOpen ? "block" : "hidden"} md:hidden`}
				id="mobile-menu"
			>
				<div className="flex flex-col justify-center px-2 pt-2 pb-3 space-y-1 sm:px-3">
					<MobileMenu
<<<<<<< HEAD
						commonLinks={navLinks}
=======
						navLinks={navLinks}
>>>>>>> test-branch2
						handleLogout={handleLogout}
						closeMenu={closeMenu}
					/>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

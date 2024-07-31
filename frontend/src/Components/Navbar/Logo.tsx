import { FC } from "react";
import { Link } from "react-router-dom";

const Logo: FC = () => (
	<div className="flex-shrink-0">
		<Link to="/" className="text-white text-2xl font-bold">
			Job Portal
		</Link>
	</div>
);

export default Logo;

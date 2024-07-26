import { ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

interface Props {
	authentication: boolean;
	children: ReactNode;
}

const ProtectedRoute = ({ children, authentication = true }: Props) => {
	const navigate = useNavigate();
	const [loading, setLoading] = useState(true);
	const authStatus = useSelector(
		(state: any) => state.authSlice.isAuthenticated
	);

	useEffect(() => {
		if (authentication && authStatus !== authentication) {
			navigate("/login");
		} else if (!authentication && authStatus !== authentication) {
			navigate("/");
		}
		setLoading(false);
	}, [authStatus, navigate, authentication]);

	return loading ? <h1>Loading...</h1> : <>{children}</>;
};

export default ProtectedRoute;

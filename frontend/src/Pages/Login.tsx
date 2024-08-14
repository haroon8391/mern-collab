// src/components/Register.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import loginService from "../services/loginService";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";
import { toast } from "react-toastify";

const Login: React.FC = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	// Handler for form submission
	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const credentials = { email, password };

		try {
			const userData = await loginService.login(credentials);
			dispatch(login(userData));
			toast("Login successful", { type: "success" });
			navigate("/");
		} catch (error) {
			console.log("Error logging in", error);
			toast("Invalid email or password", { type: "error" });
		}
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-100">
			<div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
				<h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
				<form onSubmit={handleSubmit} className="space-y-4">
					<div>
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<div className="relative mt-1">
							<input
								id="password"
								type={showPassword ? "text" : "password"}
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm pr-10"
								required
							/>
							<span
								className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
								onClick={() => setShowPassword(!showPassword)}
							>
								{showPassword ? (
									<svg
										className="h-5 w-5 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
										/>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M2.458 12C3.732 7.943 7.523 5 12 5c4.477 0 8.268 2.943 9.542 7-.014.045-.03.087-.045.132-.207.619-.634 1.304-1.275 1.933-.64.628-1.426 1.195-2.265 1.673a11.056 11.056 0 01-2.422.986c-.387.104-.78.19-1.176.257-.796.13-1.619.193-2.459.193s-1.663-.063-2.459-.193a11.056 11.056 0 01-1.176-.257 11.056 11.056 0 01-2.422-.986c-.839-.478-1.625-1.045-2.265-1.673-.641-.629-1.068-1.314-1.275-1.933a11.056 11.056 0 01-.045-.132z"
										/>
									</svg>
								) : (
									<svg
										className="h-5 w-5 text-gray-500"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7 .016-.045.032-.087.045-.132.207-.619.634-1.304 1.275-1.933.64-.628 1.426-1.195 2.265-1.673a11.056 11.056 0 012.422-.986c.387-.104.78-.19 1.176-.257.796-.13 1.619-.193 2.459-.193s1.663.063 2.459.193a11.056 11.056 0 011.176.257 11.056 11.056 0 012.422.986c.839.478 1.625 1.045 2.265 1.673.641.629 1.068 1.314 1.275 1.933.015.045.031.087.045.132-.311.905-.829 1.803-1.54 2.643a9.862 9.862 0 01-2.832 2.182M13.875 18.825a2.49 2.49 0 00-.375-.475l-3.732-3.732M3 3l18 18"
										/>
									</svg>
								)}
							</span>
						</div>
					</div>
					<button
						type="submit"
						className="w-full bg-gradient-to-r from-indigo-500 via-purple-500 to bg-pink-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-gradient-to-r hover:from-pink-500 hover:via-purple-500 hover:to-indigo-500 hover:font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
					>
						Login
					</button>
					<div className="mt-4 flex justify-center">
						<Link to={"/register"} className="text-blue-500 hover:underline">
							Go to Register Page
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Login;

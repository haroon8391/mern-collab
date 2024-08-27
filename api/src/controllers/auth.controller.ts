import { Request, Response } from "express";
import authService from "../services/authService";

// POST /api/v1/auth/login
const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;
	const userData = await authService.loginUser(email, password);
	res.status(200).json(userData);
};

// POST /api/v1/auth/register
const register = async (req: Request, res: Response) => {
	const userData = await authService.registerUser(req.body);
	res
		.status(201)
		.json({ user: { name: userData.name }, token: userData.token });
};

export default {
	login,
	register,
};

import { Request, Response } from "express";

// POST /api/v1/auth/login
const login = async (req: Request, res: Response) => {
	res.json({ message: "Login route" });
};

export default {
	login,
};

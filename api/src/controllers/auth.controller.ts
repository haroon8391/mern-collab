import { Request, Response } from "express";

import User from "../models/User.model";

// POST /api/v1/auth/login
const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ error: "Email and password are required" });
	}

	const userInDb = await User.findOne({ email });
	if (!userInDb) {
		return res.status(401).json({ error: "Invalid email or password" });
	}

	const isPasswordCorrect = await userInDb.comparePassword(password);
	if (!isPasswordCorrect) {
		return res.status(401).json({ error: "Invalid email or password" });
	}

	const token = userInDb.createJWT();
	res.status(200).send({
		name: userInDb.name,
		token,
	});
};

// POST /api/v1/auth/register
const register = async (req: Request, res: Response) => {
	const newUserInstance = new User({ ...req.body });

	const userCreatedInDb = await newUserInstance.save();
	const token = userCreatedInDb.createJWT();

	res.status(201).json({ user: { name: userCreatedInDb.name }, token });
};

export default {
	login,
	register,
};

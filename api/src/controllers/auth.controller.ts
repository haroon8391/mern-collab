import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User.model";
import config from "../utils/config";

// POST /api/v1/auth/login
const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	if (!email || !password) {
		return res.status(400).json({ error: "Email and password are required" });
	}

	const user = await User.findOne({ email });
	if (!user) {
		return res.status(401).json({ error: "Invalid email or password" });
	}

	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect) {
		return res.status(401).json({ error: "Invalid email or password" });
	}

	const userForToken = {
		name: user.name,
		id: user._id,
	};

	const token = jwt.sign(userForToken, config.JWT_SECRET, {
		expiresIn: "1h",
	});

	res.status(200).send({
		token,
		name: user.name,
	});
};

// POST /api/v1/auth/register
const register = async (req: Request, res: Response) => {
	res.status(201).json({ message: "User created" });
};

export default {
	login,
	register,
};

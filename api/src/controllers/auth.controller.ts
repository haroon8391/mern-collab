import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

import User from "../models/User.model";
import config from "../utils/config";

// POST /api/v1/auth/login
const login = async (req: Request, res: Response) => {
	const { email, password } = req.body;

	// Check if email and password are provided
	if (!email || !password) {
		return res.status(400).json({ error: "Email and password are required" });
	}

	// Get user from database
	const user = await User.findOne({ email });
	if (!user) {
		return res.status(401).json({ error: "Invalid email or password" });
	}

	// Check if password is correct
	const passwordCorrect = await bcrypt.compare(password, user.password);
	if (!passwordCorrect) {
		return res.status(401).json({ error: "Invalid email or password" });
	}

	const userForToken = {
		username: user.username,
		id: user._id,
	};

	const token = jwt.sign(userForToken, config.JWT_SECRET, {
		expiresIn: "1h",
	});

	res.status(200).send({
		token,
		username: user.username,
	});
};

export default {
	login,
};

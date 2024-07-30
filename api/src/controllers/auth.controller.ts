import { Request, Response } from "express";
import User from "../models/User.model";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../utils/config";

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
		token,
		name: userInDb.name,
		role: userInDb.admin,
	});
};

// POST /api/v1/auth/register
const register = async (req: Request, res: Response) => {
	const { name, email, password, admin } = req.body;

	const saltRounds = 10;
	const passwordHash = await bcrypt.hash(password, saltRounds);

	const user = new User({
		name,
		email,
		password: passwordHash,
		admin,
	});

	await user.save();

	res.status(201).json({ user: { name: user.name } });
};

export default {
	login,
	register,
};

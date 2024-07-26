import { Request, Response } from "express";
import bcrypt from "bcrypt";
import User from "../models/User.model";

// GET /api/v1/users
const getUsers = async (req: Request, res: Response) => {
	const users = await User.find({});
	res.json(users);
};

// GET /api/v1/users/:id
const getUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	const user = await User.findById(id);
	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	res.json(user);
};

// POST /api/v1/users/:id
const createUser = async (req: Request, res: Response) => {
	const { username, email, password } = req.body;

	// Hash password
	const passwordHash = await bcrypt.hash(password, 10);

	// Create new user
	const newUser = new User({ username, email, password: passwordHash });

	// Save user to database
	const savedUser = await newUser.save();
	res.json(savedUser);
};

// PUT /api/v1/users/:id
const updateUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	const { username, email, password } = req.body;

	const updateObj = {} as any;

	if (username) updateObj["username"] = username;
	if (email) updateObj["email"] = email;
	if (password) {
		const passwordHash = await bcrypt.hash(password, 10);
		updateObj["password"] = passwordHash;
	}

	const user = await User.findByIdAndUpdate(id, updateObj, { new: true });
	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	res.json(user);
};

// DELETE /api/v1/users/:id
const deleteUser = async (req: Request, res: Response) => {
	const { id } = req.params;

	const user = await User.findByIdAndDelete(id);

	if (!user) {
		return res.status(404).json({ message: "User not found" });
	}

	res.json(user);
};

export default {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
};

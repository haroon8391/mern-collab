import { Request, Response } from "express";

// GET /api/v1/users
const getUsers = (req: Request, res: Response) => {
	res.send("GET /users");
};

// GET /api/v1/users/:id
const getUser = (req: Request, res: Response) => {
	res.send("GET /users/:id");
};

// POST /api/v1/users/:id
const createUser = (req: Request, res: Response) => {
	res.send("POST /users");
};

// PUT /api/v1/users/:id
const updateUser = (req: Request, res: Response) => {
	res.send("PUT /users/:id");
};

// DELETE /api/v1/users/:id
const deleteUser = (req: Request, res: Response) => {
	res.send("DELETE /users/:id");
};

export default {
	getUsers,
	getUser,
	createUser,
	updateUser,
	deleteUser,
};

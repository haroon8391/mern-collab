import { Router } from "express";
import usersController from "../controllers/users.controller";

const userRouter = Router();

// Routes
userRouter
	.route("/")
	.get(usersController.getUsers)
	.post(usersController.createUser);

userRouter
	.route("/:id")
	.get(usersController.getUser)
	.put(usersController.updateUser)
	.delete(usersController.deleteUser);

export default userRouter;

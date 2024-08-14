import { Router } from "express";
import {
	getJobs,
	createJob,
	getJob,
	updateJob,
	deleteJob,
} from "../controllers/jobs.controller";
import middleware from "../utils/middleware";

const jobsRouter = Router();

jobsRouter.route("/").get(getJobs).post(middleware.authentication, createJob);

jobsRouter
	.route("/:id")
	.get(getJob)
	.put(middleware.authentication, updateJob)
	.delete(middleware.authentication, deleteJob);

export default jobsRouter;

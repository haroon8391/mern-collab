import { Router } from "express";
import {
	getJobs,
	createJob,
	getJob,
	updateJob,
	deleteJob,
} from "../controllers/jobs.controller";

const jobsRouter = Router();

jobsRouter.route("/").get(getJobs).post(createJob);
jobsRouter.route("/:id").get(getJob).put(updateJob).delete(deleteJob);

export default jobsRouter;

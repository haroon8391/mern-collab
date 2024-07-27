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

jobsRouter.route("/").get(getJobs).post(middleware.tokenVerifier, createJob);

jobsRouter
  .route("/:id")
  .get(getJob)
  .put(middleware.tokenVerifier, updateJob)
  .delete(middleware.tokenVerifier, deleteJob);

export default jobsRouter;

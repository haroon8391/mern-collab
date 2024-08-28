import { Request, Response } from "express";
import jobService from "../services/jobService";

export const getJobs = async (req: Request, res: Response) => {
	const { createdBy } = req.query;
	const jobs = await jobService.getJobs(createdBy as string);
	res.json(jobs);
};

export const getJob = async (req: Request, res: Response) => {
	const { id } = req.params;
	const job = await jobService.getJob(id);
	res.json(job);
};

export const createJob = async (req: Request, res: Response) => {
	const newJob = await jobService.createJob(req.body, req.user?.userId);
	res.json(newJob);
};

export const updateJob = async (req: Request, res: Response) => {
	const { id } = req.params;
	const updatedJob = await jobService.updateJob(id, req.body, req.user?.userId);
	res.json(updatedJob);
};

export const deleteJob = async (req: Request, res: Response) => {
	const { id } = req.params;
	const job = await jobService.deleteJob(id, req.user?.userId.toString());
	res.json(job);
};

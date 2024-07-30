import { Request, Response } from "express";
import Job from "../models/Job.model";

export const getJobs = async (req: Request, res: Response) => {
	const { createdBy } = req.query;

	const queryObject = {
		...(createdBy && { createdBy }),
	};

	const jobs = await Job.find(queryObject);
	res.json(jobs);
};

export const getJob = async (req: Request, res: Response) => {
	const { id } = req.params;

	const job = await Job.findById(id);

	if (!job) {
		return res.status(404).json({ message: "Job not found" });
	}

	res.json(job);
};

export const createJob = async (req: Request, res: Response) => {
	req.body.createdBy = req.user?.userId;
	const job = new Job(req.body);
	const newJob = await job.save();
	res.json(newJob);
};

export const updateJob = async (req: Request, res: Response) => {
	const { id } = req.params;
	const body = req.body;

	const updatedJob = await Job.findByIdAndUpdate(id, body, { new: true });

	if (!updatedJob) {
		return res.status(404).json({ message: "Job not found" });
	}

	res.json(updatedJob);
};

export const deleteJob = async (req: Request, res: Response) => {
	const { id } = req.params;

	const job = await Job.findByIdAndDelete(id);

	if (!job) {
		return res.status(404).json({ message: "Job not found" });
	}

	res.json(job);
};

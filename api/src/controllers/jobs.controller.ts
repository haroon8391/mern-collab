import { Request, Response } from "express";
import Job from "../models/Job.model";

<<<<<<< HEAD
const jobs = [
  {
    id: 1,
    title: "Job One",
    description: "This is the first job",
  },
  {
    id: 2,
    title: "Job Two",
    description: "This is the second job",
  },
  {
    id: 3,
    title: "Job Three",
    description: "This is the third job",
  },
  {
    id: 4,
    title: "Job Four",
    description: "This is the fourth job",
  },
  {
    id: 5,
    title: "Job Five",
    description: "This is the fifth job",
  },
];

export const getJobs = (req: Request, res: Response) => {
  res.json(jobs);
};

export const getJob = (req: Request, res: Response) => {
  res.send("GET /jobs/:id");
=======
export const getJobs = async (req: Request, res: Response) => {
	const jobs = await Job.find();
	res.json(jobs);
};

export const getJob = async (req: Request, res: Response) => {
	const { id } = req.params;

	const job = await Job.findById(id);

	if (!job) {
		return res.status(404).json({ message: "Job not found" });
	}

	res.json({ status: "success", job });
>>>>>>> 995be22b397d22ee1cab1e4eba8331b643aea3da
};

export const createJob = async (req: Request, res: Response) => {
  const { title, description, company, location, salary } = req.body;

  const job = new Job({
    title,
    description,
    salary,
    company,
    location,
  });

  const newJob = await job.save();

  res.json({ status: "success", newJob });
};

<<<<<<< HEAD
export const updateJob = (req: Request, res: Response) => {
  res.send("PUT /jobs/:id");
};

export const deleteJob = (req: Request, res: Response) => {
  res.send("DELETE /jobs/:id");
=======
export const updateJob = async (req: Request, res: Response) => {
	const { id } = req.params;
	const body = req.body;

	const updatedJob = await Job.findByIdAndUpdate(id, body, { new: true });

	if (!updatedJob) {
		return res.status(404).json({ message: "Job not found" });
	}

	res.json({ status: "success", updatedJob });
};

export const deleteJob = async (req: Request, res: Response) => {
	const { id } = req.params;

	const job = await Job.findByIdAndDelete(id);

	if (!job) {
		return res.status(404).json({ message: "Job not found" });
	}

	res.json({ status: "success", job });
>>>>>>> 995be22b397d22ee1cab1e4eba8331b643aea3da
};

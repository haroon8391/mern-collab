import { Request, Response } from "express";

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
};

export const createJob = (req: Request, res: Response) => {
	res.send("POST /jobs");
};

export const updateJob = (req: Request, res: Response) => {
	res.send("PUT /jobs/:id");
};

export const deleteJob = (req: Request, res: Response) => {
	res.send("DELETE /jobs/:id");
};

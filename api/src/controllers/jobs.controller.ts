import express, { Request, Response } from "express";

export const getJobs = (req: Request, res: Response) => {
	res.send("GET /jobs");
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

import Job from "../../models/Job.model";

export const validateJobExists = async (jobId: string) => {
	const job = await Job.findById(jobId);
	if (!job) throw new Error("Job not found");
	return job;
};

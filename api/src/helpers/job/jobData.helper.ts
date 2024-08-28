import Job from "../../models/Job.model";

export const findJobs = async (query: any) => {
	return await Job.find(query).populate("applicants");
};

export const saveJob = async (jobData: any) => {
	const job = new Job(jobData);
	return await job.save();
};

export const updateJobById = async (id: string, body: any) => {
	return await Job.findByIdAndUpdate(id, body, { new: true });
};

export const deleteJobById = async (id: string) => {
	return await Job.findByIdAndDelete(id);
};

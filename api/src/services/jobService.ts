import { validateJobExists } from "../helpers/job/jobValidation.helper";
import {
	deleteJobById,
	findJobs,
	saveJob,
	updateJobById,
} from "../helpers/job/jobData.helper";
import { validateUserExists } from "../helpers/user/userValidation.helper";

const getJobs = async (createdBy?: string) => {
	const queryObject = { ...(createdBy && { createdBy }) };
	return await findJobs(queryObject);
};

const getJob = async (id: string) => {
	return await validateJobExists(id);
};

const createJob = async (jobData: any, userId?: string) => {
	jobData.createdBy = jobData.createdBy || userId;
	return await saveJob(jobData);
};

const updateJob = async (id: string, body: any, userId?: string) => {
	await validateUserExists(userId);
	const jobInDb = await validateJobExists(id);
	if (jobInDb.createdBy.toString() !== userId) throw new Error("Unauthorized");
	return await updateJobById(id, body);
};

const deleteJob = async (jobId: string, userId?: string) => {
	await validateUserExists(userId);
	const jobInDb = await validateJobExists(jobId);
	if (jobInDb.createdBy.toString() !== userId) throw new Error("Unauthorized");
	return await deleteJobById(jobId);
};

export default {
	getJobs,
	getJob,
	createJob,
	updateJob,
	deleteJob,
};

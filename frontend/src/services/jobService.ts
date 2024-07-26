import axios from "axios";
import JobType from "../types/JobTypes";
const baseUrl = "/api/url";

const getAll = async () => {
	const response = await axios.get(baseUrl);
	return response.data;
};

const create = async (credentials: JobType) => {
	const response = await axios.post(baseUrl, credentials);
	return response.data;
};

const update = async (id: string, jobToUpdate: JobType) => {
	const response = await axios.put(`${baseUrl}/${id}`, jobToUpdate);
	return response.data;
};

const remove = async (id: string) => {
	const response = await axios.delete(`${baseUrl}/${id}`);
	return response.data;
};

export default {
	getAll,
	create,
	update,
	remove,
};

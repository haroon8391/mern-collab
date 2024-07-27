import axios from "axios";
import JobType from "../types/JobTypes";
const baseUrl = "/api/v1/jobs";

const getToken = () => {
  return localStorage.getItem("userData");
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (credentials: JobType) => {
  const token = getToken();
  const response = await axios.post(baseUrl, credentials, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const update = async (id: string, jobToUpdate: JobType) => {
  const token = getToken();
  const response = await axios.put(`${baseUrl}/${id}`, jobToUpdate, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const remove = async (id: string) => {
  const token = getToken();
  const response = await axios.delete(`${baseUrl}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export default {
  getAll,
  create,
  update,
  remove,
};

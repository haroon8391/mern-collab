import axios from "axios";
import JobType from "../types/JobTypes";
const baseUrl = "/api/v1/jobs";

const getToken = () => {
  const userData = localStorage.getItem("userData");
  if (userData) {
    try {
      const parsedData = JSON.parse(userData);
      return parsedData.token; // Return only the token property
    } catch (error) {
      console.error("Failed to parse user data from localStorage", error);
      return null; // Return null if parsing fails
    }
  }
  return null; // Return null if no userData is found
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (credentials: JobType) => {
  const token = getToken();
  if (!token) {
    throw new Error("No token found");
  }
  const response = await axios.post(baseUrl, credentials, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const update = async (id: string, jobToUpdate: JobType) => {
  const token = getToken();
  if (!token) {
    throw new Error("No token found");
  }

  const response = await axios.put(`${baseUrl}/${id}`, jobToUpdate, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

const remove = async (id: string) => {
  const token = getToken();
  if (!token) {
    throw new Error("No token found");
  }
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

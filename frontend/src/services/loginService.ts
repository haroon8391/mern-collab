import axios from "axios";
import LoginType from "../types/LoginType";
const baseUrl = "/api/v1/auth/login";

const login = async (credentials: LoginType) => {
	const response = await axios.post(baseUrl, credentials);
	return response.data;
};

export default {
	login,
};

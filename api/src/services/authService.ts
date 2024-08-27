import { createUser, findUserByEmail } from "../helpers/auth/auth.helper";
import { generateUserToken } from "../helpers/auth/token.helper";
import {
	validateLoginInputs,
	validateUserPassword,
} from "../helpers/auth/validation.helper";

const loginUser = async (email: string, password: string) => {
	validateLoginInputs(email, password);
	const userInDb = await findUserByEmail(email);
	await validateUserPassword(userInDb, password);
	const token = generateUserToken(userInDb);

	return {
		token,
		name: userInDb.name,
		userId: userInDb._id,
		isAdmin: userInDb.admin,
	};
};

const registerUser = async (userData: any) => {
	const userInDb = await createUser(userData);
	const token = generateUserToken(userInDb);

	return {
		name: userInDb.name,
		token,
	};
};

export default {
	loginUser,
	registerUser,
};

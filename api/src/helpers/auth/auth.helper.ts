import User from "../../models/User.model";

export const findUserByEmail = async (email: string) => {
	const user = await User.findOne({ email });
	if (!user) {
		throw new Error("Invalid email or password");
	}
	return user;
};

export const createUser = async (userData: any) => {
	const newUser = new User(userData);
	return await newUser.save();
};

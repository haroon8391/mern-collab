import User from "../../models/User.model";

export const validateUserExists = async (userId?: string) => {
	if (!userId) throw new Error("User ID is required");
	const user = await User.findById(userId);
	if (!user) throw new Error("User not found");
	return user;
};

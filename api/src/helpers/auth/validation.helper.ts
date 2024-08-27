export const validateLoginInputs = (...inputs: (string | undefined)[]) => {
	for (const input of inputs) {
		if (!input) {
			throw new Error("All inputs are required");
		}
	}
};

export const validateUserPassword = async (user: any, password: string) => {
	const isPasswordCorrect = await user.comparePassword(password);
	if (!isPasswordCorrect) {
		throw new Error("Invalid email or password");
	}
};

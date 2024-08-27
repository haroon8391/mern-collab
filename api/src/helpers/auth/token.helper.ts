export const generateUserToken = (user: any) => {
	return user.createJWT();
};

import { createSlice } from "@reduxjs/toolkit";

const getDataFromLocalStorage = (key: string) => {
	const data = localStorage.getItem(key);
	return data ? JSON.parse(data) : null;
};

const initialState = {
	isAuthenticated: getDataFromLocalStorage("isAuthenticated") || false,
	userData: getDataFromLocalStorage("userData") || null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isAuthenticated = true;
			state.userData = action.payload;
			localStorage.setItem("isAuthenticated", "true");
			localStorage.setItem("userData", JSON.stringify(action.payload));
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.userData = null;
			localStorage.setItem("isAuthenticated", "false");
			localStorage.setItem("userData", JSON.stringify(null));
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

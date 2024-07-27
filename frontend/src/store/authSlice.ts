import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
	userData: null,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.isAuthenticated = true;
			state.userData = action.payload;
			localStorage.setItem("isAuthenticated", "true");
		},
		logout: (state) => {
			state.isAuthenticated = false;
			state.userData = null;
			localStorage.setItem("isAuthenticated", "false");
		},
	},
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

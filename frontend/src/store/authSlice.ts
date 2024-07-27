import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isAuthenticated: localStorage.getItem("isAuthenticated") === "true",
	userData: localStorage.getItem("userData") || null,
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

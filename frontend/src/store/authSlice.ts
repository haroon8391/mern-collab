import { createSlice } from "@reduxjs/toolkit";

const getDataFromLocalStorage = (key: string) => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
};

const initialState = {
  isAuthenticated: getDataFromLocalStorage("isAuthenticated") || false,
  userData: getDataFromLocalStorage("userData") || null,
  isAdmin: getDataFromLocalStorage("userData")
    ? getDataFromLocalStorage("userData").isAdmin
    : false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userData = action.payload;
      state.isAdmin = action.payload.isAdmin;
      localStorage.setItem("isAuthenticated", "true");
      localStorage.setItem("userData", JSON.stringify(action.payload));
      localStorage.setItem("isAdmin", JSON.stringify(action.payload.isAdmin));
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userData = null;
      state.isAdmin = false;
      localStorage.setItem("isAuthenticated", "false");
      localStorage.setItem("userData", JSON.stringify(null));
      localStorage.setItem("isAdmin", JSON.stringify(false));
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

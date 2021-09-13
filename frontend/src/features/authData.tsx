import { createSlice } from "@reduxjs/toolkit";
const initialState = { isLoggedIn: false };

const authSlice = createSlice({
	name: "authSlice",
	initialState: initialState,
	reducers: {
		doLogin(state) {
			// console.log("loggin in");
			state.isLoggedIn = true;
		},

		doLogout(state) {
			state.isLoggedIn = false;
		},
	},
});

export const { doLogin, doLogout } = authSlice.actions;

export default authSlice.reducer;

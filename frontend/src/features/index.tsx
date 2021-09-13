import authSlice from "./authData";
import serviceWorker from "./serviceworker";
import { combineReducers } from "redux";
const r = {
	authSlice: authSlice,
	serviceWorker: serviceWorker,
};

const combinedReducers = combineReducers(r);

export default combinedReducers;

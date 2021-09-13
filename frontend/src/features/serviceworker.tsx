import { createSlice } from "@reduxjs/toolkit";
const initialState = { needsUpdate: false };

const serviceWorker = createSlice({
	name: "serviceWorker",
	initialState: initialState,
	reducers: {
		init(state) {
			console.log("init sw");
		},
		update(state, payload) {
			console.log("update sw");
			console.log(payload.payload);
			payload.payload.addEventListener("updatefound", function () {
				// If updatefound is fired, it means that there's
				// a new service worker being installed.
				state.needsUpdate = true;
				const installingWorker = payload.payload.installing;
				console.log(
					"A new service worker is being installed:",
					installingWorker
				);

				// You can listen for changes to the installing service worker's
				// state via installingWorker.onstatechange
			});
		},
	},
});

export const { init, update } = serviceWorker.actions;

export default serviceWorker.reducer;

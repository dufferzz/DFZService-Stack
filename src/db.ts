import mongoose from "mongoose";
import { log, trace } from "./utils/logger";

mongoose.set("useCreateIndex", true);
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
// mongoose.set("debug", true);

const connectDB = async () => {
	let attempts = 0;
	try {
		trace("⏲  Connecting to MongoDB...");
		if (process.env.DB_URL) await mongoose.connect(process.env.DB_URL);
	} catch (error) {
		attempts++;
		console.log(error);
		console.log("Reconnecting to MongoDB... Attempts: ", attempts);
		setTimeout(() => {
			console.log("Fix this reconnect a better way");
			connectDB();
		}, 2500);
	}
};

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	log(`⚡ Connected to MongoDB Atlas`);
});

export { connectDB, db };

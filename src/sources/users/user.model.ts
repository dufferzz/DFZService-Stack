import mongoose from "mongoose";
const Schema = mongoose.Schema;

// This is not really used. Auth0 is source of truth

const userSchema = new Schema({
	username: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
});

const users = mongoose.connection.useDb("jobs");

const Users = users.model("users", userSchema);

export default Users;

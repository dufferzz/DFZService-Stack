import mongoose from "mongoose";

const dbb = mongoose.connection.useDb("jobs");

const Schema = mongoose.Schema;
const JobSchema = new Schema({
	customername: {
		type: String,
		required: true,
	},
	address1: {
		type: String,
		required: true,
	},
	address2: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	district: {
		type: String,
		required: true,
	},
	postcode: {
		type: String,
		required: true,
	},
	contactphone: {
		type: String,
		required: true,
	},
	todo: {
		type: String,
		required: false,
	},
	done: {
		type: String,
		required: false,
	},
	parts: {
		type: Array,
		required: false,
	},
	modified: {
		type: Date,
		required: true,
	},
	lastModifiedBy: {
		type: String,
		required: true,
	},

	created: {
		type: Date,
		required: true,
	},
	createdBy: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
		index: true,
	},
	model: {
		type: String,
		required: false,
	},
	make: {
		type: String,
		required: false,
	},
	year: {
		type: String,
		required: false,
	},
	serial: {
		type: String,
		required: false,
	},
	images: {
		type: Array,
		required: false,
	},
	labourHours: {
		type: String,
		required: true,
	},
	assigned: {
		type: String,
		required: true,
		index: true,
	},
	jobNumber: {
		type: Number,
		required: false,
	},
});

const Job = dbb.model("Job", JobSchema);

export default Job;

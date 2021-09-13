import mongoose from "mongoose";
const Schema = mongoose.Schema;

const partsSchema = new Schema({
	dateAdded: {
		type: String,
		required: false,
	},
	modified: {
		type: Date,
		required: false,
	},
	stockCount: {
		type: String,
		required: false,
	},
	partName: {
		type: String,
		required: false,
	},
	thumbnail: {
		type: String,
		required: true,
	},
	stock: {
		type: String,
		required: true,
	},
	location: {
		type: String,
		required: false,
	},
	description: {
		type: String,
		required: false,
	},
	SKU: {
		type: String,
		required: false,
	},
	partNumber: {
		type: String,
		required: true,
	},
	price: {
		type: String,
		default: "N/A",
		required: true,
	},
	Location: {
		type: String,
		required: false,
	},
	addedBy: {
		type: String,
		required: false,
	},
	showOnWebStore: {
		type: Boolean,
		default: false,
		required: false,
	},
	manufacturer: {
		type: String,
		required: false,
	},
	supplier: {
		type: String,
		required: false,
	},
});

const parts = mongoose.connection.useDb("jobs");

const Parts = parts.model("Part", partsSchema);

export default Parts;

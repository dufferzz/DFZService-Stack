import mongoose from "mongoose";
const Schema = mongoose.Schema;
//TODO: Come back and add more specific requirements

const attachmentSchema = new Schema({
	UUID: {
		// 345345344353iui3iuh34535
		type: String,
		required: false,
	},
	title: {
		// Some title
		type: String,
		required: false,
	},

	originalName: {
		type: String,
		required: false,
	},

	fileSrc: {
		// 2342343-23423423-234234.png
		type: String,
		required: false,
	},

	thumbSrc: {
		// thumb-324234-234234-2344234.png
		type: String,
		required: false,
	},

	fileExt: {
		// PDF / PNG / JPG / MP4 / AVI
		type: String,
		required: false,
	},

	fileSize: {
		// 234223kb
		type: String,
		required: false,
	},

	uploadDate: {
		// 234223kb
		type: String,
		required: false,
	},

	uploader: {
		// $USER
		type: String,
		required: false,
	},
});

/* 
  Example URL: dufferz.net/attachment/23dfgr545y5y56trerg
  Example SRC: api.dufferz.net/uploads/345345345-3434543535-345435345.pdf
*/

const attachments = mongoose.connection.useDb("jobs");

const Attachments = attachments.model("uploads", attachmentSchema);

export default Attachments;

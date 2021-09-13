import { gql } from "apollo-server-express";

const uploadType = gql`
	scalar DateTime

	type File {
		_id: ID!
		title: String
		fileName: String
		originalName: String
		fileSrc: String
		thumbSrc: String
		fileExt: String
		fileSize: String
		createdAt: DateTime
		modifiedAt: DateTime
		uploader: String
	}

	type UploadResponse {
		success: Boolean!
		data: [File]
		error: String
	}
`;

export default uploadType;

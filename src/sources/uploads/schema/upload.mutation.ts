import { gql } from "apollo-server-express";

const uploadMutation = gql`
	scalar Upload

	type Mutation {
		addUpload(file: Upload!, title: String!): UploadResponse!

		updateUpload(_id: String!): File!

		deleteUpload(_id: String): File!
	}
`;
export default uploadMutation;

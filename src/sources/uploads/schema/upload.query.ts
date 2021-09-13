import { gql } from "apollo-server-express";

const uploadQuery = gql`
	type Query {
		uploads(query: String, limit: Int): UploadResponse!
		getUpload(_id: String!): File!
	}
`;

export default uploadQuery;

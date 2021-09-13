import { gql } from "apollo-server-express";

const partQuery = gql`
	type Query {
		parts(query: String, limit: Int, page: Int): PartArrayResponse!
		countParts: PartCountResponse
		getPart(_id: String!): PartResponse!
	}
`;

export default partQuery;

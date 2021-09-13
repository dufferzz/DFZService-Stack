import { gql } from "apollo-server-express";

const partMutation = gql`
	type Mutation {
		addPart(
			partName: String!
			partNumber: String!
			price: String!
			Location: String!
			description: String!
			stock: String!
			SKU: String!
			supplier: String!
			thumbnail: String!
		): PartResponse!

		updatePart(
			_id: String!
			partName: String!
			partNumber: String!
			price: String!
			Location: String!
			description: String!
			SKU: String!
			supplier: String!
			thumbnail: String!
		): PartResponse!

		deletePart(_id: String!): PartResponse
	}
`;
export default partMutation;

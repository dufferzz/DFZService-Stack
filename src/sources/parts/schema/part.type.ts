import { gql } from "apollo-server-express";

const partType = gql`
	scalar DateTime

	type Part {
		_id: ID!
		partName: String!
		partNumber: String
		price: String!
		thumbnail: String
		description: String
		stock: String
		location: String
		SKU: String
		Location: String
		supplier: String
	}

	input PartInput {
		partName: String!
		partNumber: String
		price: String!
		thumbnail: String
		description: String
		stock: String
		location: String
		SKU: String
		Location: String
		supplier: String
	}

	type PartResponse {
		success: Boolean!
		data: Part
		error: String
	}

	type PartArrayResponse {
		success: Boolean!
		data: [Part]
		error: String
	}
	type PartCountResponse {
		success: Boolean!
		data: String
		error: String
	}
`;

export default partType;

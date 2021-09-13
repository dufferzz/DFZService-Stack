import { gql } from "@apollo/client";

const ADD_PART_MUTATION = gql`
	mutation AddPart(
		$partName: String!
		$partNumber: String!
		$price: String!
		$Location: String!
		$stock: String!
		$description: String!
		$SKU: String!
		$supplier: String!
		$thumbnail: String!
	) {
		addPart(
			partName: $partName
			partNumber: $partNumber
			price: $price
			Location: $Location
			description: $description
			stock: $stock
			SKU: $SKU
			supplier: $supplier
			thumbnail: $thumbnail
		) {
			success
			error
			data {
				_id
				partName
				partNumber
				price
				stock
				Location
				description
				SKU
				supplier
				thumbnail
			}
		}
	}
`;
export default ADD_PART_MUTATION;

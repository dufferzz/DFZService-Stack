import { gql } from "@apollo/client";
const GET_PART_DETAILS_QUERY = gql`
	query getPart($_id: String!) {
		getPart(_id: $_id) {
			success
			error
			data {
				_id
				partName
				partNumber
				price
				thumbnail
				stock
				location
				description
				SKU
				Location
				supplier
			}
		}
	}
`;

export default GET_PART_DETAILS_QUERY;

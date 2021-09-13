import { gql } from "@apollo/client";

const GET_ALL_PARTS_QUERY = gql`
	query GetParts($query: String, $limit: Int, $page: Int) {
		parts(query: $query, limit: $limit, page: $page) {
			success
			error
			data {
				_id
				partName
				price
				partNumber
				supplier
				Location
				thumbnail
			}
		}
	}
`;
export default GET_ALL_PARTS_QUERY;

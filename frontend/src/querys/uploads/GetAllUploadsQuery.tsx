import { gql } from "@apollo/client";

const GET_ALL_UPLOADS_QUERY = gql`
	query GetUploads {
		uploads {
			success
			error
			data {
				_id
				title
			}
		}
	}
`;
export default GET_ALL_UPLOADS_QUERY;

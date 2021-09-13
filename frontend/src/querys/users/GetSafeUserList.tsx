import { gql } from "@apollo/client";

const GET_SAFE_USERS_QUERY = gql`
	query GetSafeUserList {
		getSafeUserList {
			success
			error
			data {
				nickname
			}
		}
	}
`;
export default GET_SAFE_USERS_QUERY;

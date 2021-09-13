import { gql } from "@apollo/client";

const GET_ALL_USERS_QUERY = gql`
	query GetAllUsers {
		users {
			success
			error
			data {
				user_id
				nickname
				email
				picture
			}
		}
	}
`;
export default GET_ALL_USERS_QUERY;

import { gql } from "@apollo/client";

const GET_ALL_ROLES_QUERY = gql`
	query GetAllRoles {
		roles {
			success
			error
			data {
				id
				name
				description
			}
		}
	}
`;
export default GET_ALL_ROLES_QUERY;

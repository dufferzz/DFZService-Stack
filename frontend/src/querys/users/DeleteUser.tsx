import { gql } from "@apollo/client";

const DELETE_USER_MUTATION = gql`
	query DeleteUser($userid: String!) {
		deleteUser(userid: $userid) {
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
export default DELETE_USER_MUTATION;

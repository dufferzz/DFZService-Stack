import { gql } from "@apollo/client";

const REMOVE_ROLES_FROM_USER_MUTATION = gql`
	query RemoveRolesFromUser($userid: String!, $roleid: String!) {
		removeRolesFromUser(userid: $userid, roleid: $roleid) {
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
export default REMOVE_ROLES_FROM_USER_MUTATION;

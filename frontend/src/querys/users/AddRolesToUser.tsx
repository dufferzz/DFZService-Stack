import { gql } from "@apollo/client";

const ASSIGN_ROLES_TO_USER_MUTATION = gql`
	query AssignRolesToUserMutation($userid: String!, $roleid: String!) {
		addRoleToUser(userid: $userid, roleid: $roleid) {
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
export default ASSIGN_ROLES_TO_USER_MUTATION;

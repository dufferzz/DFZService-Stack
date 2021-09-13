import { gql } from "apollo-server-express";

const userQuery = gql`
	type Query {
		users(query: String, limit: Int): UserArrayResponse!
		getSafeUserList: SafeUserArrayResponse!
		getUser(userid: String!): UserResponse!
		getUserPermissions(userid: String!): UserResponse!
		addPermissionsToUser(userid: String!, permissions: String!): UserResponse!
		roles: Auth0RoleArrayReponse!
		getRole(roleid: String!): Auth0RoleReponse!
	}
`;

export default userQuery;

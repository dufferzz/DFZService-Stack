import { gql } from "apollo-server-express";

const userMutation = gql`
	type Mutation {
		addUser(username: String!, email: String!): AddUserResponse!
		updateUser(userid: String!): UserResponse!
		addRoleToUser(userid: String!, roleid: String!): UserResponse!
		removeRoleFromUser(userid: String!, roleid: String!): UserResponse!
		deleteUser(userid: String!): UserResponse!
	}
`;
export default userMutation;

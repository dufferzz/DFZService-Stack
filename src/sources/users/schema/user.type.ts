import { gql } from "apollo-server-express";

const userType = gql`
	scalar DateTime

	type FullUser {
		user_id: String!
		name: String
		nickname: String
		email: String
		email_verified: Boolean
		picture: String
		updated_at: String
		created_at: String
		last_ip: String
		last_login: String
		logins_count: String
		locale: String
		app_metadata: AppMetadata
	}

	type User {
		_id: ID
		nickname: String
		email: String
		picture: String
		user_id: String
		roles: [String]
	}

	type AddUserResponse {
		success: Boolean!
		data: User
		error: String
	}

	type UserResponse {
		success: Boolean!
		data: FullUser
		error: String
	}

	type UserArrayResponse {
		success: Boolean!
		data: [User]
		error: String
	}

	type AppMetadata {
		roles: [String]
		stripe_customer_id: String
	}

	type Auth0RoleArrayReponse {
		success: Boolean!
		data: [Auth0Role]
		error: String
	}
	type Auth0RoleReponse {
		success: Boolean!
		data: Auth0Role
		error: String
	}
	type Auth0Role {
		id: String
		name: String
		description: String
	}

	type SafeUsers {
		nickname: String!
		picture: String!
	}

	type SafeUserArrayResponse {
		success: Boolean!
		error: String
		data: [SafeUsers]
	}
`;

export default userType;

import { gql } from "@apollo/client";

const GET_USER_DETAILS_QUERY = gql`
	query GetUserDetails($userid: String!) {
		getUser(userid: $userid) {
			success
			error
			data {
				user_id
				name
				nickname
				email
				email_verified
				picture
				updated_at
				created_at
				last_ip
				last_login
				logins_count
				locale
				app_metadata {
					roles
					stripe_customer_id
				}
			}
		}
	}
`;
export default GET_USER_DETAILS_QUERY;

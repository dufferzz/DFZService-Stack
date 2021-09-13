import { gql } from "apollo-server-express";

const userSubscription = gql`
	type Subscription {
		userAdded: User
	}
`;

export default userSubscription;

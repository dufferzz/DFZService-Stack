import { gql } from "apollo-server-express";

const partSubscription = gql`
	type Subscription {
		partAdded: Part
		partUpdated: Part
		partDeleted: Part
	}
`;

export default partSubscription;

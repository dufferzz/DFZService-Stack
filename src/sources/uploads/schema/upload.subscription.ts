import { gql } from "apollo-server-express";

const uploadSubscription = gql`
	type Subscription {
		uploadAdded: File
		uploadUpdated: File
		uploadDeleted: File
	}
`;

export default uploadSubscription;

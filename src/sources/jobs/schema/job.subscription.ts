import { gql } from "apollo-server-express";

const jobSubscription = gql`
	type Subscription {
		jobAdded: JobResponse
		assignedJobAdded(id: String!): JobResponse
		jobUpdated: JobResponse
		jobIDUpdated(_id: String!): JobResponse
		jobDeleted: JobResponse
		jobIDDeleted(_id: String!): JobResponse
	}
`;

export default jobSubscription;

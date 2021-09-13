import { gql } from "apollo-server-express";

const jobMutation = gql`
	type Mutation {
		addJob(
			customername: String!
			email: String!
			address1: String!
			address2: String!
			city: String!
			district: String!
			postcode: String!
			contactphone: String!
			todo: String!
			done: String!
			status: String!
			model: String!
			make: String!
			year: String!
			serial: String
			assigned: String!
			parts: [PartInput]
			labourHours: String!
		): JobResponse!

		updateJob(
			_id: String!
			customername: String!
			email: String!
			address1: String!
			address2: String!
			city: String!
			district: String!
			postcode: String!
			contactphone: String!
			todo: String!
			done: String!
			status: String!
			model: String!
			make: String!
			year: String!
			serial: String
			assigned: String!
			parts: [PartInput]
			labourHours: String!
		): JobResponse!

		deleteJob(_id: String): JobResponse!
	}
`;
export default jobMutation;

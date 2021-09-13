import { gql } from "apollo-server-express";

const jobType = gql`
	scalar DateTime

	type Job {
		_id: ID!
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
		modified: DateTime!
		created: DateTime!
		status: String!
		model: String!
		make: String!
		year: String!
		serial: String!
		parts: [JobPart]!
		assigned: String!
		labourHours: String!
		lastModifiedBy: String
		createdBy: String!
	}

	type JobPart {
		partName: String!
		partNumber: String!
		partQty: String!
		price: String!
	}

	input PartInput {
		partName: String
		partNumber: String
		partQty: String
		partPrice: String
	}

	type JobArrayResponse {
		success: Boolean!
		error: String
		data: [Job]
	}

	type JobResponse {
		success: Boolean!
		error: String
		data: Job
	}

	type JobCountResponse {
		success: Boolean!
		error: String
		data: String
	}

	input Filters {
		statusFilters: [String]
	}
`;

export default jobType;

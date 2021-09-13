import { gql } from "apollo-server-express";

const jobQuery = gql`
	type Query {
		jobs(limit: Int, page: Int, filters: Filters): JobArrayResponse
		searchJobs(limit: Int, page: Int, query: String!): JobArrayResponse
		countJobs(filters: Filters): JobCountResponse
		countAssignedJobs(user: String!, filters: Filters): JobCountResponse
		getAssignedJobs(
			limit: Int
			page: Int
			user: String!
			filters: Filters
		): JobArrayResponse
		getJob(_id: String!): JobResponse
	}
`;

export default jobQuery;

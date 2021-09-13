import { gql } from "@apollo/client";

const ASSIGNED_COUNT_JOBS_QUERY = gql`
	query GetAssignedJobCount($user: String!, $filters: Filters) {
		countAssignedJobs(user: $user, filters: $filters) {
			data
			success
			error
		}
	}
`;
export default ASSIGNED_COUNT_JOBS_QUERY;

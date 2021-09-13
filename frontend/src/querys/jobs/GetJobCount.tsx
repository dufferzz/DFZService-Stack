import { gql } from "@apollo/client";

const COUNT_JOBS_QUERY = gql`
	query GetJobCount($filters: Filters) {
		countJobs(filters: $filters) {
			data
			success
			error
		}
	}
`;
export default COUNT_JOBS_QUERY;

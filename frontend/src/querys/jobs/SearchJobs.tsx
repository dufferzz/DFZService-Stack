import { gql } from "@apollo/client";

const SEARCH_JOBS_QUERY = gql`
	query SearchJobs($query: String!) {
		searchJobs(query: $query) {
			success
			data {
				_id
				customername
				todo
				make
				model
				created
				modified
				status
			}
			error
		}
	}
`;
export default SEARCH_JOBS_QUERY;

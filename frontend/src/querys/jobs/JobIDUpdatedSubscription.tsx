import { gql } from "@apollo/client";

const JOB_ID_UPDATED_SUBSCRIPTION = gql`
	subscription jobIDUpdated($_id: String!) {
		jobIDUpdated(_id: $_id) {
			data {
				_id
				customername
				status
				created
				modified
				assigned
			}
		}
	}
`;
export default JOB_ID_UPDATED_SUBSCRIPTION;

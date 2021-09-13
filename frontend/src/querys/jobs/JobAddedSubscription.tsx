import { gql } from "@apollo/client";

const JOB_ADDED_SUBSCRIPTION = gql`
	subscription jobAdded {
		jobAdded {
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
export default JOB_ADDED_SUBSCRIPTION;

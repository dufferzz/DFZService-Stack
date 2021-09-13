import { gql } from "@apollo/client";

const ANY_JOB_UPDATED_SUBSCRIPTION = gql`
	subscription jobUpdated {
		jobUpdated {
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
export default ANY_JOB_UPDATED_SUBSCRIPTION;

import { gql } from "@apollo/client";

const JOB_ID_DELETED_SUBSCRIPTION = gql`
	subscription jobDeleted($_id: String!) {
		jobDeleted(_id: $_id) {
			data {
				_id
			}
		}
	}
`;
export default JOB_ID_DELETED_SUBSCRIPTION;

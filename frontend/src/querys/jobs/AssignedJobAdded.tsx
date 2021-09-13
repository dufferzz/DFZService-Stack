import { gql } from "@apollo/client";

const ASSIGNED_JOB_ADDED_SUBSCRIPTION = gql`
	subscription assignedJobAdded($id: String!) {
		assignedJobAdded(id: $id) {
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
export default ASSIGNED_JOB_ADDED_SUBSCRIPTION;

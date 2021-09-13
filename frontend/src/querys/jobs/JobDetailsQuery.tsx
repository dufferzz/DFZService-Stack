import { gql } from "@apollo/client";
const GET_JOB_QUERY = gql`
	query GetJob($_id: String!) {
		getJob(_id: $_id) {
			success
			error
			data {
				_id
				customername
				email
				address1
				address2
				city
				district
				postcode
				contactphone
				todo
				done
				parts {
					partName
					partNumber
					partQty
					price
				}
				status
				created
				modified
				make
				model
				year
				serial
				assigned
				labourHours
			}
		}
	}
`;

export default GET_JOB_QUERY;

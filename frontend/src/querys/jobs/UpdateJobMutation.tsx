import { gql } from "@apollo/client";

const UPDATE_JOB_MUTATION = gql`
	mutation UpdateJob(
		$_id: String!
		$customername: String!
		$email: String!
		$address1: String!
		$address2: String!
		$city: String!
		$contactphone: String!
		$district: String!
		$postcode: String!
		$assigned: String!
		$status: String!
		$todo: String!
		$done: String!
		$model: String!
		$make: String!
		$year: String!
		$serial: String!
		$parts: [PartInput]
		$labourHours: String!
	) {
		updateJob(
			_id: $_id
			customername: $customername
			address1: $address1
			address2: $address2
			email: $email
			city: $city
			district: $district
			postcode: $postcode
			contactphone: $contactphone
			assigned: $assigned
			status: $status
			todo: $todo
			done: $done
			model: $model
			make: $make
			year: $year
			serial: $serial
			parts: $parts
			labourHours: $labourHours
		) {
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

export default UPDATE_JOB_MUTATION;

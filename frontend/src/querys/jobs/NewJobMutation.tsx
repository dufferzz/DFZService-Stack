import { gql } from "@apollo/client";

const NEWJOB_MUTATION = gql`
	mutation AddJob(
		$customername: String!
		$email: String!
		$address1: String!
		$address2: String!
		$city: String!
		$district: String!
		$postcode: String!
		$assigned: String!
		$contactphone: String!
		$status: String!
		$todo: String!
		$done: String!
		$model: String!
		$make: String!
		$year: String!
		$serial: String!
		$labourHours: String!
		$parts: [PartInput]
	) {
		addJob(
			customername: $customername
			email: $email
			address1: $address1
			address2: $address2
			city: $city
			district: $district
			contactphone: $contactphone
			postcode: $postcode
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
				city
				address1
				address2
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

export default NEWJOB_MUTATION;

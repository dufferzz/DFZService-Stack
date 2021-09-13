import { gql } from "@apollo/client";

const COUNT_PARTS_QUERY = gql`
	query GetPartCount {
		countParts {
			data
			success
			error
		}
	}
`;
export default COUNT_PARTS_QUERY;

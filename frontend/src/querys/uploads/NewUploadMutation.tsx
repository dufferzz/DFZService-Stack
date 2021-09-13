import { gql } from "@apollo/client";

const NEW_UPLOAD_MUTATION = gql`
	mutation AddUpload($file: Upload!, $title: String!) {
		addUpload(file: $file, title: $title) {
			success
			data {
				_id
			}
			error
		}
	}
`;

export default NEW_UPLOAD_MUTATION;

import React from "react";
import { NewJobForm } from "../../components/Jobs/NewJobForm/NewJobForm";

const NewJob = () => {
	return (
		<div>
			<div style={{ width: "100%", textAlign: "center" }}>
				<h2>Create New Job</h2>
			</div>
			<NewJobForm />
		</div>
	);
};

export default NewJob;

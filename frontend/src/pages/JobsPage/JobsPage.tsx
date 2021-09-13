import React, { useState } from "react";
import { useSubscription } from "@apollo/client";
import { Link } from "react-router-dom";
import FlexDiv from "../../components/_StyledComponents/FlexDiv";

import Button from "../../components/_StyledComponents/Button";

import ANY_JOB_UPDATED_SUBSCRIPTION from "../../querys/jobs/AnyJobUpdatedSubscription";
import ANY_JOB_DELETED_SUBSCRIPTION from "../../querys/jobs/AnyJobDeletedSubscription";
import JOB_ADDED_SUBSCRIPTION from "../../querys/jobs/JobAddedSubscription";

import ScannerButton from "../../components/_SharedComponents/Buttons/ScannerButton";

import AllJobsSection from "../../components/AllJobsSection";
import AssignedJobsSection from "../../components/AssignedJobsSection";

const JobsPage = () => {
	const [showAll, setShowAll] = useState<boolean>(false);
	useSubscription(ANY_JOB_DELETED_SUBSCRIPTION);

	useSubscription(ANY_JOB_UPDATED_SUBSCRIPTION);
	useSubscription(JOB_ADDED_SUBSCRIPTION);

	return (
		<>
			<FlexDiv>
				<Link to="/newjob">
					<Button>Create Job</Button>
				</Link>
				{/* <ScannerButton /> */}
				<Button
					onClick={() => {
						setShowAll(!showAll);
					}}
				>
					{showAll ? `My Jobs` : `All Jobs`}
				</Button>
			</FlexDiv>

			{showAll ? <AllJobsSection /> : <AssignedJobsSection />}
		</>
	);
};

export default JobsPage;

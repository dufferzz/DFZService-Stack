import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import dayjs from "dayjs";
import PageHeading from "../../components/_StyledComponents/PageHeading";

import CenterDiv from "../../components/_StyledComponents/CenteredDiv";
import Loading from "../../components/_SharedComponents/Loading/Loading";
import ErrorComponent from "../../components/_SharedComponents/ErrorComponent/ErrorComponent";
import JobDetailsForm from "../../components/Jobs/JobDetailsForm/JobDetailsForm";
import FlexDivCenter from "../../components/_StyledComponents/FlexDiv";

import GET_JOB_QUERY from "../../querys/jobs/JobDetailsQuery";

const JobDetails = () => {
	const { id } = useParams<ID>();
	const { loading, error, data } = useQuery(GET_JOB_QUERY, {
		variables: { _id: id },
		fetchPolicy: "network-only",
	});

	if (loading) return <Loading />;
	if (error)
		return (
			<CenterDiv>
				<ErrorComponent error={error} />
			</CenterDiv>
		);

	// console.log(data);
	return (
		<>
			<PageHeading>Job Details: {id}</PageHeading>

			{data.getJob.success && (
				<>
					<JobDetailsForm job={data.getJob.data} />
					<FlexDivCenter>
						Last Modified:
						{dayjs(data.getJob.modified).format("DD/MM/YYYY - HH:mm:ss")}
					</FlexDivCenter>
				</>
			)}
			{data.getJob.success === false && (
				<ErrorComponent error={data.getJob.error}></ErrorComponent>
			)}
		</>
	);
};

export default JobDetails;

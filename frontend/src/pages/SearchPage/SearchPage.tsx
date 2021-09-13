import React from "react";
import Loading from "../../components/_SharedComponents/Loading/Loading";
import FlexDivCenter from "../../components/_StyledComponents/FlexDiv";
import Section from "../../components/_StyledComponents/Section";
import { useParams } from "react-router-dom";

import { useQuery } from "@apollo/client";

import SEARCH_JOBS_QUERY from "../../querys/jobs/SearchJobs";

import { Link } from "react-router-dom";
import Button from "../../components/_StyledComponents/Button";

const JobsSearch = ({ query }: any) => {
	const { data, error, loading } = useQuery(SEARCH_JOBS_QUERY, {
		variables: { query: query },
	});
	return (
		<div>
			Search jobs: {query}
			{loading && <Loading />}
			{data && data.searchJobs && (
				<div>
					{data.searchJobs.data.map((job: any) => (
						<Link to={`/job/${job._id}`}>
							<div>
								{job._id} - {job.firstname}
							</div>
						</Link>
					))}
				</div>
			)}
			{error && <div>Error!</div>}
		</div>
	);
};

const PartsSearch = ({ query }: any) => {
	return <div>Search Parts: {query}</div>;
};

const RecieptSearch = ({ query }: any) => {
	return <div>Search Reciept: {query}</div>;
};

const SearchPage = () => {
	const { id } = useParams<ID>();

	if (id) {
		const parsedID = id.split(":");

		switch (parsedID[0]) {
			case "dfz-part":
				return (
					<Section>
						<PartsSearch query={parsedID[1]} />
					</Section>
				);
			case "dfz-job":
				return (
					<Section>
						<JobsSearch query={parsedID[1]} />
					</Section>
				);
			case "dfz-receipt":
				return (
					<Section>
						<RecieptSearch query={parsedID[1]} />
					</Section>
				);
			default:
				return (
					<Section title="Unknown Code">
						{parsedID} is not a valid DFZ Service code
					</Section>
				);
		}
	}

	return (
		<Section title="Search">
			<FlexDivCenter>
				<Button>Job Search</Button>
				<Button>Part Search</Button>
				<Button>Reciept Search</Button>
			</FlexDivCenter>
			<div>
				Search is not complete :) Job QR search partially works.. Valid QR Codes
				are prefixed with values to make search category selection easier
				<ul>
					<li>dfz-part:</li>
					<li>dfz-job:</li>
					<li>dfz-receipt:</li>
				</ul>
			</div>
		</Section>
	);
};

export default SearchPage;

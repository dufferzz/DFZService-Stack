import React, { useState, useEffect } from "react";

import { useQuery } from "@apollo/client";
import GET_ALL_JOBS_QUERY from "../../querys/jobs/GetAllJobsQuery";
import JOB_COUNT_QUERY from "../../querys/jobs/GetJobCount";
import JOB_ADDED_SUBSCRIPTION from "../../querys/jobs/JobAddedSubscription";
import Section from "../_StyledComponents/Section";
import Loading from "../_SharedComponents/Loading/Loading";
import ErrorComponent from "../_SharedComponents/ErrorComponent/ErrorComponent";
import ErrorBoundary from "../_SharedComponents/ErrorBoundary/ErrorBoundary";

import ClipboardIcon from "../../assets/icons/clipboard.svg";

import JobsTable from "../Jobs/JobsTable/JobsTable";
import TableFooter from "../TableFooter/TableFooter";
import TableFilters, { statusFilters } from "../../components/TableFilters";

const AllJobsSection = () => {
	const [page, setPage] = useState<number>(1);
	const [limit, setLimit] = useState<number>(10);
	const [showOptions, setShowOptions] = useState<boolean>(false);
	const [filters, setFilters] = useState<string[]>([...statusFilters]);

	const { data, error, loading, refetch, subscribeToMore } = useQuery(
		GET_ALL_JOBS_QUERY,
		{
			fetchPolicy: "cache-and-network",
			variables: {
				limit: limit,
				page: page,
				filters: { statusFilters: filters },
			},
		}
	);

	useEffect(() => {
		const unsub = subscribeToMore({
			document: JOB_ADDED_SUBSCRIPTION,
			updateQuery: (currentData: any, { subscriptionData }: any) => {
				if (!subscriptionData.data) return currentData.jobs.data;
				if (currentData.jobs.data)
					return Object.assign({}, currentData, {
						jobs: [
							subscriptionData.data.jobAdded.data,
							...currentData.jobs.data,
						],
					});
			},
		});
		return () => {
			unsub();
		};
	});

	const { data: countData } = useQuery(JOB_COUNT_QUERY, {
		fetchPolicy: "cache-and-network",
		variables: { filters: { statusFilters: filters } },
	});

	let count = null;
	if (countData && countData.countJobs.success)
		count = countData.countJobs.data;
	return (
		<ErrorBoundary>
			<Section icon={ClipboardIcon} title={`All Jobs`} style={{ padding: "0" }}>
				{loading && <Loading />}
				{error && <ErrorComponent error={error} />}
				{!loading && data && data.jobs.success && filters && (
					<>
						<JobsTable data={data.jobs.data} />
						<TableFilters
							setShowOptions={setShowOptions}
							showOptions={showOptions}
							setLimit={setLimit}
							limit={limit}
							refetch={refetch}
							filters={filters}
							setFilters={setFilters}
						/>
						<TableFooter
							setPage={setPage}
							page={page}
							limit={limit}
							refetch={refetch}
							data={count}
						/>
					</>
				)}
				{data && !data.jobs.success && data.jobs.error && (
					<ErrorComponent error={data.jobs.error} />
				)}
			</Section>
		</ErrorBoundary>
	);
};

export default React.memo(AllJobsSection);

import { render, screen } from "@testing-library/react";
import JobDetailsPage from "./JobDetailsPage";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import GET_JOB_QUERY from "../../querys/jobs/JobDetailsQuery";

const mocks = [
	{
		request: {
			query: GET_JOB_QUERY,
			variables: {
				id: "fakepart",
			},
		},
		result: {
			data: {
				getJob: {
					success: true,
					data: {
						customername: "wefwe",
					},
					error: "",
				},
			},
		},
	},
];

describe("Job Details Page Tests - Not Logged In", () => {
	test("Renders Loading Text", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<MockedProvider mocks={mocks} addTypename={false}>
					<JobDetailsPage />
				</MockedProvider>
			</MemoryRouter>
		);
	});
});

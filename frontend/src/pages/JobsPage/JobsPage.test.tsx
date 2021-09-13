import { render, screen } from "@testing-library/react";
import JobsPage from "./JobsPage";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";
import GET_ALL_JOBS_QUERY from "../../querys/jobs/GetAllJobsQuery";
import GET_ASSIGNED_JOBS_QUERY from "../../querys/jobs/GetAssignedJobsQuery";
import { useAuth0 } from "@auth0/auth0-react";

import { mocked } from "ts-jest/utils";

const user = {
	email: "johndoe@me.com",
	email_verified: true,
	sub: "google-oauth2|12345678901234",
};

const adminUser = {
	email: "johndoe@me.com",
	email_verified: true,
	sub: "google-oauth2|12345678901234",
	"https://dfzservice.no/roles": ["admin"],
};

jest.mock("@auth0/auth0-react");

const mockedUseAuth0 = mocked(useAuth0, true);
const mocks = [
	{
		request: {
			query: GET_ALL_JOBS_QUERY,
			variables: {
				limit: 10,
				page: 0,
			},
		},
		result: {
			data: {
				jobs: {
					success: true,
					data: [
						{
							customername: "efwf",
							status: "not-assigned",
							description: "needs work",
							created: new Date(),
							model: "MX-255",
							make: "Honda",
						},
					],
					error: "",
				},
			},
		},
	},
	{
		request: {
			query: GET_ASSIGNED_JOBS_QUERY,
			variables: {
				username: "gre",
				limit: 10,
				page: 0,
			},
		},
		result: {
			data: {
				jobs: {
					success: true,
					data: [
						{
							customername: "efwf",
							status: "not-assigned",
							description: "needs work",
							created: new Date(),
							model: "MX-255",
							make: "Honda",
						},
					],
					error: "",
				},
			},
		},
	},
];
describe("Job List Page Tests - Not Logged In", () => {
	beforeEach(() => {
		mockedUseAuth0.mockReturnValue({
			isAuthenticated: true,
			user,
			logout: jest.fn(),
			loginWithRedirect: jest.fn(),
			getAccessTokenWithPopup: jest.fn(),
			getAccessTokenSilently: jest.fn(),
			getIdTokenClaims: jest.fn(),
			loginWithPopup: jest.fn(),
			isLoading: false,
		});
	});
	test("Renders Loading Text", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<MockedProvider mocks={mocks} addTypename={false}>
					<JobsPage />
				</MockedProvider>
			</MemoryRouter>
		);
	});
});

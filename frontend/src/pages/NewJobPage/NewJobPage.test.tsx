import { render, screen } from "@testing-library/react";
import NewJobPage from "./NewJobPage";
import { MockedProvider } from "@apollo/client/testing";
import { MemoryRouter } from "react-router-dom";

const mocks: any[] = []; // We'll fill this in next

describe("Job Details Page Tests", () => {
	test("Renders", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<MockedProvider mocks={mocks} addTypename={false}>
					<NewJobPage />
				</MockedProvider>
			</MemoryRouter>
		);
		const newJobText = screen.getByText(/Create New Job/i);
		expect(newJobText).toBeInTheDocument();
	});
});

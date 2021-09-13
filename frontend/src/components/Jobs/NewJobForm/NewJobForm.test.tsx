import { render, screen } from "@testing-library/react";
import NewJobForm from "./NewJobForm";
import { MockedProvider } from "@apollo/client/testing";

const mocks: any[] = []; // We'll fill this in next
describe("NewJobForm Component Tests", () => {
	test("Am I present?", () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<NewJobForm />
			</MockedProvider>
		);
		const customerInformationText = screen.getByText(/Customer Information/i);
		expect(customerInformationText).toBeInTheDocument();
	});
});

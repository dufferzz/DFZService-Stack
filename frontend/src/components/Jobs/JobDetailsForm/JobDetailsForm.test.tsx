import { render, screen } from "@testing-library/react";
import JobDetailsForm from "./JobDetailsForm";

import { MockedProvider } from "@apollo/client/testing";

const mocks: any[] = []; // We'll fill this in next
const date = new Date();
const modif = new Date();
const FakeData = {
	_id: "rgregnergneonogrie",
	customername: "Test User",
	email: "dev@dev.dev",
	address1: "address1",
	address2: "address2",
	city: "TestCity",
	district: "TestDistrict",
	postcode: "TestPostcode",
	contactphone: "23424",
	date: date,
	todo: "sam",
	done: "sam",
	status: "sam",
	assigned: "sam",
	make: "sam",
	model: "sam",
	year: "sam",
	serial: "sam",
	labourHours: "sam",
	created: `${date}`,
	modified: `${modif}`,
	parts: [
		{ partName: "fuck", partNumber: "fuck", partQty: "2", price: "345435" },
	],
};

describe("JobDetailsForm Component Tests", () => {
	test("Am I present?", () => {
		render(
			<MockedProvider mocks={mocks} addTypename={false}>
				<JobDetailsForm job={FakeData} />
			</MockedProvider>
		);
		const footerText = screen.getByText(/Job Details/i);
		expect(footerText).toBeInTheDocument();
	});
});

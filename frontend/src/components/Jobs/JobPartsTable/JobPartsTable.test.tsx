import { render, screen } from "@testing-library/react";
import JobPartsTable from "./JobPartsTable";

const fakeParts = [
	{
		partName: "aaaa",
		partNumber: "erg",
		partQty: "2",
		price: "100",
	},
];

describe("JobPartTable Component Tests", () => {
	test("Renders no records response", async () => {
		render(<JobPartsTable />);

		const noRecordsText = screen.getByText(/There are no records to display/i);
		expect(noRecordsText).toBeInTheDocument();
	});
	test("Displays Item Data", async () => {
		render(<JobPartsTable data={fakeParts} />);

		const partName = screen.getByText(fakeParts[0].partName);
		expect(partName).toBeInTheDocument();

		const partPrice = screen.getByText(/100/i);
		expect(partPrice).toBeInTheDocument();

		const partQty = screen.getByText(fakeParts[0].partQty);
		expect(partQty).toBeInTheDocument();
	});
});

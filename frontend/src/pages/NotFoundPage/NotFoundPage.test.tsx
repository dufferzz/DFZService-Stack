import { render, screen } from "@testing-library/react";
import NotFoundPage from "./NotFoundPage";

import { MemoryRouter } from "react-router-dom";

const nonExistingUrl = "roberubeaodsnvreoinraeoin";

describe("Job Details Page Tests - Not Logged In", () => {
	test("Displays Page Not Found", () => {
		render(
			<MemoryRouter initialEntries={[`${nonExistingUrl}`]}>
				<NotFoundPage />
			</MemoryRouter>
		);
		const notFoundText = screen.getByText(/Page not Found!/i);
		expect(notFoundText).toBeInTheDocument();
	});
	test("Displays Go Home button", () => {
		render(
			<MemoryRouter initialEntries={[`${nonExistingUrl}`]}>
				<NotFoundPage />
			</MemoryRouter>
		);
		const goHomeText = screen.getByText(/Go home/i);
		expect(goHomeText).toBeInTheDocument();
	});
});

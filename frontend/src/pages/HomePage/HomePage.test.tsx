import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { MemoryRouter } from "react-router-dom";

describe("Home Page Tests - Not Logged In", () => {
	test("Renders Login Button", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<HomePage />
			</MemoryRouter>
		);
		const welcomeText = screen.getByText(/Login/i);
		expect(welcomeText).toBeInTheDocument();
	});
});

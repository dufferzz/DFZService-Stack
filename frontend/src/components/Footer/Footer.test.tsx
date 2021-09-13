import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer Component Tests", () => {
	test("Am I present?", () => {
		render(<Footer />);
		const footerText = screen.getByText(/Created By Sam Duff @ Dufferz.net/i);
		expect(footerText).toBeInTheDocument();
	});
});

import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders Footer Text on init", () => {
	render(<App />);
	const linkElement = screen.getByText(/Created By Sam Duff @ Dufferz.net/i);
	expect(linkElement).toBeInTheDocument();
});

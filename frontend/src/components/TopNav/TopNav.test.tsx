import { render, screen } from "@testing-library/react";
import TopNav from "./TopNav";

import { MemoryRouter } from "react-router-dom";
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

describe("TopNav Component Tests - Logged in", () => {
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
	test("Logout Button displays when loggedin", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<TopNav />
			</MemoryRouter>
		);
		const loginButton = screen.getByText(/≡/i);
		expect(loginButton).toBeInTheDocument();
	});
	test("Make sure Admin Panel Button doesnt show without Role", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<TopNav />
			</MemoryRouter>
		);
		const adminPanelButton = screen.queryByText(/Admin Panel/i);
		expect(adminPanelButton).toBeNull();
	});
});

describe("TopNav Component Tests - Admin User", () => {
	beforeEach(() => {
		mockedUseAuth0.mockReturnValue({
			isAuthenticated: true,
			user: adminUser,
			logout: jest.fn(),
			loginWithRedirect: jest.fn(),
			getAccessTokenWithPopup: jest.fn(),
			getAccessTokenSilently: jest.fn(),
			getIdTokenClaims: jest.fn(),
			loginWithPopup: jest.fn(),
			isLoading: false,
		});
	});
	test("Admin Panel Button displays", () => {
		render(
			<MemoryRouter initialEntries={["/"]}>
				<TopNav />
			</MemoryRouter>
		);
		const adminPanelButton = screen.getByText(/≡/i);
		expect(adminPanelButton).toBeInTheDocument();
	});
});

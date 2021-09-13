import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

import Loading from "./components/_SharedComponents/Loading";
import ErrorBoundary from "./components/_SharedComponents/ErrorBoundary/";

import Layout from "./components/_StyledComponents/Layout";
import SideBar from "./components/_StyledComponents/SideBar";
import TopNav from "./components/TopNav/TopNav";
import AppContainer from "./components/_StyledComponents/AppContainer";
import Footer from "./components/Footer/Footer";
import { BurgerDropDown } from "./components/_StyledComponents/BurgerMenu";

import HomePage from "./pages/HomePage";
import PartsPage from "./pages/PartsPage";
import SettingsPage from "./pages/SettingsPage";
import SearchPage from "./pages/SearchPage";
import AdminPage from "./pages/AdminPage";
import UserDetails from "./pages/AdminPage/UserDetails";
import PartDetailsPage from "./pages/PartDetailsPage";
import NewJob from "./pages/NewJobPage";
import JobDetails from "./pages/JobDetailsPage";
import JobsPage from "./pages/JobsPage";
import MessagesPage from "./pages/MessagesPage";
import NotFoundPage from "./pages/NotFoundPage";
import AddPartPage from "./pages/AddPartPage";

import config from "./config/config";
import useWindowSize from "./utils/useWindowSize";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

const routes = [
	{ path: "/", name: "Home", Component: JobsPage },
	{ path: "/jobs", name: "Jobs", Component: JobsPage },
	{ path: "/newjob", name: "New Job", Component: NewJob },
	{ path: "/job/:id", name: "Job Details", Component: JobDetails },
	{ path: "/parts", name: "Parts", Component: PartsPage },
	{ path: "/newpart", name: "Add Part", Component: AddPartPage },
	{ path: "/part/:id", name: "Part Details", Component: PartDetailsPage },
	{ path: "/messages", name: "Messages", Component: MessagesPage },
	{ path: "/settings", name: "Settings", Component: SettingsPage },
	{ path: "/admin", name: "Administration", Component: AdminPage },
	{ path: "/admin/users/:id", name: "User Management", Component: UserDetails },
	{ path: "/search", name: "Search", Component: SearchPage },
	{ path: "/search/:id", name: "Search", Component: SearchPage },
];

const PopOver = ({ setBurgerMenuOpen, burgerMenuOpen }: any) => {
	const { width } = useWindowSize();

	return (
		<>
			{burgerMenuOpen && width <= config.mobileBreakpoint && (
				<div
					onClick={() => {
						setBurgerMenuOpen(false);
					}}
					style={{
						animation: "fadeIn 0.2s",
						position: "absolute",
						top: "5.45rem",
						right: 0,
						zIndex: 10000000,
					}}
				>
					<BurgerDropDown
						style={{
							width: "250px",
							minHeight: "100vh",
							backgroundColor: "#222",
						}}
						setBurgerMenuOpen={setBurgerMenuOpen}
						burgerMenuOpen={burgerMenuOpen}
					/>
				</div>
			)}
		</>
	);
};

const Shadow = ({ setBurgerMenuOpen, burgerMenuOpen }: any) => {
	const { width } = useWindowSize();

	return (
		<>
			{burgerMenuOpen && width <= config.mobileBreakpoint && (
				<div
					onClick={() => {
						setBurgerMenuOpen(false);
					}}
					style={{
						position: "absolute",
						backgroundColor: "rgba(0, 0, 0, 0.5)",
						width: "100vw",
						top: 0,
						height: "100%",
						zIndex: 1,
						animation: "fadeIn 0.2s",
					}}
				></div>
			)}
		</>
	);
};

const App = () => {
	const { isLoading, isAuthenticated } = useAuth0();
	const [burgerMenuOpen, setBurgerMenuOpen] = useState<boolean>(false);

	if (isLoading) {
		return (
			<Layout>
				<Router>
					<TopNav />
					<AppContainer>
						<ErrorBoundary>
							<Loading />
						</ErrorBoundary>
					</AppContainer>
					<Footer />
				</Router>
			</Layout>
		);
	}
	if (!isLoading && !isAuthenticated) {
		return (
			<Router>
				<TopNav
					burgerMenuOpen={burgerMenuOpen}
					setBurgerMenuOpen={setBurgerMenuOpen}
				/>

				<main style={{ height: "85vh" }}>
					<HomePage />
				</main>
				<Footer />
			</Router>
		);
	}

	return (
		<Layout>
			<Router>
				<ScrollToTop />
				<TopNav
					burgerMenuOpen={burgerMenuOpen}
					setBurgerMenuOpen={setBurgerMenuOpen}
				/>

				<SideBar />
				<PopOver
					burgerMenuOpen={burgerMenuOpen}
					setBurgerMenuOpen={setBurgerMenuOpen}
				/>
				<AppContainer>
					<ErrorBoundary>
						<Switch>
							{routes.map((route: any) => (
								<Route
									key={route.path}
									exact
									path={route.path}
									name={route.name}
									component={route.Component}
								/>
							))}

							<Route component={NotFoundPage} />
						</Switch>
					</ErrorBoundary>
				</AppContainer>
				<Shadow
					setBurgerMenuOpen={setBurgerMenuOpen}
					burgerMenuOpen={burgerMenuOpen}
				/>
				<Footer />
			</Router>
		</Layout>
	);
};

export default App;

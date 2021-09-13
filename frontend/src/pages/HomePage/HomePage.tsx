import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "../../components/_StyledComponents/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import BackgroundImage from "../../assets/images/forest.webp";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import theme from "../../config/theme";
const MySwal = withReactContent(Swal);

const useURLQuery = () => new URLSearchParams(useLocation().search);

const Card = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: 3fr 2fr;
	border-radius: ${theme.defaultBorderRadius};
	background-color: rgba(0, 0, 0, 0.7);
	width: fit-content;
	padding: 1rem;
	box-shadow: 0 0 7px rgba(0, 0, 0, 0.7);
	align-items: center;
	justify-content: center;
	text-align: center;
	grid-gap: 1.25rem;
`;

const Background = styled.div`
	text-align: center;
	width: 100%;
	height: 100%;
	background-image: url(${BackgroundImage});
	background-position: center center;
	background-size: 100%;
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: 568px) {
		background-size: 100% 100%;
	}
`;

const JumboCard = () => {
	const { loginWithRedirect } = useAuth0();

	return (
		<Card>
			<div style={{ fontSize: "1.4rem" }}>
				DFZ Service and Repair Administration
			</div>
			<div>
				<Button onClick={() => loginWithRedirect()}>Login</Button>
			</div>

			<div style={{ fontSize: "1.1rem" }}>Want more information?</div>
			<div>
				<a href="https://github.com/dufferzz/DFZService-Stack">
					<Button>View this project on GitHub</Button>
				</a>
			</div>
		</Card>
	);
};

const HomePage = () => {
	const { loginWithRedirect, logout } = useAuth0();
	const query = useURLQuery();

	const error = query.get("error");
	const errorDescription = query.get("error_description");

	useEffect(() => {
		if (error) {
			MySwal.fire({
				title: <p>Unauthorized</p>,
				icon: "error",
				text: `${errorDescription}`,
				showDenyButton: true,
				confirmButtonText: "Retry",
				denyButtonText: "Logout",
			}).then((data) => {
				console.log(data);
				if (data.isDenied) {
					logout({ returnTo: window.location.origin });
				}
				if (data.isConfirmed) {
					loginWithRedirect();
				}
			});
		}
	}, [error, errorDescription, logout, loginWithRedirect]);

	return (
		<Background>
			<JumboCard />
		</Background>
	);
};

export default HomePage;

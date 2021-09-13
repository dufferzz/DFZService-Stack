import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faClipboardList,
	faSearch,
	faCarBattery,
	faCogs,
	faEnvelope,
	faUserCog,
	faSignOutAlt,
	faUserShield,
} from "@fortawesome/free-solid-svg-icons";

import theme from "../../config/theme";

const BurgerDropDownView = styled.div`
	width: 100%;

	grid-area: burger;
	padding-top: 1rem;

	display: block;
	color: black;
	background: ${theme.navGradientStart};
	background: linear-gradient(
		90deg,
		${theme.navGradientStart} 0%,
		${theme.navGradientEnd} 100%
	);
	z-index: 1000000000;
	box-shadow: -5px -5px 5px rgba(0, 0, 0, 0.2);
	border-radius: 0 0 ${theme.tightBorderRadius} ${theme.tightBorderRadius};
`;

const BurgerDropDownItemView = styled.div`
	text-align: left;
	margin: 0.25rem;
	display: flex;
	justify-content: space-between;
	padding: 0.25rem;
	line-height: 2;
	transition: color 0.2s;
	cursor: pointer;
	font-size: 1rem;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
		border-radius: 5px;
		color: ${theme.accentColor};
		transition: color 0.1s;
		text-shadow: 1px 1px rgba(0, 0, 0, 0.5);
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
	filter: drop-shadow(1px 1px 0 rgba(0, 0, 0, 0.5));
	cursor: pointer;
	color: ${theme.accentColor};
	font-size: 1.75rem;
	transition: color 0.2s;
	transition: scale 0.2s ease-in-out;

	padding-left: 1rem;
`;

const CustomLink = styled(NavLink)`
	&.active {
		color: black;
		text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
		font-size: 1.1rem;
		font-weight: bold;
	}
`;

const BurgerMenuItem = ({ to, text, icon, style }: any) => (
	<CustomLink to={to}>
		<BurgerDropDownItemView>
			<StyledIcon style={style} icon={icon} />
			<div
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "space-evenly",
				}}
			>
				{text}
			</div>
		</BurgerDropDownItemView>
	</CustomLink>
);

const BurgerDropDown = ({ style }: any) => {
	const { user, logout } = useAuth0();

	let userRole;
	if (user) {
		if (user["https://dfzservice.no/roles"]) {
			userRole = user["https://dfzservice.no/roles"][0];
		}
	}

	return (
		<>
			<BurgerDropDownView style={style}>
				<div>
					<div style={{ textAlign: "center" }}>
						<img
							width="125px"
							style={{
								width: "125px",
								height: "125px",
								borderRadius: theme.defaultBorderRadius,
							}}
							src={user.picture}
							alt="avatar"
						/>
						<div style={{ fontSize: "1.1rem" }}>
							Signed in as:
							<br />
							{user.nickname}
						</div>
					</div>
					<hr />
					{/* <BurgerMenuItem to="/search" icon={faSearch} text="Search" /> */}
					<BurgerMenuItem to="/jobs" icon={faClipboardList} text="Jobs" />
					<BurgerMenuItem to="/parts" icon={faCarBattery} text="Parts" />
					{/* <BurgerMenuItem to="/messages" icon={faEnvelope} text="Messages" /> */}
					<hr />
					<BurgerMenuItem to="/profile" icon={faUserCog} text="Profile" />

					{userRole === "admin" && (
						<BurgerMenuItem
							style={{ color: "red" }}
							to="/admin"
							icon={faUserShield}
							text="Admin"
						/>
					)}
					{/* <BurgerMenuItem to="/settings" icon={faCogs} text="Settings" /> */}
					<hr />

					<BurgerDropDownItemView
						onClick={() => {
							logout({ returnTo: window.location.origin });
						}}
					>
						<StyledIcon style={{ color: "red" }} icon={faSignOutAlt} />
						<div
							style={{
								display: "flex",
								width: "100%",
								justifyContent: "space-evenly",
							}}
						>
							Logout
						</div>
					</BurgerDropDownItemView>
				</div>
			</BurgerDropDownView>
		</>
	);
};

const Shadow = styled.div`
	position: absolute;
	background-color: rgba(0, 0, 0, 0.5);
	width: 100vw;
	top: 0;
	height: 100%;
	z-index: 1;
	animation: "fadeIn 0.2s";
`;

export { BurgerDropDown, Shadow };

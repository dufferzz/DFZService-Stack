import styled from "styled-components";
import config from "../../config/config";

import theme from "../../config/theme";

const Layout = styled.div`
	display: grid;
	grid-template-rows: 1fr auto;
	grid-template-columns: auto 1fr auto;
	background-color: ${theme.backgroundColor};
	background-position: center center;
	background-size: 100%;
	position: relative;
	grid-template-areas:
		"topnav topnav "
		"burger burger"
		"sidebar app "
		"footer footer ";

	@media (max-width: ${config.mobileBreakpoint}px) {
		grid-template-rows: 1fr auto;
		grid-template-columns: 1fr;

		grid-template-areas:
			"topnav"
			"burger"
			"app"
			"footer";
	}
`;

export default Layout;

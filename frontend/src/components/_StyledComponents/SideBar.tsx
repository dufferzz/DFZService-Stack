import React from "react";

import styled from "styled-components";

import { BurgerDropDown } from "./BurgerMenu";

import config from "../../config/config";

const StyledSideBar = styled.div`
	grid-area: sidebar;
	text-align: center;
	width: 160px;

	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);
	@media (max-width: ${config.mobileBreakpoint}px) {
		display: none;
	}
`;

const SideBar = () => {
	return (
		<StyledSideBar>
			<BurgerDropDown />
		</StyledSideBar>
	);
};

export default SideBar;

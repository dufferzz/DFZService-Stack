import React from "react";
import styled from "styled-components";

const StyledSectionElement = styled.div`
	display: grid;
	/* margin: 0.25rem; */
`;
const SectionElement = ({ children }: any) => {
	return <StyledSectionElement>{children}</StyledSectionElement>;
};
export default SectionElement;

import styled from "styled-components";

const Icon = styled.img`
	width: 30px;
	margin-right: 0.25rem;
`;

const SectionHeader = styled.div`
	grid-area: header;
	text-align: center;
	font-size: 1.2rem;
	line-height: 2.5;
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	/* margin-bottom: 0.5rem; */
	font-weight: bold;
	cursor: pointer;
`;
export { SectionHeader, Icon };

import { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";

import theme from "../../config/theme";

const Icon = styled.img`
	width: 30px;
	margin-right: 0.25rem;
`;

const SectionHeader = styled.div`
	grid-area: header;
	text-align: center;
	font-size: 1.2rem;
	line-height: 2;
	display: flex;
	align-items: center;
	justify-content: center;

	width: 100%;
	transition: all 0.15s;
	font-weight: bold;
	cursor: pointer;

	&:hover {
		transition: all 0.15s;
		color: ${theme.accentColor};
	}
`;

const StyledSection = styled.section`
	grid-area: content;
	border: 1px solid #aaa;
	padding: 1rem;
	padding: ${(props: any) => props.padding || `0.5rem`};
	border-radius: ${theme.tightBorderRadius};
	box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
	grid-gap: 0.25rem;
	margin: 0 0 1.5rem 0;
	background-color: ${theme.sectionBackground};
	animation: fadeIn 0.5s;
	@media (max-width: 580px) {
		padding: 0.5rem;
	}
`;

const StyledIcon = styled(FontAwesomeIcon)`
	cursor: pointer;
	transition: color 0.2s;
	transition: scale 0.2s ease-in-out;
	&:hover {
		transition: color 0.2s;
		color: ${theme.accentColor};
		transform: scale(1.1);
	}
`;
type ToggleButtonProps = {
	isOpen: boolean;
};

const ToggleHideButton = ({ isOpen }: ToggleButtonProps) => {
	return (
		<span style={{ margin: "0.5rem" }}>
			{isOpen ? (
				<StyledIcon icon={faCaretUp} />
			) : (
				<StyledIcon icon={faCaretDown} />
			)}
		</span>
	);
};
const Section = (props: any) => {
	const tempState = props.default || true;
	const [isOpen, setIsOpen] = useState<boolean>(tempState);
	return (
		<StyledSection style={props.style}>
			<SectionHeader
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				{props.icon && <Icon alt="User Icon" src={props.icon} />}
				{props.title} {props.subtitle && `- ${props.subtitle}`}
				<ToggleHideButton isOpen={isOpen} />
			</SectionHeader>
			{isOpen && props.children}
		</StyledSection>
	);
};

export default Section;

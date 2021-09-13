import styled, { css } from "styled-components";

import theme from "../../config/theme";

const Button = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	/* margin: 2px; */
	width: max-content;
	background: ${theme.primary};
	background: linear-gradient(
		0deg,
		${theme.primaryGradientStart} 0%,
		${theme.primaryGradientEnd} 100%
	);
	color: #000;
	border-radius: ${theme.tightBorderRadius};
	border: 1px solid rgba(0, 0, 0, 0.7);
	outline: none;
	cursor: pointer;
	&:hover {
		background: ${theme.primaryGradientEnd};
		background: linear-gradient(
			180deg,
			${theme.primaryGradientStart} 0%,
			${theme.primaryGradientEnd} 100%
		);
	}

	${(props: any) =>
		props.primary &&
		css`
			background: white;
			color: black;
		`}
	&:active {
		outline: 1px solid black;
	}
`;
export const FormButton = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	/* margin: 2px; */
	width: max-content;
	color: #000;
	border-radius: ${theme.tightBorderRadius};
	border: 0px solid rgba(0, 0, 0, 0.7);
	cursor: pointer;
	&:hover {
		background: rgba(0, 0, 0, 0.1);
	}

	${(props: any) =>
		props.primary &&
		css`
			background: white;
			color: black;
		`}
`;

export const DangerButton = styled(Button)`
	background: ${theme.secondaryGradientStart};
	background: linear-gradient(
		0deg,
		${theme.secondaryGradientStart} 0%,
		${theme.secondaryGradientEnd} 100%
	);
	&:hover {
		background: ${theme.secondaryGradientEnd};
		background: linear-gradient(
			180deg,
			${theme.secondaryGradientStart} 0%,
			${theme.secondaryGradientEnd} 100%
		);
	}
	&:active {
		outline: 1px solid black;
	}
`;

export const SuccessButton = styled(Button)`
	background: ${theme.successGradientStart};
	background: linear-gradient(
		0deg,
		${theme.successGradientStart} 0%,
		${theme.successGradientEnd} 100%
	);

	&:hover {
		background: ${theme.successGradientEnd};
		background: linear-gradient(
			180deg,
			${theme.successGradientStart} 0%,
			${theme.successGradientEnd} 100%
		);
	}
	&:active {
		outline: 1px solid black;
	}
`;

export default Button;

import React from "react";
import Button from "../../_StyledComponents/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
	const { loginWithRedirect } = useAuth0();
	return (
		<Button
			onClick={() => {
				loginWithRedirect();
			}}
		>
			Login
		</Button>
	);
};

export default LoginButton;

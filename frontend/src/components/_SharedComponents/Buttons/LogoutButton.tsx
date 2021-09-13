import React from "react";
import Button from "../../_StyledComponents/Button";
import { useAuth0 } from "@auth0/auth0-react";

const LogoutButton = ({ style }: any) => {
	const { logout } = useAuth0();
	return (
		<Button
			style={style}
			onClick={() => {
				logout({ returnTo: window.location.origin });
			}}
		>
			Logout
		</Button>
	);
};

export default LogoutButton;

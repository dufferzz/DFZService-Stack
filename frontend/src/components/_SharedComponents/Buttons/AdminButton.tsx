import React from "react";
import { DangerButton } from "../../_StyledComponents/Button";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const AdminButton = () => {
	const { user } = useAuth0();

	let userRole;
	if (user) {
		if (user["https://dfzservice.no/roles"]) {
			userRole = user["https://dfzservice.no/roles"][0];
		}
	}
	if (userRole === "admin")
		return (
			<Link to="/admin">
				<DangerButton>Admin Panel</DangerButton>
			</Link>
		);
	return <></>;
};

export default AdminButton;

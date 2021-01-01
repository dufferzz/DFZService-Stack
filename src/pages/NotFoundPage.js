import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/styledComponents/Button";
const NotFound = () => {
	return (
		<div style={{ width: "100%", textAlign: "center" }}>
			<h1>Page Not Found!</h1>

			<Link to="/">
				<Button>Go Home</Button>
			</Link>
		</div>
	);
};

export default NotFound;

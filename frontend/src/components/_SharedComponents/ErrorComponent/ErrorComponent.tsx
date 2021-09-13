import React from "react";
import { ApolloError } from "@apollo/client";

interface ErrorProp {
	error: ApolloError;
}

const ErrorComponent = ({ error }: ErrorProp) => {
	return (
		<div style={{ width: "100%", fontSize: "1.5rem", textAlign: "center" }}>
			{error.message ? `🥺 ${error.message.toString()}` : `🥺 Error`}
		</div>
	);
};

export default ErrorComponent;

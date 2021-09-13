import React from "react";
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	split,
	HttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/link-context";
import { WebSocketLink } from "@apollo/client/link/ws";
import config from "../config/config";

import { getMainDefinition } from "@apollo/client/utilities";
import { useAuth0 } from "@auth0/auth0-react";

const AuthorizedApolloProvider = ({ children }: any) => {
	const { getAccessTokenSilently, logout } = useAuth0();

	// Get our Auth0 token and append to request headers
	// Need to handle long-life clients. Wake up to invalid tokens after expiry. GQL Subs / polling is no happy
	const authLink = setContext(async () => {
		const token = await getAccessTokenSilently({
			audience: `https://api.dufferz.net`,
			scope: "openid email profile",
		}).catch((err) => {
			alert(
				`Authentication error. You are being logged out.\n Error: ${err.error}`
			);
			logout({ returnTo: window.location.origin });
		});
		// console.log("token:", token);
		if (token) {
			return {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			};
		} else {
			logout({ returnTo: window.location.origin });
			// window.location.reload();
		}
	});

	// Initialise our links
	const httpLink = new HttpLink({
		uri: config.apolloHttpUrl,
	});
	const wsLink = new WebSocketLink({
		uri: config.apolloWSUrl,
		options: {
			reconnect: true,
		},
	});

	// Split our link requests by type for WS Subscriptions

	const splitLink = split(
		({ query }) => {
			const definition = getMainDefinition(query);
			return (
				definition.kind === "OperationDefinition" &&
				definition.operation === "subscription"
			);
		},
		wsLink,
		authLink.concat(httpLink) // Bind our auth headers to the httplink
	);

	const apolloClient = new ApolloClient({
		link: splitLink,
		cache: new InMemoryCache(),
		connectToDevTools: true,
	});

	return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
};

export default AuthorizedApolloProvider;

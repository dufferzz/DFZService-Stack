import { AuthenticationClient } from "auth0";

const authClient = new AuthenticationClient({
	domain: "dfz.eu.auth0.com",
});

export default authClient;

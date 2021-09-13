import { ManagementClient } from "auth0";

let Management: ManagementClient;

if (process.env.AUTH0_MANAGEMENT_TOKEN_TMP && process.env.AUTH0_DOMAIN) {
	Management = new ManagementClient({
		token: process.env.AUTH0_MANAGEMENT_TOKEN_TMP,
		domain: process.env.AUTH0_DOMAIN,
	});
} else {
	throw new Error(
		"Missing ENV Variables, Check AUTH0_MANAGEMENT_TOKEN_TMP and AUTH0_DOMAIN"
	);
}
export { Management };

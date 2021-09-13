let http, ws;
if (process.env.REACT_APP_APOLLO_HTTP && process.env.REACT_APP_APOLLO_WS) {
	http = process.env.REACT_APP_APOLLO_HTTP;
	ws = process.env.REACT_APP_APOLLO_WS;
} else {
	throw new Error("Please check APOLLO_HTTP && APOLLO_WS env vars");
}

const config = {
	apolloHttpUrl: http,
	apolloWSUrl: ws,
	auth0Domain: "dfz.eu.auth0.com",
	auth0ClientID: "xmd2O7HE8yuZUhh50XLG7rluouHDtWVM",
	mobileBreakpoint: 1024,
};

export default config;

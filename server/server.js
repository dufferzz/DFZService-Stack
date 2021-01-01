require("dotenv").config();
const express = require("express");
const { mergeSchemas } = require("graphql-tools");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");

const { connectDB } = require("./src/db");
const { log } = require("./src/utils/logger");
const isTokenValid = require("./src/utils/validate");
const http = require("http");

const resolvers = require("./src/resolvers");

const schemas = require("./src/schemas");

const schema = mergeSchemas({
	schemas,
	resolvers,
});

const server = new ApolloServer({
	schema,
	context: async ({ req, connection }) => {
		if (connection) {
			return connection.context;
		} else {
			let isAuthenticated = false;
			const token = req.headers.authorization || "";
			if (token !== "") {
				try {
					const { error, decoded } = await isTokenValid(token);
					if (error) throw new Error(error);

					isAuthenticated = true;
					return {
						isAuthenticated,
						decoded,
					};
				} catch (err) {
					isAuthenticated = false;
					console.log(err);
					return "";
				}
			}
		}
	},
});

const startServer = async () => {
	var corsOptions = {
		origin: "http://localhost:3000",
		credentials: true,
	};

	const app = express();
	app.use(cors(corsOptions));
	server.applyMiddleware({ app });

	const httpServer = http.createServer(app);
	server.installSubscriptionHandlers(httpServer);

	const start = new Date();
	await connectDB();

	const port = process.env.PORT || 3001;

	httpServer.listen(port, () => {
		var end = new Date() - start;
		log(
			`🚀 Server ready at http://localhost:${port}${server.graphqlPath} - Init: ${end}ms`
		);
	});
};
startServer();

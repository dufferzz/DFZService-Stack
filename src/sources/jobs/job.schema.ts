import {
	addMockFunctionsToSchema,
	makeExecutableSchema,
} from "apollo-server-express";
import { jobType, jobQuery, jobMutation, jobSubscription } from "./schema";

const jobSchema = makeExecutableSchema({
	typeDefs: [jobType, jobQuery, jobMutation, jobSubscription],
});
addMockFunctionsToSchema({
	schema: jobSchema,
	mocks: {
		DateTime(obj, args, context, field) {
			if (obj[field.fieldName]) {
				return obj[field.fieldName];
			}
			return "invalid-date";
		},
	},
	preserveResolvers: true,
});

export default jobSchema;

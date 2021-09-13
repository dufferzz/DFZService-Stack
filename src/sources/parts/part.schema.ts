import {
	addMockFunctionsToSchema,
	makeExecutableSchema,
} from "apollo-server-express";
import { partType, partQuery, partMutation, partSubscription } from "./schema";

const partSchema = makeExecutableSchema({
	typeDefs: [partType, partQuery, partMutation, partSubscription],
});
addMockFunctionsToSchema({
	schema: partSchema,
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

export default partSchema;

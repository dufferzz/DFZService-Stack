import {
	addMockFunctionsToSchema,
	makeExecutableSchema,
} from "apollo-server-express";
import { userType, userQuery, userMutation, userSubscription } from "./schema";

const userSchema = makeExecutableSchema({
	typeDefs: [userType, userQuery, userMutation, userSubscription],
});

addMockFunctionsToSchema({
	schema: userSchema,
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

export default userSchema;

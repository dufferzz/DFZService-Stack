import {
	addMockFunctionsToSchema,
	makeExecutableSchema,
} from "apollo-server-express";
import {
	uploadType,
	uploadQuery,
	uploadMutation,
	uploadSubscription,
} from "./schema";

const uploadSchema = makeExecutableSchema({
	typeDefs: [uploadType, uploadQuery, uploadMutation, uploadSubscription],
});

addMockFunctionsToSchema({
	schema: uploadSchema,
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

export default uploadSchema;

import { GraphQLDateTime } from "graphql-iso-date";

import pubsub from "../../pubsub";
import uploadController from "./upload.controller";
import {
	handleNoPermission,
	handleUnauthenticated,
} from "../../utils/authHandlers";

import { checkRoles } from "../../utils/authChecks";

const UPLOAD_ADDED = "UPLOAD_ADDED";
const UPLOAD_UPDATED = "UPLOAD_UPDATED";
const UPLOAD_DELETED = "UPLOAD_DELETED";

const uploadResolver = {
	DateTime: GraphQLDateTime,

	Subscription: {
		uploadAdded: {
			subscribe: (_: never, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([UPLOAD_ADDED]),
		},
		partUpdated: {
			subscribe: (_: never, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([UPLOAD_UPDATED]),
		},
		partDeleted: {
			subscribe: (_: never, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([UPLOAD_DELETED]),
		},
	},
	Query: {
		async uploads(_: never, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkRoles(ctx, "Employee")) {
				return uploadController.uploads(args);
			} else {
				return handleNoPermission();
			}
		},
		async getUpload(_: never, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkRoles(ctx, "Employee")) {
				return uploadController.getUpload(args);
			} else {
				return handleNoPermission();
			}
		},
	},
	Mutation: {
		async addUpload(_: never, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			console.log(_, args, ctx);
			if (await checkRoles(ctx, "Employee")) {
				pubsub.publish(UPLOAD_ADDED, { uploadAdded: args });
				return uploadController.addUpload(args);
			} else {
				return handleNoPermission();
			}
		},
		async updateUpload(_: never, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkRoles(ctx, "Employee")) {
				pubsub.publish(UPLOAD_UPDATED, { uploadUpdated: args });
				return uploadController.updateUpload(args);
			} else {
				return handleNoPermission();
			}
		},
		async deleteUpload(_: never, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkRoles(ctx, "Employee")) {
				pubsub.publish(UPLOAD_DELETED, { uploadDeleted: args });
				return uploadController.deleteUpload(args);
			} else {
				return handleNoPermission();
			}
		},
	},
};
export default uploadResolver;

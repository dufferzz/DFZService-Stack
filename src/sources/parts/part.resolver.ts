import { GraphQLDateTime } from "graphql-iso-date";

import pubsub from "../../pubsub";
import partController from "./part.controller";

import {
	handleNoPermission,
	handleUnauthenticated,
} from "../../utils/authHandlers";
import { checkPermissions } from "../../utils/authChecks";

const PART_ADDED = "PART_ADDED";
const PART_UPDATED = "PART_UPDATED";
const PART_DELETED = "PART_DELETED";

const partResolver = {
	DateTime: GraphQLDateTime,

	Subscription: {
		partAdded: {
			subscribe: (_: any, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([PART_ADDED]),
		},
		partUpdated: {
			subscribe: (_: any, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([PART_UPDATED]),
		},
		partDeleted: {
			subscribe: (_: any, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([PART_DELETED]),
		},
	},
	Query: {
		async parts(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "readAll:parts")) {
				return partController.parts(args);
			} else {
				return handleNoPermission();
			}
		},
		async countParts(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "readAll:parts")) {
				return partController.countParts(args);
			} else {
				return handleNoPermission();
			}
		},

		async getPart(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "readAll:parts")) {
				return partController.getPart(args);
			} else {
				return handleNoPermission();
			}
		},
	},
	Mutation: {
		async addPart(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "create:parts")) {
				pubsub.publish(PART_ADDED, { partAdded: args });
				return partController.addPart(args, ctx);
			} else {
				return handleNoPermission();
			}
		},
		async updatePart(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (checkPermissions(ctx, "update:parts")) {
				pubsub.publish(PART_UPDATED, { partUpdated: args });
				return partController.updatePart(args, ctx);
			} else {
				return handleNoPermission();
			}
		},
		async deletePart(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "delete:parts")) {
				pubsub.publish(PART_DELETED, { partDeleted: args });
				return partController.deletePart(args);
			} else {
				return handleNoPermission();
			}
		},
	},
};
export default partResolver;

import { GraphQLDateTime } from "graphql-iso-date";

import {
	handleNoPermission,
	handleUnauthenticated,
} from "../../utils/authHandlers";
import { checkPermissions } from "../../utils/authChecks";

import pubsub from "../../pubsub";
import jobController from "./job.controller";

const JOB_ADDED = "JOB_ADDED";
const ASSIGNED_JOB_ADDED = "ASSIGNED_JOB_ADDED";

const JOB_UPDATED = "JOB_UPDATED";
const JOB_ID_UPDATED = "JOB_ID_UPDATED";
const JOB_DELETED = "JOB_DELETED";
const JOB_ID_DELETED = "JOB_ID_DELETED";

const jobResolver = {
	DateTime: GraphQLDateTime,

	Subscription: {
		assignedjobAdded: {
			subscribe: (_: any, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([ASSIGNED_JOB_ADDED]),
		},
		jobAdded: {
			subscribe: (_: any, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([JOB_ADDED]),
		},
		jobUpdated: {
			subscribe: (_: any, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([JOB_ID_UPDATED, JOB_UPDATED]),
		},
		jobIDUpdated: {
			subscribe: (_: any, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([JOB_ID_UPDATED]),
		},
		jobDeleted: {
			subscribe: (_: any, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([JOB_DELETED, JOB_ID_DELETED]),
		},
		jobIDDeleted: {
			subscribe: (_: any, __: any, ctx: AppContext) =>
				pubsub.asyncIterator([JOB_ID_DELETED]),
		},
	},
	Query: {
		async jobs(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "readAll:jobs")) {
				return jobController.jobs(args);
			} else {
				return handleNoPermission();
			}
		},
		async searchJobs(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "readAll:jobs")) {
				return jobController.searchJobs(args);
			} else {
				return handleNoPermission();
			}
		},

		async getJob(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "readAll:jobs")) {
				return jobController.getJob(args);
			} else {
				return handleNoPermission();
			}
		},
		async countJobs(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "readAll:jobs")) {
				return jobController.countJobs(args);
			} else {
				return handleNoPermission();
			}
		},
		async countAssignedJobs(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "readAll:jobs")) {
				return jobController.countAssignedJobs(args);
			} else {
				return handleNoPermission();
			}
		},
		async getAssignedJobs(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "readAssigned: jobs")) {
				return jobController.getAssignedJobs(args);
			} else {
				return handleNoPermission();
			}
		},
	},
	Mutation: {
		async addJob(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "create:jobs")) {
				pubsub.publish(JOB_ADDED, { jobAdded: { data: args } });
				return jobController.addJob(args, ctx);
			} else {
				return handleNoPermission();
			}
		},
		async updateJob(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "update:jobs")) {
				pubsub.publish(JOB_ID_UPDATED, { jobIDUpdated: { data: args } });
				pubsub.publish(JOB_UPDATED, { jobUpdated: { data: args } });
				return jobController.updateJob(args, ctx);
			} else {
				return handleNoPermission();
			}
		},
		async deleteJob(_: any, args: any, ctx: AppContext) {
			if (!ctx.isAuthenticated) return handleUnauthenticated();
			if (await checkPermissions(ctx, "delete:jobs")) {
				pubsub.publish(JOB_ID_UPDATED, { jobIDUpdated: { data: args } });
				pubsub.publish(JOB_UPDATED, { jobUpdated: { data: args } });
				return jobController.deleteJob(args);
			} else {
				return handleNoPermission();
			}
		},
	},
};

export default jobResolver;

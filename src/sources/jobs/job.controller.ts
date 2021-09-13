import Job from "./job.model";

import { sendError, sendResponse } from "../../utils/responseHandlers";
import { ObjectId } from "mongodb";

import JobFormValidator from "./job.validator";

import QueryLimiter from "../../utils/queryLimiter";
import QueryPagination from "../../utils/queryPagination";

const jobController = {
	jobs: async (args: any) =>
		await Job.find({ status: { $in: args.filters.statusFilters } })
			.sort({ _id: -1 })
			.select(["customername", "todo", "make", "model", "status", "created"])
			.skip(QueryPagination(args.page, args.limit))
			.limit(QueryLimiter(args.limit))
			.then((data) => sendResponse(data))
			.catch((error) => sendError(error)),

	searchJobs: async (args: any) => {
		if (ObjectId.isValid(args.query)) {
			return await Job.find({ _id: new ObjectId(args.query) })
				.skip(QueryPagination(args.page, args.limit))

				.limit(QueryLimiter(args.limit))
				.then((data) => sendResponse(data))
				.catch((err) => sendError(err));
		} else {
			const query = new RegExp(args.query, "i");

			return await Job.find({
				$and: [
					{
						$or: [{ customername: query }],
					},
				],
			})
				.limit(QueryLimiter(args.limit))
				.then((data) => sendResponse(data))
				.catch((err) => sendError(err));
		}
	},
	countJobs: async (args: any) =>
		await Job.countDocuments({ status: { $in: args.filters.statusFilters } })
			.then((data) => {
				return sendResponse(data);
			})
			.catch((error) => sendError(error)),

	countAssignedJobs: async (args: any) =>
		await Job.countDocuments({
			assigned: args.user,
			status: { $in: args.filters.statusFilters },
		})
			.select(["status", "assigned"])
			.then((data) => {
				return sendResponse(data);
			})
			.catch((error) => sendError(error)),

	getJob: async (args: any) => {
		if (ObjectId.isValid(args._id)) {
			const job = await Job.findById(args._id);
			if (job) return sendResponse(job);
			return sendError("Job Not Found");
		}
		return sendError(`${args._id} is not a valid Job ID`);
	},

	getAssignedJobs: async (args: any) =>
		await Job.find({
			assigned: args.user,
			status: { $in: args.filters.statusFilters },
		})
			.sort({ _id: -1 })
			.select(["customername", "todo", "make", "model", "status", "created"])
			.skip(QueryPagination(args.page, args.limit))

			.limit(QueryLimiter(args.limit))
			.then((data) => sendResponse(data))
			.catch((error) => sendError(error)),

	updateJob: async (args: any, ctx: AppContext) => {
		const updatedJob = {
			labourHours: parseInt(args.labourHours),
			modified: new Date(),
			lastModifiedBy: ctx.decoded.sub,
			...args,
		};

		return JobFormValidator.isValid(updatedJob)
			.then((isValid) => {
				if (isValid) {
					return Job.findOneAndUpdate(
						{
							_id: args._id,
						},
						{
							$set: updatedJob,
						}
					)
						.then((data) => sendResponse(data))
						.catch((error) => sendError(error));
				} else {
					return sendError("Server: Form Validation Failed");
				}
			})
			.catch((error) => {
				return sendError(error);
			});
	},

	deleteJob: async (args: any) =>
		await Job.deleteOne({ _id: args._id })
			.then((data) => sendResponse(data))
			.catch((error) => sendError(error)),

	addJob: async (args: any, ctx: AppContext) => {
		console.log(args);

		const newjob = new Job({
			labourHours: parseInt(args.labourHours),
			modified: new Date(),
			created: new Date(),
			createdBy: ctx.decoded.sub,
			lastModifiedBy: ctx.decoded.sub,
			...args,
		});

		return JobFormValidator.isValid(newjob)
			.then(async (isValid) => {
				console.log(isValid);
				if (isValid) {
					return await newjob
						.save()
						.then((data) => sendResponse(data))
						.catch((error) => sendError(error));
				} else {
					return sendError("Server: Form Validation Failed");
				}
			})
			.catch((error) => {
				return sendError(error);
			});
	},
};

export default jobController;

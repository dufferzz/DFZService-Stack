import Part from "./part.model";
import { sendError, sendResponse } from "../../utils/responseHandlers";
import QueryLimiter from "../../utils/queryLimiter";
import QueryPagination from "../../utils/queryPagination";
import { ObjectId } from "mongodb";

const partController = {
	parts: async (args: any) => {
		console.log(args);
		const query = new RegExp(args.query, "i");

		if (query) {
			return await Part.find({
				$and: [{ $or: [{ partName: query }, { partNumber: query }] }],
			})
				.sort({ _id: -1 })
				.skip(QueryPagination(args.page, args.limit))
				.limit(QueryLimiter(args.limit))

				.then((data) => sendResponse(data))
				.catch((err) => sendError(err));
		} else {
			return await Part.find()
				.sort({ _id: -1 })
				.limit(QueryLimiter(args.limit))
				.then((data) => sendResponse(data));
		}
	},
	countParts: async (args: any) =>
		await Part.countDocuments({})
			.then((data) => sendResponse(data))
			.catch((error) => sendError(error)),

	getPart: async (args: any) => {
		if (ObjectId.isValid(args._id)) {
			const part = await Part.findById(args._id);
			if (part) return sendResponse(part);
			return sendError("Part Not Found");
		}
		return sendError(`${args._id} is not a valid Part ID`);
	},
	updatePart: async (args: any, ctx: AppContext) => {
		const updatedPart = {
			created: new Date(),
			modified: new Date(),
			lastModifiedBy: ctx.decoded.sub,
			...args,
		};
		return await Part.findOneAndUpdate(
			{
				_id: args._id,
			},
			{
				$set: {
					newPart: updatedPart,
				},
			}
		)
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err));
	},

	deletePart: async (args: any) =>
		await Part.deleteOne({ _id: args._id })
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err)),

	addPart: async (args: any, ctx: AppContext) => {
		console.log(args);
		const newPart = new Part({
			SKU: args.sku,
			dateAdded: new Date(),
			modified: new Date(),
			supplier: args.supplier,
			addedBy: ctx.decoded.sub,
			Location: args.location,
			...args,
		});
		return await newPart
			.save()
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err));
	},
};

export default partController;

// import User from "./user.model";
import { sendError, sendResponse } from "../../utils/responseHandlers";

import { Management } from "../../utils/managementClient";

const userController = {
	users: async (decoded: DecodedAuth0) =>
		await Management.getUsers()
			.then((users) => {
				return users.filter((user) => {
					return {
						userid: user.user_id,
						email: user.email,
						nickname: user.nickname,
						picture: user.picture,
					};
				});
			})
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err)),

	getSafeUserList: async (args: any) =>
		await Management.getUsers()
			.then((users) => {
				return users.filter((user) => {
					return {
						nickname: user.nickname,
						picture: user.picture,
					};
				});
			})
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err)),

	roles: async (args: any) =>
		await Management.getRoles()
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err)),

	addRoleToUser: async (args: any) => {
		console.log(args);
		return await Management.assignRolestoUser(
			{ id: args.userid },
			{ roles: [args.roleid] }
		) //TODO: Change frontend to do role array
			.then((data) => {
				console.log(data);
				return sendResponse(data);
			})
			.catch((err) => {
				console.log(err);
				return sendError(err);
			});
	},

	removeRolesFromUser: async (args: any) => {
		console.log(args);
		return await Management.removeRolesFromUser(
			{ id: args.userid },
			{ roles: [args.roles] }
		) //TODO: Change frontend to do role array
			.then((data) => {
				console.log(data);
				return sendResponse(data);
			})
			.catch((err) => {
				console.log(err);
				return sendError(err);
			});
	},

	getUser: async (args: any) =>
		await Management.getUser({ id: args.userid })
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err)),

	addUser: async (args: any) => {
		console.log(args);
		const newuser = {
			connection: "",
		};
		return await Management.createUser(newuser)
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err));
	},
	updateUser: async (args: any) => {
		console.log(args);
		const userDetails = {
			email: args.email,
			//.......
		};
		return await Management.updateUser({ id: args.userid }, userDetails)
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err));
	},

	deleteUser: async (args: any) => {
		console.log(args);

		return await Management.deleteUser({ id: args.userid })
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err));
	},

	getUserPermissions: async (args: any) => {
		console.log(args);

		return await Management.getUserPermissions({ id: args.userid })
			.then((data) => sendResponse(data))
			.catch((err) => sendError(err));
	},
};

export default userController;

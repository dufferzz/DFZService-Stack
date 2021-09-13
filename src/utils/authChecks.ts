import { logError } from "./logger";
import { Management } from "./managementClient";

const checkPermissions = async (ctx: AppContext, reqPermission: string) => {
	if (!ctx.isAuthenticated || !ctx.decoded) return false;
	const currentPermissions = ctx.decoded.permissions;

	if (currentPermissions.includes(reqPermission)) {
		// log(`[AUTH] - ${ctx.decoded.sub} Requested ${reqPermission}`);
		return true;
	} else {
		logError(
			`[AUTH] - Unauthorized! ${ctx.decoded.sub} Requested ${reqPermission}`
		);
		return false;
	}
};

// Unable to check a user's roles without calling out, prefer to use checkPermissions. fast fast

const checkRoles = async (ctx: AppContext, reqRole: string) => {
	if (!ctx.isAuthenticated || !ctx.decoded) return false;

	const userRoles = await Management.getUserRoles({ id: ctx.decoded.sub });

	const obj = userRoles.find((role: any) => role.name === reqRole); //TODO

	if (obj && obj.name === reqRole) {
		// log(`[AUTH] - ${ctx.decoded.sub} Requested ${reqRole}`);
		return true;
	} else {
		logError(`[AUTH] - Unauthorized! ${ctx.decoded.sub} Requested ${reqRole}`);
		return false;
	}
};

export { checkRoles, checkPermissions };

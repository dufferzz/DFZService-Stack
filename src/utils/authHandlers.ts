const handleNoPermission = () => {
	console.log("Returning permission error");
	return {
		success: false,
		error: "User does not have permission for this action",
		data: <never>[],
	};
};

const handleUnauthenticated = () => {
	console.log("Unauthenticated request caught");
	return {
		success: false,
		error: "User is not authenticated",
		data: <never>[],
	};
};

export { handleNoPermission, handleUnauthenticated };

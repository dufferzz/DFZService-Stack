const sendError = (error: any) => {
	console.error(error);
	return {
		success: false,
		data: <never>[],
		error: error,
	};
};

const sendResponse = (data: any) => {
	return {
		success: true,
		data: data,
		error: "",
	};
};

export { sendError, sendResponse };

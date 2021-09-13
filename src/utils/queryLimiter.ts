const QueryLimiter = (reqLimit?: number | undefined | string) => {
	const QueryLimit = 50;
	const DefaultQuerySize = 25;
	if (!reqLimit) return DefaultQuerySize;
	let limit = reqLimit;
	if (limit > QueryLimit) limit = QueryLimit;
	return Number(limit);
};

export default QueryLimiter;

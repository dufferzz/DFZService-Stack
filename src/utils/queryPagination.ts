import QueryLimiter from "./queryLimiter";

const QueryPagination = (page: string | number, limit: number | string) => {
	if (page == 1 || page == 0) return Number(0);
	return Number(page) * QueryLimiter(Number(limit));
};

export default QueryPagination;

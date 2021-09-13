import Button from "../../components/_StyledComponents/Button";
import FlexDivCenter from "../_StyledComponents/FlexDiv";
import useWindowSize from "../../utils/useWindowSize";
import config from "../../config/config";

export let statusFilters: any = [
	"not-started",
	"fuck",
	"await-parts",
	"await-delivery",
];

const TableFilters = ({
	refetch,
	setShowOptions,
	showOptions,
	setLimit,
	limit,
	filters,
	setFilters,
}: any) => {
	const { width } = useWindowSize();

	const toggleFilter = (filter: any) => {
		if (filters.includes(filter)) {
			const newfilters = filters.filter((item: any) => item !== filter);
			setFilters(newfilters);
		} else {
			// statusFilters.push(filter);
			setFilters([...filters, filter]);
		}
		// refetch();
	};
	return (
		<>
			{width <= config.mobileBreakpoint && (
				<div style={{ textAlign: "center" }}>
					<Button
						onClick={() => {
							setShowOptions(!showOptions);
						}}
					>
						Filters
					</Button>
				</div>
			)}
			{(showOptions || width > config.mobileBreakpoint) && (
				<FlexDivCenter>
					<label>
						New
						<input
							name="newJobs"
							type="checkbox"
							checked={filters.includes("not-started")}
							onChange={() => {
								toggleFilter("not-started");
							}}
						/>
					</label>
					<label>
						Await Parts
						<input
							name="await-parts"
							type="checkbox"
							checked={filters.includes("await-parts")}
							onChange={() => {
								toggleFilter("await-parts");
							}}
						/>
					</label>
					<label>
						Fuck
						<input
							name="fuck"
							type="checkbox"
							checked={filters.includes("fuck")}
							onChange={() => {
								toggleFilter("fuck");
							}}
						/>
					</label>
					<label>
						Await Delivery
						<input
							name="await-delivery"
							type="checkbox"
							checked={filters.includes("await-delivery")}
							onChange={() => {
								toggleFilter("await-delivery");
							}}
						/>
					</label>
					<label>
						Completed
						<input
							name="completed"
							type="checkbox"
							checked={filters.includes("completed")}
							onChange={() => {
								toggleFilter("completed");
							}}
						/>
					</label>
					<label>
						Paid
						<input
							name="paid"
							type="checkbox"
							checked={filters.includes("payment-received")}
							onChange={() => {
								toggleFilter("payment-received");
							}}
						/>
					</label>
					<label>
						Limit
						<select
							value={limit}
							onChange={(e) => {
								setLimit(parseInt(e.target.value));
							}}
						>
							<option value={5}>5</option>

							<option value={10}>10</option>
							<option value={11}>11</option>
							<option value={12}>12</option>
							<option value={15}>15</option>
							<option value={20}>20</option>
							<option value={25}>25</option>
							<option value={50}>50</option>
						</select>
					</label>
				</FlexDivCenter>
			)}
		</>
	);
};
export default TableFilters;

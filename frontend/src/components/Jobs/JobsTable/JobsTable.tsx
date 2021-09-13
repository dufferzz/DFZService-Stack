import React from "react";

import dayjs from "dayjs";
import StatusImage from "../../_StyledComponents/StatusImage";
import Table from "../../DataTable/DataTable";
import { useHistory } from "react-router-dom";

const JobsTableColumns = [
	{
		name: " ",
		selector: "status",
		width: "50px",
		sortable: true,

		cell: (row: any) => (
			<div style={{ width: "50px" }} data-tag="allowRowEvents">
				<StatusImage status={row.status} />
			</div>
		),
	},
	{
		name: "ID",
		selector: "_id",
		maxWidth: "9rem",
		hide: 768,
		sortable: true,
		cell: (row: any) => (
			<div style={{ lineBreak: "anywhere" }} data-tag="allowRowEvents">
				{row._id}
			</div>
		),
	},
	{
		name: "Description",

		selector: "todo",
		cell: (row: any) => (
			<div
				style={{ textAlign: "center", width: "100%", padding: " 0 0 0.5rem 0" }}
				data-tag="allowRowEvents"
			>
				{row.make === "" && row.model === "" && (
					<span
						data-tag="allowRowEvents"
						style={{ fontSize: "1rem", fontWeight: "bold", lineHeight: "2" }}
					>
						Unknown
						<br />
					</span>
				)}
				{(row.make !== "" || row.model !== "") && (
					<>
						<span
							data-tag="allowRowEvents"
							style={{ fontSize: "1rem", fontWeight: "bold", lineHeight: "2" }}
						>
							{row.make} {row.model}
						</span>
						<br />
					</>
				)}
				{row.todo &&
					row.todo.length >= 100 &&
					row.todo.substring(0, 100) + "..."}
				{row.todo && row.todo.length < 100 && row.todo}
			</div>
		),
	},
	{
		name: "Client",
		selector: "customername",
		maxWidth: "150px",
		sortable: true,
		hide: 580,

		cell: (row: any) => <div data-tag="allowRowEvents">{row.customername}</div>,
	},
	{
		name: "Make",
		selector: "make",
		maxWidth: "110px",
		sortable: true,
		hide: 950,

		cell: (row: any) => <div data-tag="allowRowEvents">{row.make}</div>,
	},
	{
		name: "Model",
		selector: "model",
		maxWidth: "120px",
		hide: 1100,
		sortable: true,

		cell: (row: any) => <div data-tag="allowRowEvents">{row.model}</div>,
	},
	{
		name: "Date",
		sortable: true,

		width: "115px",
		selector: "created",
		cell: (row: any) => (
			<div style={{ textAlign: "center" }} data-tag="allowRowEvents">
				<span style={{ fontSize: "1.1rem" }}>
					{dayjs(row.created).format("DD MMM YY")}
				</span>
				<br />
				{dayjs(row.created).format("HH:mm")}
			</div>
		),
	},
];

const JobsTable = ({ data }: any) => {
	const history = useHistory();
	return (
		<Table
			columns={JobsTableColumns}
			data={data}
			onRowClicked={(e: any) => {
				history.push(`/job/${e._id}`);
			}}
		/>
	);
};

export default JobsTable;

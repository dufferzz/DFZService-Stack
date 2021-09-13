import React from "react";
import Table from "../../DataTable/DataTable";
import iconError from "../../../assets/icons/error.svg";

import Swal from "sweetalert2";

const RemovePartIcon = (props: any) => {
	return (
		<img
			style={{
				cursor: "pointer",
				filter: "drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3))",
				zIndex: 100000,
				width: "30px",
			}}
			alt="Remove Part"
			src={iconError}
		/>
	);
};

const columns = [
	{
		name: "",
		selector: "",

		width: "40px",
		cell: (row: any) => (
			<div data-tag="allowRowEvents">
				<RemovePartIcon part={row} />
			</div>
		),
	},
	{
		name: "Part Name",
		selector: "partName",

		cell: (row: any) => <div data-tag="allowRowEvents">{row.partName}</div>,
	},
	{
		name: "Part Number",
		selector: "partNumber",
		maxWidth: "200px",

		sortable: true,
		hide: 580,

		cell: (row: any) => <div data-tag="allowRowEvents">{row.partNumber}</div>,
	},
	{
		name: "Qty",
		selector: "partQty",
		maxWidth: "100px",
		sortable: true,

		cell: (row: any) => <div data-tag="allowRowEvents">{row.partQty}</div>,
	},

	{
		name: "Price",
		selector: "price",
		maxWidth: "100px",
		sortable: true,

		cell: (row: any) => <div data-tag="allowRowEvents">{row.price},-</div>,
	},
];

const JobPartsTable = ({ data, setParts }: any) => {
	const handleRowClicked = (row: any) => {
		Swal.fire({
			title: `${row.partName}`,
			text: `Remove ${row.partName}?`,
			showCancelButton: true,
		}).then((s: any) => {
			if (s.isConfirmed) {
				console.log("remove part", row.partName);
				setParts(data.filter((part: any) => part.partName !== row.partName));
			}
		});
	};

	return (
		<Table onRowClicked={handleRowClicked} columns={columns} data={data} />
	);
};

export default React.memo(JobPartsTable);

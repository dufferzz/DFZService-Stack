import React from "react";
import DataTable, { createTheme } from "react-data-table-component";

createTheme("inherit", {
	background: {
		default: "inherit",
	},
});

const TableStyle = {
	headRow: {
		style: {
			fontSize: "1.2rem",
		},
	},
	headCells: {
		style: {
			fontWeight: 500,
			fontSize: "1.1rem",
		},
	},
	rows: {
		style: {
			fontSize: "1rem",
			lineHeight: "2",
			transition: "all 0.2s",
			"&:hover": {
				transition: "all 0.2s",
				backgroundColor: "rgba(0,0,0,0.1)",
			},
		},
	},
};

const Table = ({ data, columns, onRowClicked }: any) => {
	return (
		<DataTable
			pointerOnHover
			noHeader
			striped
			columns={columns}
			responsive={false}
			style={{ width: "100%" }}
			theme="inherit"
			customStyles={TableStyle}
			data={data}
			dense
			onRowClicked={onRowClicked}
		/>
	);
};

export default React.memo(Table);

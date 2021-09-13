import React from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import Loading from "../_SharedComponents/Loading/Loading";
import { useHistory } from "react-router-dom";

import Table from "../DataTable/DataTable";
import Placeholder from "../../assets/images/placeholder.png";

const PartsTable = ({ data }: any) => {
	const history = useHistory();
	const handleRowClick = (id: string) => {
		history.push(`/part/${id}`);
	};

	const columns = [
		{
			name: "Image",
			selector: "thumbnail",
			width: "75px",
			cell: (row: any) => (
				<div style={{ width: "50px" }} data-tag="allowRowEvents">
					{row.thumbnail !== "Hello World" ? (
						<img
							src={row.thumbnail}
							alt={row.productName}
							style={{ width: "50px" }}
						/>
					) : (
						<img
							src={Placeholder}
							alt={row.productName}
							style={{ width: "50px" }}
						/>
					)}
				</div>
			),
		},
		{
			name: "Name",
			selector: "partName",
			sortable: true,

			maxWidth: "50vw",
			cell: (row: any) => (
				<div style={{ lineBreak: "anywhere" }} data-tag="allowRowEvents">
					{row.partName}
				</div>
			),
		},
		{
			name: "Part Number",

			selector: "partNumber",
			sortable: true,
			maxWidth: "250px",
		},
		{
			name: "Price",
			selector: "price",
			sortable: true,
			hide: 768,

			maxWidth: "100px",
		},
		{
			name: "Supplier",
			selector: "supplier",
			sortable: true,
			hide: 1024,
		},
		{
			name: "Location",
			maxWidth: "90px",
			hide: 580,

			center: true,
			selector: "Location",
			sortable: true,
		},
	];

	return (
		<div>
			{data && (
				<Table
					columns={columns}
					data={data}
					onRowClicked={(e: any) => {
						handleRowClick(e._id);
					}}
				/>
			)}
		</div>
	);
};

export default withAuthenticationRequired(PartsTable, {
	onRedirecting: () => <Loading />,
});

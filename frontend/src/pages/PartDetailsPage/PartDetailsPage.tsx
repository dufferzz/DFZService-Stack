import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/_SharedComponents/Loading/Loading";
import { useQuery } from "@apollo/client";
import GET_PART_DETAILS_QUERY from "../../querys/parts/PartDetailsQuery";
import CenterDiv from "../../components/_StyledComponents/CenteredDiv";
import ErrorComponent from "../../components/_SharedComponents/ErrorComponent/ErrorComponent";
import Section from "../../components/_StyledComponents/Section";
import FlexDiv from "../../components/_StyledComponents/FlexDiv";
import Button, {
	DangerButton,
} from "../../components/_StyledComponents/Button";
import styled from "styled-components";

import Placeholder from "../../assets/images/placeholder.png";
import FlexDivCenter from "../../components/_StyledComponents/FlexDiv";

import theme from "../../config/theme";

const PartsPageGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 5fr;
	grid-template-rows: 1fr auto;
	@media (max-width: 800px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		align-items: center;
		justify-content: center;
	}
`;

const PartsPageContent = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr auto;
`;

const Item = ({ title, value }: any) => {
	return (
		<h3>
			{title}:
			<div style={{ fontSize: "1rem", fontWeight: "normal" }}>{value}</div>
		</h3>
	);
};

const PartDetailsPage = () => {
	const { id } = useParams<ID>();
	const { loading, error, data } = useQuery(GET_PART_DETAILS_QUERY, {
		variables: { _id: id },
		errorPolicy: "all",
	});

	if (loading) return <Loading />;
	if (error)
		return (
			<CenterDiv>
				<ErrorComponent error={error} />
			</CenterDiv>
		);
	// console.log(data);

	const part = data.getPart.data;

	return (
		<Section title={`Part ID: ${id}`}>
			<PartsPageGrid>
				<div style={{ textAlign: "center" }}>
					{part.thumbnail !== "Hello World" ? (
						<img
							style={{
								width: "250px",
								borderRadius: theme.defaultBorderRadius,
							}}
							src={part.thumbnail}
							alt={part.partName}
						/>
					) : (
						<img
							style={{
								width: "250px",
								borderRadius: theme.defaultBorderRadius,
							}}
							src={Placeholder}
							alt={part.partName}
						/>
					)}
					<div style={{ textAlign: "center", padding: "0.25rem" }}>
						Click to Enlarge
					</div>
				</div>
				<div
					style={{
						textAlign: "center",
						display: "grid",
						gridTemplateColumns: "1fr 1fr",
						gridTemplateRows: "auto auto",
						gridTemplateAreas: `'name name' 'left right'`,
					}}
				>
					<div style={{ gridArea: "name" }}>
						<h1>{part.partName}</h1>
					</div>
					<div style={{ gridArea: "left" }}>
						<Item title="Sell Price" value={part.price} />
						<Item title="Buy Price" value={part.price} />
						<Item title="Location" value={part.Location} />
					</div>
					<div style={{ gridArea: "right" }}>
						<Item title="Stock" value={part.stock} />
						<Item title="Supplier" value={part.supplier} />
						<Item title="Part Number" value={part.partNumber} />
					</div>
				</div>

				<div>
					<h2 style={{ textAlign: "center" }}>Alternate Images</h2>
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							paddingTop: "0.5rem",
							flexWrap: "wrap",
						}}
					>
						<img
							style={{
								width: "80px",
								height: "55px",
								margin: "0.25rem",
								borderRadius: theme.tightBorderRadius,
							}}
							src={Placeholder}
							alt=""
						/>
						<img
							style={{
								width: "80px",
								height: "55px",
								margin: "0.25rem",
								borderRadius: theme.tightBorderRadius,
							}}
							src={Placeholder}
							alt=""
						/>
						<img
							style={{
								width: "80px",
								height: "55px",
								margin: "0.25rem",
								borderRadius: theme.tightBorderRadius,
							}}
							src={Placeholder}
							alt=""
						/>
					</div>
				</div>

				<div
					style={{
						display: "grid",
						gridTemplateColumns: "1fr",
						justifyContent: "center",
						alignItems: "center",
						width: "100%",
					}}
				>
					<h2 style={{ textAlign: "center" }}>Description</h2>
					<div style={{ padding: "0 1rem", lineHeight: "1.5" }}>
						{part.description}
					</div>
				</div>
				<FlexDivCenter></FlexDivCenter>
				<div style={{ marginTop: "1rem" }}>
					<h2 style={{ textAlign: "center", margin: 0 }}>
						Additional Information
					</h2>
					<PartsPageContent style={{ padding: "1rem", textAlign: "center" }}>
						<Item title="SKU" value={part.SKU} />
					</PartsPageContent>
				</div>
			</PartsPageGrid>
			<FlexDiv>
				<Button>Edit Part</Button>
				<DangerButton>Delete Part</DangerButton>
			</FlexDiv>
		</Section>
	);
};

export default PartDetailsPage;

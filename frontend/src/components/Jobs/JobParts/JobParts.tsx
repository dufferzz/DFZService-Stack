import React, { useState } from "react";
import styled from "styled-components";
import { ErrorMessage } from "formik";
import Swal from "sweetalert2";

import Section from "../../_StyledComponents/Section";
import SectionElement from "../../_StyledComponents/SectionElement";
import Button from "../../_StyledComponents/Button";
import CenterDiv from "../../_StyledComponents/CenteredDiv";
import JobPartsTable from "../JobPartsTable/JobPartsTable";

import PackageIcon from "../../../assets/icons/package.svg";

const AddItemDiv = styled.div`
	display: grid;
	grid-template-columns: 2fr 2fr 1fr 1fr 1fr;
	grid-gap: 0.1rem;
	align-items: flex-end;
`;

const PartsView = ({ parts, setParts }: JobPartsProp) => {
	const [partName, setPartName] = useState<string>("");
	const [partNumber, setPartNumber] = useState<string>("");
	const [partQty, setPartQty] = useState<string>("");
	const [price, setPartPrice] = useState<string>("");

	const cleanForm = () => {
		setPartName("");
		setPartNumber("");
		setPartPrice("");
		setPartQty("");
	};

	const addPart = (e: any) => {
		e.preventDefault();

		if (partName === "" || partQty === "" || partQty === "0" || price === "") {
			cleanForm();
			Swal.fire({
				title: <p>Invalid Part</p>,
				icon: "error",
			});
			return;
		}
		const newPart = {
			partName,
			partNumber,
			partQty,
			price,
		};

		const p = parts.filter((part) => part.partName === partName);
		if (p.length >= 1) {
			Swal.fire({
				title: "Duplicate Part",
				icon: "error",
				text: `${partName} is already attached.. Something something partQty++`,
			});
			cleanForm();
			return;
		}
		cleanForm();
		setParts([...parts, newPart]);
	};

	return (
		<Section
			title="Parts"
			icon={PackageIcon}
			style={{
				display: "grid",
				gridTemplateColumns: "1fr",
				padding: 0,
				gridGap: "0.1rem",
				gridTemplateAreas: `
					'header '
					'content '
				`,
			}}
		>
			<form onSubmit={addPart}>
				<JobPartsTable setParts={setParts} data={parts} />
				<CenterDiv>
					<AddItemDiv>
						<SectionElement>
							<label htmlFor="partName">Name</label>
							<input
								value={partName}
								onChange={(e) => {
									setPartName(e.target.value);
								}}
								type="text"
								name="partName"
							/>
							<ErrorMessage name="partName" component="div" />
						</SectionElement>
						<SectionElement>
							<label htmlFor="partNumber">Part #</label>
							<input
								value={partNumber}
								onChange={(e) => {
									setPartNumber(e.target.value);
								}}
								type="text"
								name="partNumber"
							/>
							<ErrorMessage name="partNumber" component="div" />
						</SectionElement>
						<SectionElement>
							<label htmlFor="partQty">Qty</label>
							<input
								onChange={(e) => {
									setPartQty(e.target.value);
								}}
								value={partQty}
								type="number"
								name="partQty"
							/>
							<ErrorMessage name="partQty" component="div" />
						</SectionElement>
						<SectionElement>
							<label htmlFor="partPrice">Price</label>
							<input
								onChange={(e) => {
									setPartPrice(e.target.value.toString());
								}}
								value={price}
								type="number"
								name="partPrice"
							/>
							<ErrorMessage name="partPrice" component="div" />
						</SectionElement>
						<SectionElement style={{ alignItems: "flex-end" }}>
							<Button type="submit" style={{ width: "100%", height: "2.5rem" }}>
								Add
							</Button>
						</SectionElement>
					</AddItemDiv>
				</CenterDiv>
			</form>
		</Section>
	);
};

export default PartsView;

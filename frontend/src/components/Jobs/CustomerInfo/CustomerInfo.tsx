import React from "react";
import styled from "styled-components";
import { Field } from "formik";

import Section from "../../_StyledComponents/Section";
import SectionElement from "../../_StyledComponents/SectionElement";
import ErrorField from "../../_StyledComponents/ErrorField";
import Button from "../../_StyledComponents/Button";
import UserIcon from "../../../assets/icons/user.svg";
const AddressInfoSection = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: flex-start;
	grid-gap: 0.25rem;
	row-gap: 0.75rem;
	grid-template-areas:
		"subheading subheading subheading"
		"content content content";

	@media (max-width: 580px) {
		grid-template-columns: 1fr 1fr;
		grid-template-areas:
			"subheading subheading"
			"content content";
	}
`;

const SubHeading = styled.div`
	grid-area: subheading;
	font-size: 1.1rem;
	padding: 0.5rem 0;
	font-weight: bold;
`;

const CustomerInfo = () => {
	return (
		<Section title="Customer Information" icon={UserIcon}>
			<AddressInfoSection>
				<SubHeading
					style={{
						display: "flex",
						alignItems: "center",
						justifyContent: "space-between",
					}}
				>
					Delivery Address
					<Button>Existing Customer</Button>
				</SubHeading>
				<SectionElement>
					<label htmlFor="customername">Customer Name*</label>
					<Field type="customername" name="customername" />
					<ErrorField name="customername" component="div" />
				</SectionElement>
				<SectionElement>
					<label htmlFor="address1">Address 1*</label>
					<Field type="address1" name="address1" />
					<ErrorField name="address1" component="div" />
				</SectionElement>
				<SectionElement>
					<label htmlFor="address2">Address 2</label>
					<Field type="address2" name="address2" />
					<ErrorField name="address2" component="div" />
				</SectionElement>
				<SectionElement>
					<label htmlFor="city">City*</label>
					<Field type="city" name="city" />
					<ErrorField name="city" component="div" />
				</SectionElement>
				<SectionElement>
					<label htmlFor="district">District*</label>
					<Field type="district" name="district" />
					<ErrorField name="district" component="div" />
				</SectionElement>
				<SectionElement>
					<label htmlFor="postCode">Postcode*</label>
					<Field type="postcode" name="postcode" />
					<ErrorField name="postcode" component="div" />
				</SectionElement>
			</AddressInfoSection>
			<SubHeading
				style={{
					display: "flex",
					alignItems: "center",
					justifyContent: "space-between",
				}}
			>
				Contact Information
			</SubHeading>
			<div
				style={{
					display: "grid",
					gridGap: "0.25rem",
					gridTemplateColumns: "1fr 1fr",
					alignItems: "baseline",
				}}
			>
				<SectionElement>
					<label htmlFor="contactphone">Contact Phone*</label>
					<Field type="contactphone" name="contactphone" />
					<ErrorField name="contactphone" component="div" />
				</SectionElement>
				<SectionElement>
					<label htmlFor="email">Contact Email*</label>
					<Field type="email" name="email" />

					<ErrorField name="email" component="div" />
				</SectionElement>
			</div>
		</Section>
	);
};

export default CustomerInfo;

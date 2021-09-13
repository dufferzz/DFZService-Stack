import React from "react";
import styled from "styled-components";

import iconNew from "../../assets/icons/new.svg";
import iconSpanner from "../../assets/icons/spanner.svg";
import iconPackage from "../../assets/icons/package.svg";
import iconError from "../../assets/icons/error.svg";
import iconSuccess from "../../assets/icons/success.svg";
import iconLorry from "../../assets/icons/lorry.svg";

import iconCash from "../../assets/icons/cash.svg";

const StatusImage = ({ status }: StatusType) => {
	let image = null;
	switch (status) {
		case "not-started":
			image = iconNew;
			break;
		case "in-progress":
			image = iconSpanner;
			break;
		case "await-parts":
			image = iconPackage;
			break;
		case "await-delivery":
			image = iconLorry;
			break;
		case "completed":
			image = iconSuccess;
			break;
		case "fuck":
			image = iconError;
			break;
		case "payment-received":
			image = iconCash;
			break;
		default:
			break;
	}

	return <>{image && <StatusIconImage status={status} image={image} />}</>;
};

const Img = styled.img`
	width: 30px;
	filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.3));
`;

const StatusIconImage = ({ image, status }: StatusImageProp) => {
	return <Img alt={status} src={image}></Img>;
};

export default StatusImage;

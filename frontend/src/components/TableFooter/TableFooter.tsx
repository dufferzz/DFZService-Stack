import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { FormButton } from "../../components/_StyledComponents/Button";

import {
	faStepBackward,
	faStepForward,
	faFastBackward,
	faFastForward,
} from "@fortawesome/free-solid-svg-icons";

const StyledIcon = styled(FontAwesomeIcon)`
	cursor: pointer;
	color: black;
`;

const TableFooter = ({ data, page, limit, refetch, setPage }: any) => {
	let lastpage: number = 0;
	if (data && limit) lastpage = Math.floor(data / limit);

	const GoFirstPage = () => {
		setPage(1);
		refetch();
	};

	const GoLastPage = () => {
		setPage(lastpage);
		refetch();
	};

	const GoUpPage = () => {
		setPage(page + 1);
		refetch();
	};

	const GoDownPage = () => {
		if (page === 1) return;
		setPage(page - 1);
		refetch();
	};
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				paddingTop: "0.25rem",
				alignItems: "center",
				textAlign: "center",
			}}
		>
			<div>
				{page > 1 && (
					<>
						<FormButton onClick={GoFirstPage}>
							<StyledIcon icon={faFastBackward} />
						</FormButton>
						<FormButton onClick={GoDownPage}>
							<StyledIcon
								style={{ paddingRight: "0.5rem" }}
								icon={faStepBackward}
							/>
							Prev
						</FormButton>
					</>
				)}
			</div>
			<div>
				Page {page} of {lastpage}
				<br />
				{limit} of {data && data} Results
			</div>
			<div>
				<FormButton onClick={GoUpPage}>
					Next
					<StyledIcon style={{ paddingLeft: "0.5rem" }} icon={faStepForward} />
				</FormButton>
				<FormButton onClick={GoLastPage}>
					<StyledIcon icon={faFastForward} />
				</FormButton>
			</div>
		</div>
	);
};

export default TableFooter;

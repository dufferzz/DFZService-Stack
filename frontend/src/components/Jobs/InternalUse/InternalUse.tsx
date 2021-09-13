import React from "react";
import { Field } from "formik";
import { useMutation, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

import Section from "../../_StyledComponents/Section";
import { DangerButton } from "../../_StyledComponents/Button";
import SectionElement from "../../_StyledComponents/SectionElement";
import ErrorField from "../../_StyledComponents/ErrorField";
import ClipboardIcon from "../../../assets/icons/clipboard.svg";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import DELETE_JOB_MUTATION from "../../../querys/jobs/DeleteJobMutation";

import GET_SAFE_USERS_QUERY from "../../../querys/users/GetSafeUserList";

const MySwal = withReactContent(Swal);

const deleteJob = async (id: String, sendDeleteJob: any, history: any) => {
	// console.log(`deleting job ${id}!`);
	MySwal.fire({
		title: <p>Delete Job?</p>,
		icon: "warning",
		showDenyButton: true,
		denyButtonText: "Cancel",
		html: `This action <strong>CAN NOT</strong> be undone!`,
	}).then((data) => {
		if (data.isConfirmed) {
			sendDeleteJob(id)
				.then(({ data }: any) => {
					const res = data.deleteJob;
					// console.log(res);
					if (res.success) {
						history.push(`/`);
						MySwal.fire({
							title: <p>Job Deleted!</p>,
							icon: "success",
							text: `Job ${res.data._id} has been deleted`,
						});
					} else {
						MySwal.fire({
							title: <p>Error!</p>,
							icon: "error",
							text: `${res.error}`,
						});
					}
				})
				.catch((err: any) => {
					MySwal.fire({
						title: <p>Error!</p>,
						icon: "error",
						text: `${err.message}`,
					});
				});
		}
		if (data.isDenied) {
			MySwal.fire({
				title: <p>Operation Cancelled</p>,
				icon: "info",
			});
		}
	});
};
interface IDProp {
	id?: string;
	assigned?: any;
}

const UserList = ({ assigned }: any) => {
	const { data } = useQuery(GET_SAFE_USERS_QUERY);
	// console.log(data);
	return (
		<Field
			as="select"
			type="assigned"
			name="assigned"
			value={assigned}
			style={{ height: "2.5rem" }}
		>
			<option value="not-assigned">Not Assigned</option>
			{data &&
				data.getSafeUserList.data.map((user: any, i: number) => (
					<option key={`${user.nickname}-${i}`} value={user.nickname}>
						{user.nickname}
					</option>
				))}
		</Field>
	);
};

const ManagementButtons = ({ id }: IDProp) => {
	const [sendDeleteJob] = useMutation(DELETE_JOB_MUTATION, {
		variables: { _id: id },
	});
	const history = useHistory();

	if (!id) return <></>;

	return (
		<div
			style={{
				display: "grid",
				gridTemplateColumns: "1fr",
				alignItems: "center",
				textAlign: "center",
				justifyContent: "center",
			}}
		>
			<DangerButton
				type="button"
				onClick={() => {
					deleteJob(id, sendDeleteJob, history);
				}}
			>
				Delete
			</DangerButton>
		</div>
	);
};

const InternalUse = ({ id, assigned }: IDProp) => {
	return (
		<Section
			title="Internal Use"
			icon={ClipboardIcon}
			style={{
				display: "grid",
				gridTemplateColumns: "1fr",
				gridTemplateAreas: `
							'header'
							'content'
							'buttons'
						`,
			}}
		>
			<div
				style={{
					display: "grid",
					gridTemplateColumns: "1fr 1fr 1fr",
					gridGap: "0.25rem",
				}}
			>
				<SectionElement>
					<label htmlFor="assigned">Assigned To*</label>
					{/* <Field type="assigned" name="assigned" /> */}
					<UserList assigned={assigned} />
					<ErrorField name="assigned" component="div" />
				</SectionElement>

				<SectionElement>
					<label htmlFor="status">Job Status*</label>
					<Field
						style={{ height: "2.5rem" }}
						as="select"
						type="status"
						name="status"
					>
						<option value="not-started">Not Started</option>
						<option value="await-parts">Awaiting Parts</option>
						<option value="fuck">FUCK!</option>
						<option value="completed">Completed</option>
					</Field>
					<ErrorField name="status" component="div" />
				</SectionElement>

				<SectionElement>
					<label htmlFor="labourHours">Labour (hrs)</label>
					<Field
						style={{ height: "2.5rem" }}
						as="select"
						type="labourHours"
						name="labourHours"
					>
						<option value={0}>0</option>
						<option value={1}>1</option>
						<option value={2}>2</option>
						<option value={3}>3</option>
						<option value={4}>4</option>
					</Field>
					<ErrorField name="labourHours" component="div" />
				</SectionElement>
			</div>
			<ManagementButtons id={id} />
		</Section>
	);
};
export default React.memo(InternalUse);

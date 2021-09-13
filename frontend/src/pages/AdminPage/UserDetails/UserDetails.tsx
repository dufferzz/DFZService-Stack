import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import query from "../../../querys/users/GetUserDetails";
import Section from "../../../components/_StyledComponents/Section";
import FlexDivCenter from "../../../components/_StyledComponents/FlexDiv";
import CenterDiv from "../../../components/_StyledComponents/CenteredDiv";

import styled from "styled-components";
import dayjs from "dayjs";
import GET_ALL_ROLES_QUERY from "../../../querys/users/GetAllRoles";
import Button, {
	DangerButton,
} from "../../../components/_StyledComponents/Button";
import Loading from "../../../components/_SharedComponents/Loading/Loading";

import ErrorComponent from "../../../components/_SharedComponents/ErrorComponent/ErrorComponent";
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);

const Badge = styled.div`
	background-color: darkgreen;
	border-radius: 50px;
	/* line-height: 2rem; */
	display: flex;
	width: fit-content;
	padding: 0.25rem 1rem;
	align-items: center;
	justify-content: center;
	color: white;
`;

const RoleList = () => {
	const { data } = useQuery(GET_ALL_ROLES_QUERY);

	return (
		<select style={{ height: "2.5rem" }}>
			{data &&
				data.roles.data.map((role: any) => (
					<option key={role.id} value={role.id}>
						{role.name}
					</option>
				))}
		</select>
	);
};

const UserDetails = () => {
	const [editUser, setEditUser] = useState<boolean>(false);
	// eslint-disable-next-line
	const [name, setName] = useState<string>("");
	// eslint-disable-next-line
	const [email, setEmail] = useState<string>("");

	const { id } = useParams<ID>();
	const { data, loading, error } = useQuery(query, {
		variables: {
			userid: id,
		},
	});

	// console.log(data);
	let d;
	if (data && data.getUser.success) {
		d = data.getUser.data;
	}
	return (
		<Section title="User Details">
			{loading && <Loading />}
			{error && <ErrorComponent error={error} />}
			{data && data.getUser.success && (
				<>
					<CenterDiv>
						<div>UserID: {d.user_id}</div>
						<img style={{ width: "150px" }} src={d.picture} alt="User Avatar" />
						<FlexDivCenter style={{ margin: "0.5rem" }}>
							{d.app_metadata.roles.map((role: any) => {
								return <Badge key={role}>{role}</Badge>;
							})}
						</FlexDivCenter>

						{editUser && (
							<div>
								<RoleList />
								<Button>Assign Role</Button>
							</div>
						)}
					</CenterDiv>

					<div style={{ padding: "1rem" }}>
						<div>Email Verified: {d.email_verified.toString()}</div>
					</div>

					<div style={{ padding: "1rem" }}>
						<div>
							Name:
							{editUser ? (
								<div>
									<input
										onChange={(e: any) => {
											setName(e.target.value);
										}}
										type="text"
										value={d.name}
									></input>
									<Button>Change Name</Button>
								</div>
							) : (
								d.name
							)}
						</div>
						<div>
							Email:
							{editUser ? (
								<div>
									<input
										onChange={(e: any) => {
											setEmail(e.target.value);
										}}
										type="text"
										value={d.email}
									></input>
									<Button>Change Email</Button>
								</div>
							) : (
								d.email
							)}
						</div>
					</div>

					<div style={{ padding: "1rem" }}>
						<div>Logins: {d.logins_count}</div>
						<div>Last IP: {d.last_ip}</div>
						<div>
							Last Login:
							{dayjs(d.last_login).format("DD/MM/YY - HH:MM")}
						</div>
					</div>

					<div style={{ padding: "1rem" }}>
						<div>
							Created At:
							{dayjs(d.created_at).format("DD/MM/YY - HH:MM")}
						</div>
						<div>
							Last Modified:
							{dayjs(d.updated_at).format("DD/MM/YY - HH:MM")}
						</div>
					</div>
					<FlexDivCenter>
						{editUser ? (
							<>
								<Button>Save</Button>
								<Button
									onClick={() => {
										setEditUser(false);
									}}
								>
									Cancel
								</Button>
								<DangerButton>Delete User</DangerButton>
							</>
						) : (
							<Button
								onClick={() => {
									setEditUser(true);
								}}
							>
								Edit User
							</Button>
						)}
					</FlexDivCenter>
				</>
			)}
		</Section>
	);
};

export default UserDetails;

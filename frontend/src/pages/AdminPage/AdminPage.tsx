import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import Loading from "../../components/_SharedComponents/Loading/Loading";
import ErrorComponent from "../../components/_SharedComponents/ErrorComponent/ErrorComponent";

import FlexDivCenter from "../../components/_StyledComponents/FlexDiv";
import Section from "../../components/_StyledComponents/Section";
import Dropzone from "react-dropzone";

import { Link } from "react-router-dom";

import NEW_UPLOAD_MUTATION from "../../querys/uploads/NewUploadMutation";
import GET_ALL_UPLOADS_QUERY from "../../querys/uploads/GetAllUploadsQuery";
import GET_ALL_USERS_QUERY from "../../querys/users/GetAllUsers";

import styled from "styled-components";

const AdminPageLayout = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: auto;
	grid-gap: 1rem;
	grid-template-areas: "users uploads";
	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-areas: "users" "uploads";
	}
`;

const UploadsList = () => {
	const { data, error, loading } = useQuery(GET_ALL_UPLOADS_QUERY);
	return (
		<div>
			<ul>
				{!loading && !error && data && (
					<div>
						{data.uploads.data.map((item: any) => (
							<li key={item._id}>
								{item._id} - {item.title}
							</li>
						))}
					</div>
				)}
			</ul>
		</div>
	);
};

const AllUsers = () => {
	const { data, error, loading } = useQuery(GET_ALL_USERS_QUERY);

	// console.log(data);
	return (
		<Section style={{ gridArea: "users" }} title="All Users">
			{loading && <Loading />}
			{error && <ErrorComponent error={error} />}

			{data && data.users.success && (
				<div>
					{data.users.data.map((user: any) => (
						<Link key={user.user_id} to={`/admin/users/${user.user_id}`}>
							<div
								style={{
									display: "flex",
									alignItems: "center",
									margin: "0.25rem",
								}}
							>
								<img
									style={{ width: "55px" }}
									alt={`${user.nickname}`}
									src={user.picture}
								/>
								<div style={{ marginLeft: "0.25rem" }}>
									{user.nickname} - {user.email}
								</div>
							</div>
						</Link>
					))}
				</div>
			)}
			{data && !data.users.success && (
				<ErrorComponent error={data.users.error} />
			)}
		</Section>
	);
};

const Uploads = () => {
	const [uploadFile, { data, error, loading }] = useMutation(
		NEW_UPLOAD_MUTATION
	);

	const handleSubmit = (files: any) => {
		// console.log(files);
		uploadFile({ variables: { file: files, title: "test" } }).then((res) => {
			// console.log(res);
		});
	};

	return (
		<Section style={{ gridArea: "uploads" }} title="Uploads">
			<FlexDivCenter>There is nothing here!?</FlexDivCenter>
			<Dropzone onDrop={(acceptedFiles: any) => handleSubmit(acceptedFiles)}>
				{({ getRootProps, getInputProps }: any) => (
					<section>
						<div {...getRootProps()}>
							<input {...getInputProps()} />
							<p>Drag 'n' drop some files here, or click to select files</p>
						</div>
					</section>
				)}
			</Dropzone>
			<div>
				{!loading && !error && data && <div>{JSON.stringify(data)}</div>}
			</div>
			<UploadsList />
		</Section>
	);
};

const AdminPage = () => {
	return (
		<AdminPageLayout>
			<Uploads />
			<AllUsers />
		</AdminPageLayout>
	);
};

export default AdminPage;

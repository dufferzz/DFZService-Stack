import React from "react";
import { useMutation } from "@apollo/client";
import { Formik, Field } from "formik";
import Dropzone from "react-dropzone";
import ErrorField from "../../components/_StyledComponents/ErrorField";

import Section from "../../components/_StyledComponents/Section";
import SectionElement from "../../components/_StyledComponents/SectionElement";
import PackageIcon from "../../assets/icons/package.svg";

import SubmitFormButton from "../../components/_SharedComponents/Buttons/SubmitFormButton";
import PartFormValidator from "../../validators/PartFormValidator";

import ADD_PART_MUTATION from "../../querys/parts/AddPartMutation";
import FormError from "../../components/FormError";

import Swal from "sweetalert2";

import theme from "../../config/theme";

const AddPartPage = () => {
	const [addPart] = useMutation(ADD_PART_MUTATION);

	const handleResponse = (resp: any) => {
		console.log(resp);
	};

	const handleFileUpload = (acceptedFiles: any) => {};
	return (
		<Section title="Create New Part" icon={PackageIcon}>
			<div
				style={{
					display: "grid",
					alignItems: "center",
					justifyContent: "center",
					border: "1px dashed black",
					borderRadius: theme.defaultBorderRadius,
					height: "200px",
					textAlign: "center",
					gridGap: "0.25rem",
				}}
			>
				<Dropzone
					onDrop={(acceptedFiles: any) => handleFileUpload(acceptedFiles)}
				>
					{({ getRootProps, getInputProps }: any) => (
						<section>
							<div {...getRootProps()}>
								<input {...getInputProps()} />
								<p>Drag 'n' drop some images here, or click here to select</p>
							</div>
						</section>
					)}
				</Dropzone>
			</div>

			<Formik
				initialValues={{
					thumbnail: "",
					partName: "",
					partNumber: "",
					supplier: "",
					price: "",
					description: "",
					Location: "",
					SKU: "",
					stock: "",
				}}
				validationSchema={PartFormValidator}
				onSubmit={async (values, { setSubmitting }) => {
					console.log("submitting");
					await addPart({ variables: values })
						.then(({ data }: any) => {
							handleResponse(data);
							setSubmitting(false);
						})
						.catch((err: any) => {
							console.error(err);
							setSubmitting(false);
							Swal.fire({
								title: <p>Error!</p>,
								icon: "error",
								text: err.message,
							});
						});
				}}
			>
				{({ isSubmitting, errors, handleSubmit, submitForm }) => {
					return (
						<>
							<div
								style={{
									display: "grid",
									gridTemplateColumns: "1fr 1fr",
									gridGap: "0.25rem",
									marginTop: "0.25rem",
									alignItems: "baseline",
								}}
							>
								<SectionElement>
									<label>Thumbnail:</label>
									<Field type="thumbnail" name="thumbnail" />
									<ErrorField name="thumbnail" component="div" />
								</SectionElement>
								<SectionElement>
									<label>Part Name:</label>
									<Field type="partName" name="partName" />
									<ErrorField name="partName" component="div" />
								</SectionElement>
								<SectionElement>
									<label>Part Number:</label>
									<Field type="partNumber" name="partNumber" />
									<ErrorField name="partNumber" component="div" />
								</SectionElement>
								<SectionElement>
									<label>Supplier:</label>
									<Field type="supplier" name="supplier" />
									<ErrorField name="supplier" component="div" />
								</SectionElement>
								<SectionElement>
									<label>Location:</label>
									<Field type="Location" name="Location" />
									<ErrorField name="Location" component="div" />
								</SectionElement>

								<SectionElement>
									<label>Price:</label>
									<Field type="price" name="price" />
									<ErrorField name="price" component="div" />
								</SectionElement>
								<SectionElement>
									<label>SKU:</label>
									<Field type="SKU" name="SKU" />
									<ErrorField name="SKU" component="div" />
								</SectionElement>

								<SectionElement>
									<label>Stock:</label>
									<Field type="stock" name="stock" />
									<ErrorField name="stock" component="div" />
								</SectionElement>
							</div>
							<div style={{ width: "100%" }}>
								<label>Description:</label>
								<Field
									style={{ width: "100%" }}
									rows={7}
									as="textarea"
									type="description"
									name="description"
								/>
								<ErrorField name="description" component="div" />
							</div>
							{errors && (
								<FormError isSubmitting={isSubmitting} errors={errors} />
							)}
							<SubmitFormButton
								handleSubmit={handleSubmit}
								isSubmitting={isSubmitting}
							/>
						</>
					);
				}}
			</Formik>
		</Section>
	);
};

export default AddPartPage;

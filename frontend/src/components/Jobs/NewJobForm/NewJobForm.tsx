import React, { useState } from "react";
import { Formik } from "formik";
import { useMutation } from "@apollo/client";

import CustomerInfo from "../CustomerInfo";
import JobDetails from "../JobDetails";
import InternalUse from "../InternalUse/InternalUse";
import PartsView from "../JobParts";

import SubmitFormButton from "../../_SharedComponents/Buttons/SubmitFormButton";
import FormError from "../../FormError";
import NEWJOB_MUTATION from "../../../querys/jobs/NewJobMutation";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useHistory } from "react-router-dom";

import JobFormValidator from "../../../validators/JobFormValidator";
const MySwal = withReactContent(Swal);

// {
// 	partName: "Fake Item",
// 	partNumber: "234234",
// 	partQty: "2",
// 	partPrice: "342",
// },
export const NewJobForm = () => {
	const history = useHistory();

	const [addJob] = useMutation(NEWJOB_MUTATION, {});
	const [parts, setParts] = useState<Array<JobPart>>([]);

	return (
		<Formik
			initialValues={{
				customername: "",
				email: "",
				phonenumber: "",
				address1: "",
				address2: "",
				contactphone: "",
				city: "",
				district: "",
				postcode: "",
				date: "",
				todo: "",
				done: "",
				make: "",
				model: "",
				assigned: "nobody",
				year: "",
				serial: "",
				status: "not-started",
				labourHours: "0",
			}}
			validationSchema={JobFormValidator}
			onSubmit={async (values, { setSubmitting, resetForm }) => {
				window.scrollTo({ top: 0, behavior: "smooth" });
				// console.log(values);
				const newvalues: any = values;
				newvalues.parts = parts;
				await addJob({ variables: newvalues })
					.then(({ data }: any) => {
						const res = data.addJob;
						if (res.success) {
							resetForm();
							MySwal.fire({
								title: <p>Success!</p>,
								icon: "success",
								text: `Job ${res.data._id} Created`,
								showDenyButton: true,
								denyButtonText: "View Job",
							}).then((data) => {
								if (data.isDenied) {
									history.push(`/job/${res.data._id}`);
								}
							});
						} else {
							MySwal.fire({
								title: <p>Error!</p>,
								icon: "error",
								text: `${res.error}`,
							});
						}
						setSubmitting(false);
					})
					.catch((err: any) => {
						MySwal.fire({
							title: <p>Error!</p>,
							icon: "error",
							text: err.message,
						});
						console.error(err);
					});
			}}
		>
			{({ isSubmitting, errors, handleSubmit }) => (
				<>
					<CustomerInfo />
					<JobDetails />

					<PartsView parts={parts} setParts={setParts} />
					<InternalUse />
					<SubmitFormButton
						handleSubmit={handleSubmit}
						isSubmitting={isSubmitting}
					/>
					{errors && <FormError isSubmitting={isSubmitting} errors={errors} />}
				</>
			)}
		</Formik>
	);
};

export default NewJobForm;

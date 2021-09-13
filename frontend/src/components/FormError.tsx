import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { FormikErrors } from "formik";
const MySwal = withReactContent(Swal);

const isEmptyObject = (errors: FormikErrors<any>) =>
	JSON.stringify(errors) === "{}";

interface FormErrorProps {
	errors: FormikErrors<any>;
	isSubmitting: boolean;
}

const FormError = ({ errors, isSubmitting }: FormErrorProps) => {
	if (isSubmitting && !isEmptyObject(errors)) {
		MySwal.fire({
			title: <p>Invalid Form</p>,
			icon: "error",
			text: JSON.stringify(errors),
		});
	}
	return <></>;
};

export default FormError;

import * as Yup from "yup";

const JobFormValidator = Yup.object().shape({
	customername: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),

	email: Yup.string().email("Invalid email").required("Required"),
	city: Yup.string().required("Required"),
	address1: Yup.string().required("Required"),
	district: Yup.string().required("Required"),
	postcode: Yup.string().required("Required"),
	assigned: Yup.string().required("Required"),
	status: Yup.string().required("Required"),
});

export default JobFormValidator;

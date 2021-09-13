import * as Yup from "yup";

const PartFormValidator = Yup.object().shape({
	partName: Yup.string()
		.min(2, "Too Short!")
		.max(70, "Too Long!")
		.required("Required"),

	partNumber: Yup.string().required("Required"),
	stock: Yup.string().required("Required"),
	supplier: Yup.string().required("Required"),
	Location: Yup.string().required("Required"),
	SKU: Yup.string().required("Required"),
});

export default PartFormValidator;

interface SingleJobProp {
	job: Job;
}
type JobFormValuesProp = {
	_id?: string;
	customername: string;
	address1: string;
	address2: string;
	email: string;
	city: string;
	district: string;
	postcode: string;
	todo: string;
	done: string;
	modified?: string;
	created?: string;
	status: string;
	model: string;
	make: string;
	year: string;
	serial: string;
	parts?: JobPart[];
	assigned: string;
	labourHours: string;
};

interface JobDetailsFormProps {
	values?: JobFormValuesProp;
	handleChange: any;
}

interface SinglePartProp {
	part: JobPart;
}
interface JobPartsProp {
	parts: JobPart[];
	setParts: any;
}

type StatusImageProp = {
	image: string;
	status: string;
};

interface PartRowPropType {
	part: DBPart;
	key: string;
}

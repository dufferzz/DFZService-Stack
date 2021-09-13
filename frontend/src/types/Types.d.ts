type Job = {
	_id: string;
	customername: string;
	parts: JobPart[];
	contactphone: string;
	email: string;
	city: string;
	district: string;
	postcode: string;
	created: string;
	address1: string;
	address2: string;
	modified: string;
	todo: string;
	done: string;
	status: string;

	assigned: string;
	make: string;
	model: string;
	year: string;
	serial: string;
	labourHours: string;
};

interface StatusType {
	status: string;
}

type ID = {
	id: string;
};

type JobPart = {
	partName: string;
	partNumber: string;
	partQty: string;
	price: string;
};

type DBPart = {
	_id: string;
	partName: string;
	price: string;
	partNumber: string;
	Location: string;
	thumbnail: string;
	supplier: string;
};

type WidthHeight = {
	width: number;
	height: number;
};

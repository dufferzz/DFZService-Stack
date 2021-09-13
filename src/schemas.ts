import { jobSchema } from "./sources/jobs";
import { partSchema } from "./sources/parts";
import { uploadSchema } from "./sources/uploads";
import { userSchema } from "./sources/users";

const schemas = [jobSchema, partSchema, uploadSchema, userSchema];

export default schemas;

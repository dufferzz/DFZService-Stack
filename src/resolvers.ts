import { jobResolver } from "./sources/jobs";
import { partResolver } from "./sources/parts";
import { uploadResolver } from "./sources/uploads";
import { userResolver } from "./sources/users";

const resolvers = [jobResolver, partResolver, uploadResolver, userResolver];

export default resolvers;

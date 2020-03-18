import { merge } from "lodash";
import { typeDef as User, resolvers as userResolvers } from "./UserSchema";
import { makeExecutableSchema } from "graphql-tools";

const baseTypeDefs = `
  type Query {
    _empty: String
  }
  type Mutation{
    _empty: String
  }
`;
const baseResolvers = {};

const schema = makeExecutableSchema({
  typeDefs: [baseTypeDefs, User],
  resolvers: merge(baseResolvers, userResolvers)
});

export default schema;

import { ApolloServer } from "apollo-server-express";
import schema from "../../schemas/index";
export const server = new ApolloServer({
  // These will be defined for both new or existing servers
  schema,
  context: ({ req, res }: any) => ({ req, res })
});

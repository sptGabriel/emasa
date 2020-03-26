import { buildSchema } from "type-graphql";
import { UserResolver } from "../modules/...";
export const createSchema = () =>
  buildSchema({
    resolvers: [UserResolver]
  });

import { buildSchema } from "type-graphql";
import { UserResolver } from "../modules/user/UserResolver";
export const createSchema = () =>
  buildSchema({
    resolvers: [UserResolver]
  });

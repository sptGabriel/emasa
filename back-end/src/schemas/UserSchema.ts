// Construct a schema, using GraphQL schema language
import { gql } from "apollo-server-express";
import { User } from "../entity/User";
import timeStamp from "../custom_scalar/timestamp";
// Provide resolver functions for your schema fields
export const typeDef = gql`
  scalar TimeStamp
  extend type Query {
    getUser(id: Int!): User
  }
  extend type Mutation {
    addUser(
      name: String!
      email: String
      age: Int
      register_at: TimeStamp!
    ): Boolean!
  }
  type User {
    id: Int!
    name: String!
    email: String!
    age: Int!
    register_at: TimeStamp!
  }
`;

export const resolvers = {
  TimeStamp: timeStamp,
  Query: {
    getUser: async (_: any, args: any) => {
      const { id } = args;

      return await User.findOne({ where: { id: id } });
    }
  },
  Mutation: {
    addUser: async (_: any, args: any) => {
      const { name, email, age, register_at } = args;
      try {
        const user = User.create({
          name,
          email,
          age,
          register_at
        });

        await user.save();

        return true;
      } catch (error) {
        return false;
      }
    }
  }
};

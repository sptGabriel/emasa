import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./typeDefs";
import { resolvers } from "./resolvers";

const startServer = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req, res }: any) => ({ req, res })
  });
  let retries = 5;
  while (retries) {
    try {
      await createConnection();
      break;
    } catch (err) {
      console.log(err);
      retries -= 1;
      console.log(`retries left: ${retries}`);

      await new Promise(res => setTimeout(res, 5000));
    }
  }
  const app = express();

  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();

import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import cors from "cors";
import schema from "./schemas/index";

const main = async () => {
  await createConnection();
  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res })
  });
  // let retries = 5;
  // while (retries) {
  //   try {
  //     await createConnection();
  //     break;
  //   } catch (err) {
  //     console.log(err);
  //     retries -= 1;
  //     console.log(`retries left: ${retries}`);

  //     await new Promise(res => setTimeout(res, 5000));
  //   }
  // }
  const app = express();

  server.applyMiddleware({ app });

  app.listen({ port: process.env.SERVER_PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

main();

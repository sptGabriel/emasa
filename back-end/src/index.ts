import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import xssFilter from "x-xss-protection";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { ApolloServer } from "apollo-server-express";
import { createSchema } from "./utils/createSchema";

const main = async () => {
  await createConnection();
  const schema = await createSchema();
  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res })
  });

  /*##########  cors Configs  ##########*/
  const whiteList = [
    process.env.CORS_APPROVED_ADDRESS,
    `http://localhost:${process.env.SERVER_PORT}`
  ];
  const corsOptionsDelegate = {
    origin: (origin, cb) => {
      whiteList.indexOf(origin) !== -1 || !origin
        ? cb(null, true)
        : cb(new Error("Not allowed by CORS"));
    }
  };
  /*##########  cors Configs  ##########*/

  const app = express();
  app.use(helmet());
  app.use(cors(corsOptionsDelegate));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(xssFilter());
  app.disable("x-powered-by");
  // app.use(require("csurf")({ cookie: true }));
  // app.use(csrf());
  server.applyMiddleware({ app });

  app.listen({ port: process.env.SERVER_PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

main();

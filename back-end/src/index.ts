import "reflect-metadata";
import { createConnection } from "typeorm";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import xssFilter from "x-xss-protection";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { verify } from "jsonwebtoken";
import { ApolloServer } from "apollo-server-express";
import { createSchema } from "./utils/createSchema";
import { User } from "./entity/User";
import { sendRefreshToken } from "./sendRefreshToken";
import { createAccessToken, createRefreshToken } from "./auth";

const main = async () => {
  const app = express();

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

  app.use(helmet());
  app.use(cors(corsOptionsDelegate));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(xssFilter());
  app.disable("x-powered-by");
  // app.use(require("csurf")({ cookie: true }));
  // app.use(csrf());

  /*##########  Route Refresh  ##########*/

  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.jid;
    if (!token) {
      return res.send({ ok: false, accessToken: "" });
    }

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return res.send({ ok: false, accessToken: "" });
    }

    const user = await User.findOne({ id: payload.userId });

    if (!user) {
      return res.send({ ok: false, accessToken: "" });
    }

    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: "" });
    }

    sendRefreshToken(res, createRefreshToken(user));

    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  /*##########  Route Refresh  ##########*/

  app.listen({ port: process.env.SERVER_PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
  await createConnection();
  const schema = await createSchema();
  const server = new ApolloServer({
    schema,
    context: ({ req, res }: any) => ({ req, res })
  });
  server.applyMiddleware({ app });
};

main();

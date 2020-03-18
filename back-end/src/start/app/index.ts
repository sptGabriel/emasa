import express from "express";
import { addCors } from "./cors";
import { listen } from "./listen";

export const createApp = () => {
  const app = express();
  listen(app);
};

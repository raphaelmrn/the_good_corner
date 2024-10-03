import "reflect-metadata";
import express from "express";
//import sqlite3 from "sqlite3";
import { dataSource } from "./config/db";
import cors from "cors";
import categoriesRouter from "./routes/categories";
import tagsRouter from "./routes/tags";
import adsRouter from "./routes/ads";

//const db = new sqlite3.Database("./the-good-corner.sqlite");

const app = express();
app.use(express.json());
app.use(cors());

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.use("/categories", categoriesRouter);
app.use("/tags", tagsRouter);
app.use("/ads", adsRouter);

app.listen(port, async () => {
  await dataSource.initialize();
  console.log(`Example app listening on port ${port}`);
});

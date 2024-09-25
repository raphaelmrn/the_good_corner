import express from "express";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./the-good-corner.sqlite");

const app = express();
const port = 4000;

type Ad = {
  id: number;
  title: string;
  description: string;
  owner: string;
  price: number;
  picture: string;
  location: string;
  createdAt: string;
};

app.use(express.json());

app.get("/", (req, res) => {
  res.send("hellow");
});

app.get("/ads", (req, res) => {
  db.all("SELECT $ FROM ad", (err, rows) => {
    res.json(rows);
  });
});

app.post("/ads", (req, res) => {
  const { title, description, owner, price, createdAt, picture, location } =
    req.body;
  db.run(
    "INSERT INTO ad ('title', 'description', 'owner', 'price', 'createdAt', 'picture', 'location') values (?, ?, ?, ?, ?, ?, ?)",
    [title, description, owner, price, createdAt, picture, location],
    (err) => {
      console.log(err);
      res.send("Request received, check the backend terminal");
    }
  );
  // ads.push(req.body);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

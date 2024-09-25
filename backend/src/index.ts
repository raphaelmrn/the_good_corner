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
  db.all("SELECT * FROM ad", (err, rows) => {
    if (err) return res.status(500).send(err);
    if (!rows.length) return res.status(404).send(err);
    return res.json(rows);
  });
});

app.get("/ads/:id", (req, res) => {
  const id = Number(req.params.id);
  db.all("SELECT * FROM ad WHERE id =?", id, (err, rows) => {
    if (err) return res.status(500).send(err);
    if (!rows.length) return res.status(404).send(err);
    return res.json(rows);
  });
});

app.delete("/ads/:id", (req, res) => {
  const id = Number(req.params.id);
  db.run("DELETE FROM ad WHERE id =?", id, (err) => {
    if (err) return res.status(500).send(err);
    return res.status(204).send();
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

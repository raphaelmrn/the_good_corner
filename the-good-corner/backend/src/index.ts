import "reflect-metadata";
import express from "express";
import sqlite3 from "sqlite3";
import { dataSource } from "./config/db";

const db = new sqlite3.Database("./the-good-corner.sqlite");

const app = express();
app.use(express.json());

const port = 3000;

// type Ad = {
// 	id: number;
// 	title: string;
// 	description?: string;
// 	owner: string;
// 	price: number;
// 	picture: string;
// 	location: string;
// 	createdAt: string;
// };

app.get("/", (req, res) => {
	res.send("Hello World!");
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
	db.all("SELECT * FROM ad WHERE id=?", id, (err, rows) => {
		if (err) return res.status(500).send(err);
		if (!rows.length) return res.status(404).send(err);
		return res.json(rows);
	});
});

app.delete("/ads/:id", (req, res) => {
	const id = Number(req.params.id);
	db.run("DELETE FROM ad WHERE id=?", id, (err) => {
		if (err) return res.status(500).send(err);
		return res.status(204).send();
	});
});

app.post("/ads", (req, res) => {
	const { title, description, owner, price, createdAt, picture, location } =
		req.body;
	// const newAd: Omit<Ad, "id"> = {
	// 	title,
	// 	description,
	// 	owner,
	// 	price,
	// 	createdAt,
	// 	picture,
	// 	location,
	// }; // <- TODO: trouver comment forcer newAd à être une Ad valide au runtime

	db.run(
		"INSERT INTO ad ('title', 'description', 'owner', 'price', 'createdAt', 'picture', 'location') values (?, ?, ?, ?, ?, ?, ?)",
		[title, description, owner, price, createdAt, picture, location],
		(err) => {
			if (err) return res.status(500).send(err);
			return res.status(201).send();
		},
	);
});

app.listen(port, async () => {
	await dataSource.initialize();
	console.log(`Example app listening on port ${port}`);
});

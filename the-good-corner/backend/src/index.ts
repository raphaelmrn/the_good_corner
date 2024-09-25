import express from "express";
import sqlite3 from "sqlite3";

const db = new sqlite3.Database("./the-good-corner.sqlite");

const app = express();
app.use(express.json());

const port = 3000;

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

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/ads", (req, res) => {
	db.all("SELECT * FROM ad", (err, rows) => {
		res.json(rows);
	});
});

app.post("/ads", (req, res) => {
	db.run(
		"INSERT INTO ad ('title', 'description', 'owner', 'price', 'createdAt', 'picture', 'location') values ('title', 'description', 'owner', 42, '2024-09-25', 'https://imgur.com', 'Lille')",
		(err) => {
			console.log(err);

			res.send("Request received, check the backend terminal");
		},
	);

	// ads.push(req.body as Ad);
	// res.send("Request received, check the backend terminal");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});

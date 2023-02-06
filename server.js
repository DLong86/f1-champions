const express = require("express");
const app = express();
const db = require("./data/db");
const cors = require("cors");

const port = 8080;
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello Stats");
});

// Route to get all drivers
app.get("/drivers", (req, res) => {
	db.query("SELECT * FROM drivers", (err, result) => {
		if (err) {
			console.error(err);
		}
		res.send(result);
	});
});

// Route to get all drivers
app.get("/constructors", (req, res) => {
	db.query("SELECT * FROM constructors", (err, result) => {
		if (err) {
			console.error(err);
		}
		res.send(result);
	});
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

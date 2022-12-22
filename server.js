const express = require("express");
const app = express();
const db = require("./data/db");
const cors = require("cors");

const port = 8080;
app.use(cors());

// Route to get all drivers
app.get("/", (req, res) => {
	db.query("SELECT * FROM drivers", (err, result) => {
		if (err) {
			console.error(err);
		}
		res.send(result);
	});
});

app.get("/year", (req, res) => {
	db.query(
		"SELECT * FROM drivers WHERE year BETWEEN 1980 AND 1990",
		(err, result) => {
			if (err) {
				console.error(err);
			}
			res.send(result);
		}
	);
});

app.listen(port, () => console.log(`Server running on port: ${port}`));

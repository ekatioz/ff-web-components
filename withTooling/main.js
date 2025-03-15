const ejs = require("ejs");
const express = require("express");
const path = require("node:path");
const fs = require("node:fs");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");
const { getArticles } = require("./src/api/articles");

const app = express();
const PORT = 3000;

// Create a livereload server
const liveReloadServer = livereload.createServer();
liveReloadServer.watch([
	path.join(__dirname, "src", "**", "*"),
	path.join(__dirname, "assets", "**", "*"),
]);

// Add livereload middleware before other middlewares
app.use(connectLivereload());

app.use("/assets", express.static("assets"));

app.get("/favicon.ico", (req, res) => {
	res.sendStatus(204);
});

app.get("/api/articles", (req, res) => {
	const { q } = req.query;

	setTimeout(() => {
		res.json(
			getArticles().filter(
				(article) =>
					article.title.toLowerCase().includes(q.toLowerCase()) ||
					article.content.toLowerCase().includes(q.toLowerCase()),
			),
		);
	}, 500);
});

app.get("*", (req, res) => {
	const requestedPath = path.join(__dirname, "src", "pages", req.path);
	const filePath = path.join(requestedPath, "index.ejs");
	const dataPath = path.join(requestedPath, "index.js");

	fs.access(filePath, fs.constants.F_OK, (err) => {
		if (err) {
			return res.sendStatus(404);
		}

		let data = {};
		if (fs.existsSync(dataPath)) {
			try {
				data = require(dataPath).default();
			} catch (error) {
				console.error(error);
			}
		}

		ejs.renderFile(filePath, data, (err, str) => {
			if (err) {
				console.error(err);
				return res.sendStatus(500);
			}
			res.send(str);
		});
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});

// Notify livereload server on changes
liveReloadServer.server.once("connection", () => {
	
	setTimeout(() => {
		liveReloadServer.refresh("/");
	}, 100);
});

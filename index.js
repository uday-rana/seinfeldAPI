const express = require(`express`);
const cors = require(`cors`);
const quotes = require(`./quotes.js`);
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.static(`public`));

app.get(`/`, (req, res) => {
	res.json({ message: "Welcome to the Seinfeld API. For a random quote, go to /random. For all quotes, go to /all." });
});

app.get(`/random`, (req, res) => {
	res.json(quotes[Math.floor(Math.random() * quotes.length)]);
});

app.get(`/all`, (req, res) => {
	res.json(quotes);
});

app.use((req, res) => {
	res.status(404).json({ error: "Seinfeld API returned status code 404" });
});

app.listen(HTTP_PORT, () => {
	console.log(`Seinfeld API listening on port ${HTTP_PORT}`);
});

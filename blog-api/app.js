
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}


const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mongoDb = process.env.MONGODB_CONNECTION_URL;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
db.on("open", () => console.log("Database is ready for interactions..."));

const Post = mongoose.model(
  "Post",
  new Schema({
    title: { type: String, required: true, maxLength: 250 },
    text: { type: String, required: true },
    date: { type: Date, required: true }
  })
);

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(function(req, res, next) {
  console.log(req.path)		// log the path
  next()
})

app.get("/", (req, res) => {
	res.send("hello world")
})
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
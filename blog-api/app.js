
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}


const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bodyParser = require('body-parser')

const mongoDb = process.env.MONGODB_CONNECTION_URL;
mongoose.connect(mongoDb, { useUnifiedTopology: true, useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "mongo connection error"));
db.on("open", () => console.log("Database is ready for interactions..."));

const PostSchema =   new Schema({
    title: { type: String, required: true, maxLength: 250 },
    text: { type: String, required: true },
    date: { type: Date, required: true }
  });

PostSchema.virtual('url')
 .get(function() { return '/all-posts/' + this._id })

const Post = mongoose.model(
  "Post",
  PostSchema
);

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use(function(req, res, next) {
  console.log(req.path)		// log the path
  next()
})

app.get("/", (req, res) => {
	res.send("hello world")
})

// GET All posts
app.get('/all-posts', (req, res) => {
	Post.find().exec((err, posts) => {
		console.log(posts.map(p => p.url))
		res.send(posts)
	})
})
// CREATE new post
app.post('/all-posts', (req, res) => {
	new Post({
		title: req.body.title,
		text: req.body.text,
		date: req.body.date
	}).save((err) => {
		if (err) {res.sendStatus(403)}
		else {res.sendStatus(202)}
	})
})

// Get ONE post
app.get('/all-posts/:postId', (req, res) => {
	Post.findById(req.params.postId).exec((err, post) => {
		if (err) { res.sendStatus(404) }
		res.send(post)
	})
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));
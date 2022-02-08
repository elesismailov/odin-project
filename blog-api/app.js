
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}


const express = require("express");
const jwt = require('jsonwebtoken');
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
	Post.find({}, 'title text date').exec((err, posts) => {
		res.send(posts)
	})
})
// CREATE new post
app.post('/all-posts', verifyToken, (req, res) => {
	jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
		if (err) {res.sendStatus(403)}
		else {
			if (req.body.title && req.body.text && req.body.date) {
				new Post({
					title: req.body.title,
					text: req.body.text,
					date: req.body.date
				}).save((err) => {
					if (err) {res.sendStatus(400)}
					else {res.sendStatus(201)}
				})
			} else {
				res.sendStatus(400)
			}
		}
	})
})

// Get ONE post
app.get('/all-posts/:id', (req, res) => {
	Post.findById(req.params.id).exec((err, post) => {
		if (err) { res.sendStatus(404) }
		res.send(post)
	})
})
// UPDATE new post
app.put('/all-posts/:id', (req, res) => {

	Post.findById(req.params.id, (err, post) => {
		post.title = req.body.title || post.title;
		post.text = req.body.text || post.text;
		post.save((err) => {
			if (err) { res.sendStatus(400) }
			else { res.sendStatus(202) }
		})
	})
})

// DELETE a post
app.delete('/all-posts/:id', verifyToken, (req, res) => {

	jwt.verify(req.token, process.env.JWT_KEY, (err, authData) => {
		if (err) {res.sendStatus(403)}
		else {
			Post.deleteOne({'_id': req.params.id}).exec((err) => {
				if (err) { res.sendStatus(400) }
				else { res.sendStatus(202) }
			})
		}
	})
})

app.get('/log-in', (req, res) => {
	// Here is supposed to be checking in database for the user
	// MOCK user
	const user = {
		id: 0,
		username: 'eles',
		email: 'eleswastaken@gmail.com'
	}

	jwt.sign({user}, process.env.JWT_KEY, (err, token) => {
		res.json({ token })
	})
})

function verifyToken(req, res, next) {

	const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader !== 'undefined') {
		const token = bearerHeader.split(' ')[1];
		req.token = token
		next()
	} else {
		res.sendStatus(403)
	}
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));

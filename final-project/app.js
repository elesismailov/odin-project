
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}

const feedRouter = require('./routes/feed.js');
const usersRouter = require('./routes/users.js');
const postsRouter = require('./routes/posts.js');
const friendsRouter = require('./routes/friends.js');

const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');

const initializeMongoServer = require('./mongoConfig'); 
// const initializeMongoServer = require('./mongoConfigTesting'); 

const app = express();
initializeMongoServer()

app.use(express.urlencoded({ extended: false }));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
  console.log(req.path)		// log the path
  next()
})

// verify token
app.use(function(req, res, next) {

	console.log(req.body);
	if (req.body.username === 'hello' && req.body.password === 123) {
		res.locals.user = { _id: '620a110ae7fcf3c55afe99b0'};
		next()
	} else {
		next(new Error("not allowed wuwu"))
	}
});

// ROUTERS
app.use('/api/feed', feedRouter)
//app.use('/api/users', usersRouter)
//app.use('/api/posts', postsRouter)
app.use('/api/friends', friendsRouter)

app.use((err, req, res) => {
	res.sendStatus(404);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));

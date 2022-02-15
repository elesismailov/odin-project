
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}

const feedRouter = require('./routes/feed.js');
const usersRouter = require('./routes/users.js');
const postsRouter = require('./routes/posts.js')

const mongoose = require("mongoose");
const express = require('express');

const initializeMongoServer = require('./mongoConfig'); 
// const initializeMongoServer = require('./mongoConfigTesting'); 

const app = express();
initializeMongoServer()

app.use(function(req, res, next) {
  console.log(req.path)		// log the path
  next()
})


// ROUTERS
app.use('/api/feed', feedRouter)
//app.use('/api/users', usersRouter)
//app.use('/api/posts', postsRouter)

app.get("/", (req, res) => {
	res.send("hello world")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));


if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}

const feedRouter = require('./routes/feed.js');
const usersRouter = require('./routes/users.js');
const postsRouter = require('./routes/posts.js');
const friendsRouter = require('./routes/friends.js');

const UserModel = require('./models/user.js');
const mongoose = require("mongoose");
const express = require('express');
const bodyParser = require('body-parser');

const jwt = require('jsonwebtoken');

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

function tokenExists(req) {
	const bearerHeader = req.headers['authorization'];
	if (typeof bearerHeader !== 'undefined') {
		const token = bearerHeader.split(' ')[1];
		return token;
	}
	return null
}

// verify token
app.use(function(req, res, next) {
	const token = tokenExists(req);
	if (req.path === '/log-in') { 
		// the only allowed path
		next()
	} else if (token) {
		jwt.verify(token, 'a very secret key', (err, authData) => {
			console.log(authData)
			if (err) { res.sendStatus(403) }
			else {
				res.locals.user = authData;
				next()		
			}
		})
	} else {
		res.sendStatus(403)
		// next(new Error("Please log in to access..."))
	}
});

// ROUTERS
app.use('/api/feed', feedRouter)
app.use('/api/users', usersRouter)
//app.use('/api/posts', postsRouter)
app.use('/api/friends', friendsRouter)

app.post('/log-in', async function(req, res) {
	const { email, password } = req.body;
	const user = await UserModel.findOne({email})
	if (user === null) {
		res.sendStatus(400)
	} else if (user.password === password) {
	    const token = await jwt.sign({user}, 'a very secret key');
	    res.json({token})
	} else {
		res.sendStatus(400)
	}
})

//app.use((err, req, res) => {
//	res.sendStatus(404);
//})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Running on ${PORT}`));

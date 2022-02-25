
require('dotenv').config()

const mongoose = require('mongoose');

const User = require('./models/user.js');
const Post = require('./models/post.js');
const async = require('async');
const { faker } = require('@faker-js/faker');


const mongodb = process.env.MONGODB_CONNECTION_URL;

mongoose.connect(mongodb, {});

const db = mongoose.connection;

db.on("error", () => console.log("DB Connection error"));
db.on('open', () => console.log('Ready for interactions'));

const users = [];
const posts = [];

function createUser(username, cb) {
	const user = {username, email: faker.internet.email(), password: faker.internet.password()};
	const u = new User(user);
	u.save((err) => {
		if (err) {
			cb(err, null)
			return 
		}
		users.push(u)
		cb(null, u)
	})
}

function createPost(user, cb) {
	const post = {user, title: faker.lorem.sentence(), text: faker.lorem.paragraph(), date: faker.datatype.datetime()};
	const p = new Post(post);
	p.save((err) => {
		if (err) {
			cb(err, null)
			return
		}
		posts.push(p)
		cb(null, p)
	})
}

function excludeUser(user, users) {
	console.log(users)
	return users.filter(u => u !== user)
}

function makeFriends(user, users) {
	console.log(users)
	users.map(u => {
		user.friends.push(u._id);
	});
	user.save(err => {
		if (err) {
			console.log(err)
		}
	})
}

function createFriends(cb) {
	console.log(users)
	for (const user of users) {
		makeFriends(user, excludeUser(user, users))
	}
	cb()
}

function createUsers(cb) {
	async.series([
		function(callback) {
			createUser(faker.name.findName(), callback)
		},
		function(callback) {
			createUser(faker.name.findName(), callback)
		},
		function(callback) {
			createUser(faker.name.findName(), callback)
		},
		function(callback) {
			createUser(faker.name.findName(), callback)
		},
		function(callback) {
			createUser(faker.name.findName(), callback)
		},
		function(callback) {
			createUser(faker.name.findName(), callback)
		},
		function(callback) {
			createUser(faker.name.findName(), callback)
		},
	], cb)
}



function createPosts(cb) {
	async.series([
		function(callback) {
			createPost(users[0], callback)
		},
		function(callback) {
			createPost(users[1], callback)
		},
		function(callback) {
			createPost(users[2], callback)
		},
		function(callback) {
			createPost(users[3], callback)
		},
		function(callback) {
			createPost(users[4], callback)
		},
		function(callback) {
			createPost(users[5], callback)
		},
		function(callback) {
			createPost(users[6], callback)
		},
	], cb)
}

async.series([
	createUsers,
	createPosts,
	createFriends,
	
], )

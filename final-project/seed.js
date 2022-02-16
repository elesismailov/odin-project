
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
		}
		users.push(u)
		cb(null, u)
	})
}

function createPost(user, cb) {
	const post = {user, title: faker.lorem.sentence(), text: faker.lorem.paragraph()};
	const p = new Post(post);
	p.save((err) => {
		if (err) {
			cb(err, null)
		}
		posts.push(p)
		cb(null, p)
	})
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
	async.parallel([
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
		function(callback) {
			createPost(users[7], callback)
		},
	], cb)
}

async.series([
	createUsers,
], function() {mongoose.connection.close()})

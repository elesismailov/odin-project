
if (process.env.NODE_ENV === 'development') {
	require('dotenv').config()
}

const mongoose = require('mongoose');

const mongodb = process.env.MONGODB_CONNECTION_URL;

mongoose.connect(mongodb, {});

const db = mongoose.connection;

db.on("error", () => console.log("DB Connection error"));
db.on('open', () => console.log('Ready for interactions'));




const express = require('express');
const router = express.Router();

const UserModel = require('../models/user.js');

router.get('/', function(req, res) {
	// get the current user id and look up the friends
	UserModel.findById(res.locals.user._id).exec((err, user) => {
		res.json(user.friends)
	});
});
module.exports = router;

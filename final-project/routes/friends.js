
const express = require('express');
const router = express.Router();

const UserModel = require('../models/user.js');

router.get('/', function(req, res) {
	// get the current user id and look up the friends
	UserModel.findById(req.currentUserId).exec((err, user) => {
		if (err) { res.sendStatus(400); console.log(err)}
		else {
			res.json({friends: user.friends})
		}
	});
});

router.get('/:id', function(req, res) {
	UserModel.findById(req.params.id).exec((err, user) => {
		res.json(user)
	})
});

router.delete('/:id', function(req, res) {
	res.send('not implemented: delete a friend')
});

router.post('/:id', function(req, res) {
	res.send('not implemented: send a friend request')
});

module.exports = router;


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

router.delete('/:id', async function(req, res) {
	const currentUser = await UserModel.findById(req.currentUserId);
	const d = await UserModel.findById(req.params.id);
	if (!currentUser && !d) {
		res.sendStatus(404)
		return
	}
	if (currentUser.friends.includes(d._id)) {
		currentUser.friends.splice(currentUser.friends.indexOf(d._id), 1)
		const s = await currentUser.save();
		if (s) {
			res.sendStatus(202)
			return
		}
		res.sendStatus(400)
	} else {
		res.sendStatus(400)
	}
});

router.post('/:id', async function(req, res) {
	const sender = await UserModel.findById(req.currentUserId);
	const reciever = await UserModel.findById(req.params.id);
	if (!sender && !reciever) {
		res.sendStatus(400)
		return
	}
	if (sender.friendRequestsTo.includes(reciever._id)) {
		res.sendStatus(202)
		return
	}
	sender.friendRequestsTo.push(reciever._id)
	reciever.friendRequestsFrom.push(sender._id)
	const s = await sender.save();
	const r = await reciever.save();
	if (s && r) {
		res.sendStatus(202);
		return
	}
});

module.exports = router;

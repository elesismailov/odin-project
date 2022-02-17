
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
	if (!d) {
		res.sendStatus(404)
		return
	}
	if (currentUser.friends.includes(d._id)) {
		currentUser.friends.splice(currentUser.friends.indexOf(d._id), 1)
		d.friends.splice(d.friends.indexOf(currentUser._id), 1)
		const s = await currentUser.save();
		const c = await d.save();
		if (s && c) {
			res.sendStatus(202)
			return
		}
		res.sendStatus(400)
	} else {
		res.sendStatus(400)
	}
});

// SEND A FRIEND REQUEST
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

// ACCEPT A FRIEND REQUEST
router.put('/:id', async function(req, res) {
	const currentUser = await UserModel.findById(req.currentUserId);
	if (currentUser.friendRequestsFrom.includes(req.params.id)) {
		const sender = await UserModel.findById(req.params.id);
		currentUser.friends.push(sender._id)
		sender.friends.push(currentUser._id)
		currentUser.friendRequestsFrom.splice(
			currentUser.friendRequestsFrom.indexOf(sender._id), 1
		)

		sender.friendRequestsTo.splice(
			sender.friendRequestsTo.indexOf(currentUser._id), 1
		)
		const s = await currentUser.save();
		const c = await sender.save();
		if (s && c) {
			res.sendStatus(202);
			return
		}
		res.sendStatus(500)
	} else {
		res.sendStatus(404)
	}
});

module.exports = router;

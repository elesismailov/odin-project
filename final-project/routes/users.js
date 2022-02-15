
const express = require('express');
const router = express.Router();

const UserModel = require('../models/user.js');

// if index is accessed, send reccomended users.
// in this case random users
router.get('/', async function(req, res) {
	const users = await UserModel.find().limit(4);
	res.json(users)
});

router.get('/:id', async function(req, res) {
	const user = await UserModel.findById(req.params.id);
	res.json(user)
});

module.exports = router;

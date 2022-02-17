
const express = require('express');
const router = express.Router();

const PostModel = require('../models/post.js');
const UserModel = require('../models/user.js');

router.get('/', function(req, res) {
	res.redirect('/api/feed')
});

router.get('/:id', async function(req,res) {
	const post = await PostModel.findById(req.params.id);
	if (post) { res.json({post}) }
	else { res.sendStatus(400) }
});

module.exports = router;

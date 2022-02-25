// for now it is just going to send all user posts
//

const express = require('express');
const router = express.Router();

const PostModel = require('../models/post.js');
const UserModel = require('../models/user.js');

router.get('/',  async function(req, res) {
	const currentUser = await UserModel.findById(req.currentUserId);
	const posts = [];
	for (friendId of currentUser.friends) {
		const result = await PostModel.find({user: friendId}).limit(5);
		posts.push(...result)
	}
	res.json(posts)
});

module.exports = router;

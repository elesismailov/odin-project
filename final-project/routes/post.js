
const express = require('express');
const router = express.Router();

const PostModel = require('../models/post.js');
const UserModel = require('../models/user.js');
const CommentModel = require('../models/comment.js');

router.get('/', function(req, res) {
	res.redirect('/api/feed')
});

router.get('/:id', async function(req,res) {
	const post = await PostModel.findById(req.params.id);
	if (post) { res.json({post}) }
	else { res.sendStatus(400) }
});

router.get('/:id/comments/:limit', async function(req, res) {
	const post = await PostModel.findById(req.params.id);
	const comments =  [];
	if (post.comments.length) {
		for (let i = 0; i < +req.params.limit; i++) {
			const comment = await CommentModel.findById(post.comments[i]);
			if (!comment) break;
			comments.push(comment)
		}
	}
	res.json({ comments })
});
module.exports = router;

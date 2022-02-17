
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

// CREATE NEW POST
router.post('/', function(req, res) {
	const { title, text } = req.body;
	const post = {
		title,
		text,
		user: req.currentUserId,
		date: new Date(),
	};
	new PostModel(post).save(err => {
		if (err) { res.sendStatus(400) }
		else { res.sendStatus(202) }
	});
});

// UPDATE POST
router.put('/:id', async function(req, res) {
	const post = await PostModel.findById(req.params.id);
	const { title, text } = req.body;
	post.title = title || post.title;
	post.text = text || post.text;
	post.save(err => {
		if (err) { res.sendStatus(400) }
		else { res.sendStatus(202) }
	});
});


module.exports = router;

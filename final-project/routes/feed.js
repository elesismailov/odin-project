// for now it is just going to send all user posts
//

const express = require('express');
const router = express.Router();

const PostModel = require('../models/post.js');

// '/feed' === '/'
router.get('/', function(req, res) {
	console.log(req.currentUserId)
	PostModel.find().exec((err, result) => {
		res.send(result)
	})
});

module.exports = router;

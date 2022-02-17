const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema(
	{
		user: { type: Schema.Types.ObjectId, ref: 'User', required: true},
		likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
		text: {type: String, required: true},
	}
)

module.exports = mongoose.model('Comment', CommentSchema);

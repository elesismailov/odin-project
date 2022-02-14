
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    user: {type: Schema.Types.ObjectId, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'User'}],
    likes: [{type: Schema.Types.ObjectId, ref: 'User'}],
	title: {type: String, required: true},
	text: {type: String, required: true},
  }
);

module.exports = mongoose.model('Post', PostSchema);


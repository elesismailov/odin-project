
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema(
  {
    author: {type: Schema.Types.ObjectId, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
    likes: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
	title: {type: String, required: true},
	text: {type: String, required: true},
  }
);

module.exports = mongoose.model('Post', PostSchema);


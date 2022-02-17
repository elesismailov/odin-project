const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {type: String, required: true},
    email: {type: String, required: true},
    friends: [{type: Schema.Types.ObjectId, ref: 'User'}],
    friendRequestsTo: [{type: Schema.Types.ObjectId, ref: 'User'}],
    friendRequestsFrom: [{type: Schema.Types.ObjectId, ref: 'User'}],
	password: {type: String, required: true},
  }
);

module.exports = mongoose.model('User', UserSchema);


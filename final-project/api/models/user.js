const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {type: String, required: true},
    followings: [{type: Schema.Types.ObjectId, ref: 'Genre'}]
  }
);

module.exports = mongoose.model('User', UserSchema);


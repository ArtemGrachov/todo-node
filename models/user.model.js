const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  bio: {
    type: String
  },
  avatarUrl: {
    type: String
  },
  brithdate: {
    type: Date
  },
  boards: {
    type: [mongoose.Types.ObjectId],
    ref: 'Board'
  }
});

module.exports = mongoose.model('User', UserSchema);
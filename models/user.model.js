const
  mongoose = require('mongoose'),
  bcrypt = require('bcrypt');

const UserSchema = mongoose.Schema({
  username: {
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
  firstName: {
    type: String
  },
  lastName: {
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
  // boards: {
  //   type: [mongoose.Types.ObjectId],
  //   ref: 'Board'
  // }
});

UserSchema.pre('save', function(next) {
  const user = this;
  bcrypt.hash(user.password, 10)
  .then(hash => {
    user.password = hash;
    next();
  })
  .catch(err => next(err))
})

module.exports = mongoose.model('User', UserSchema);
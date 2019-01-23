const mongoose = require('mongoose');

const BoardSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  team: {
    administrators: [{
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }],
    users: [{
      type: mongoose.Types.ObjectId,
      ref: 'User'
    }]
  },
  lists: [{
    type: mongoose.Types.ObjectId,
    ref: 'List'
  }],
  style: {
    backgroundUrl: {
      type: String
    },
    backgroundColor: {
      type: String
    }
  }
})

module.exports = mongoose.model('Board', BoardSchema);
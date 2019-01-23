const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  done: {
    type: Boolean,
    required: true,
    default: false
  }
}, {
    timestamps: true
  });

module.exports = mongoose.model('Task', TaskSchema);
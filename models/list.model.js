const mongoose = require('mongoose');

const ListSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  tasks: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Task'
  },
  hidden: {
    type: Boolean,
    required: true,
    default: false
  }
})
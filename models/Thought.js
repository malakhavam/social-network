const { timeStamp } = require('console');
const { Schema, model } = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    maxlength: 280,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    timeStamp: { createdAt: 'created_at' },
  },
  username: {
    type: String,
    required: true,
  },
  
});

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
  userID: { 
    type: Number,
    required: true 
  },
  body: { 
    type: String, 
    required: true 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;

// 'populate' association in order to show user name associated with comment
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: { 
    type: String, 
    required: true 
  },
  password: {
    type: String, 
    required: true
  },
  comments: [
    {
    type: Schema.Types.ObjectId,
    ref: Comment
    }
  ],
  avatarURL: {
    type: String,
    default: ""
  },
  description: String, 
  favoriteSport: []
});

const User = mongoose.model("User", userSchema);

module.exports = User;
const mongoose = require("mongoose");
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    index: { unique: true }
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

/**
 * Compare the passed password with the value in the database. A model method.
 *
 * @param {string} password
 * @returns {object} callback
 */
UserSchema.methods.comparePassword = function comparePassword(password, callback) {
  bcrypt.compare(password, this.password, callback);
};

UserSchema.pre('save', function saveHook(next) {
  const user = this;

  // proceed further only if the password is modified or the user is new
  if (!user.isModified('password')) return next();


  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError); }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError); }

      // replace a password string with hash value
      user.password = hash;

      return next();
    });
  });
});

const User = mongoose.model("User", userSchema);

module.exports = User;
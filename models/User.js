const { Schema, model } = require('mongoose');

// User schema
const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: [true, 'Please, enter your username'],
    trim: true,
  },
  email: {
    type: String,
    unique: true,
    required: [true, 'Please, enter your email address'],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please, enter a valid email address!',
    ],
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought',
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
},

  {
    toJSON: {
      virtuals: true,
      getters: true,
    },

    id: false,
  }
);

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;

});

// create the user model using userSchema
const User = model("User", userSchema);

// export user model
module.exports = User;
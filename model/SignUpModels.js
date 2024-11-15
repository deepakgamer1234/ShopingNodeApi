const mongoose = require('mongoose');

const signup = mongoose.Schema({
    email: {
      type: String,
      requried: true,
    },
    password: {
      type: String,
      requried: true,
    },
    displayName: {
      type: String,
      requried: true,
    }
  });
  
  const SignUp = mongoose.model("SignUp", signup);
  
  module.exports = SignUp;

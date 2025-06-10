const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  username: {
    type: String,
    required: true,
    lowercase: true,
    minlength: [3,'Username must be at least 3 characters long'],
    unique: true,
    trim: true
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: [5, 'Password must be at least 5 characters long'],
    trim: true
  },
})


const User = mongoose.model('User', userSchema);
module.exports = User;
const mongoose = require('mongoose');

function connectToDB() {
  mongoose.connect(process.env.MONGODB_URI)
}
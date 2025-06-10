const mongoose = require('mongoose');

function connectToDB() {
  mongoose.connect(process.env.MONGO_URI).then(() => {
    console.log('Connected to DB');
  })
}

module.exports = connectToDB;


// const mongoose = require('mongoose');

// function connectToDB() {
//   const mongoURI = process.env.MONGODB_URI;

//   if (!mongoURI) {
//     console.error('❌ MongoDB URI is not defined in environment variables.');
//     process.exit(1); // Exit the application if URI is missing
//   }

//   mongoose.connect(mongoURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//     .then(() => console.log('✅ Connected to MongoDB'))
//     .catch((err) => {
//       console.error('❌ Error connecting to MongoDB:', err.message);
//       process.exit(1);
//     });
// }

// module.exports = connectToDB;

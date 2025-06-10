const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const connectToDB = require('./config/db');
const userRoutes = require('./routes/user.routes');
const indexRouter = require('./routes/index.routes');

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectToDB();

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Middleware
app.use(cookieParser()); // Parse cookies
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies

// Routes
app.use('/', indexRouter); // Home or main routes
app.use('/user', userRoutes); // User-specific routes

// Start the server
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});

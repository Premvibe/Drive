const express = require('express');
const userRoutes = require('./routes/user.routes');

const app = express();

app.set('view engine', 'ejs');
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies


app.use('/user', userRoutes)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}
); 
const express = require('express');
const dotenv = require('dotenv');
const app = express();

dotenv.config({ path: './config.env' });

//importing the port number from config.env.
const PORT = process.env.PORT;
// Importing the conn file from db folder that connects to the database
require('./db/conn');
// const User = require('./model/userSchema');

//getting data in form of json(bcon - > json)
app.use(express.json());
// we link the router files
app.use(require('./router/auth.js'));

// MiddleWare
const middleware = (req, res, next) => {
  console.log('hello this is middleware');
  next();
};

// Routing

// app.get('/', (req, res) => {
//   res.send('Hello World from the server app.js');
// });

app.get('/about', middleware, (req, res) => {
  console.log('hello this is about of middleware ');
  res.send('Hello about');
});

app.get('/contact', (req, res) => {
  res.send('Hello contact');
});
app.get('/signin', (req, res) => {
  res.send('Hello signin page');
});
app.get('/signup', (req, res) => {
  res.send('Hello signup page');
});

// listing on the port
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});

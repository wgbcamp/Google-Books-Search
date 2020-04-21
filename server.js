const express = require("express");
const mongoose = require('mongoose');
const app = express();
const router = express.Router();

const routes = require('./controller/bookController.js');



const PORT = process.env.PORT || 3001;



// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(routes);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const mongoDBconnection = 'mongodb://localhost/GoogleBooks';

mongoose.Promise = global.Promise;

mongoose.connect(mongoDBconnection);

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

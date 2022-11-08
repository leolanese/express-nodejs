const express = require('express');
const terms = require("./controllers/terms");
const users = require("./controllers/users");
const path = require(path);
const app = express();

const router = express.Router();
const hostname = "127.0.0.1";
const port = 8000;

app.use("/terms", terms);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pub');

// new API route: GET /users, returning a list of users
app.use('/users', users);

// DELETE user
app.delete('/users', (request, response) => {
  response.json({ result: 'success' });
});

app.get("/", function (req, res) {
  res.send("root! ");
});

// Prints a log once the server starts listening
app.listen(port, hostname, function () {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// About page route
app.get("/about", function (req, res) {
  res.send("About");
});

app.use(function (err, req, res, next) {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

app.all("/access", function (req, res, next) {
  console.log("Access granted");
  next(); // pass control to the next handler
});

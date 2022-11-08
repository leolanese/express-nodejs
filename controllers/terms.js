const express = require('express');
const router = express.Router();

// Terms page route
router.get("/", function (req, res) {
  res.send("Terms home page");
});

// About page route
router.get("/about", function (req, res) {
  res.json([
    { id: 123, username: 'John' },
    { id: 122, username: 'Mary' },
    { id: 121, username: 'Jane' }
  ]);

});

module.exports = router;
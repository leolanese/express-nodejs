const express = require('express');
const router = express.Router();

// users page route
router.get("/", function (request, response) {
    // triggered on terminal
    setTimeout(function () {
        console.log("First");
      }, 3000);
      console.log("Second");
      
      response.json([
        { id: 546, username: 'John' },
        { id: 894, username: 'Mary' },
        { id: 326, username: 'Jane' }
      ]);
});

module.exports = router;
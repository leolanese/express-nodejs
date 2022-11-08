var express = require('express');
var router = express.Router();


let home = require('../../controllers/home');

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/', './../../controllers/home');
router.post('/', landing.submit)

module.exports = router;

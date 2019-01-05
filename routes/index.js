var express = require('express');
var router = express.Router();
var twitterSearch = require("../logic/twitterSearch");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'ExpressFirasKebsiJS' });
});

router.post('/search', function (req, res) {
  twitterSearch(req.body.search, function (data) {
    res.json(data);
  });
});
  module.exports = router;

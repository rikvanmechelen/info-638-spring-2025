const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  const books = [
    "Leviathan Wakes", "Columbus Day", "The Three-Body Problem"
  ]
  res.render('books/index', { title: 'BookedIn || books', books: books });
});

module.exports = router;
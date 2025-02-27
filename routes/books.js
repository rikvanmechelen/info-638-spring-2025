const express = require('express');
const Book = require('../models/book');
const Author = require('../models/author');
const router = express.Router();

router.get('/', function(req, res, next) {
  const books = Book.all
  res.render('books/index', { title: 'BookedIn || books', books: books });
});

router.get('/form', async (req, res, next) => {
  res.render('books/form', { title: 'BookedIn || Books', authors: Author.all });
});

router.post('/upsert', async (req, res, next) => {
  console.log('body: ' + JSON.stringify(req.body))
  Book.upsert(req.body);
  res.redirect(303, '/books')
});

router.get('/edit', async (req, res, next) => {
  let bookIndex = req.query.id;
  let book = Book.get(bookIndex);
  res.render('books/form', {
    title: 'BookedIn || Books',
    book: book,
    bookIndex: bookIndex,
    authors: Author.all
  });
});

router.get('/show/:id', async (req, res, next) => {
  var templateVars = {
    title: "BookedIn || show",
    book: Book.get(req.params.id)
  }
  if (templateVars.book.authorIds) {
    templateVars.authors = templateVars.book.authorIds.map((authorId) => Author.get(authorId));
  }
  res.render('books/show', templateVars);
});

module.exports = router;

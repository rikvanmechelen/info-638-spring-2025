const books = [
  {title: "Leviathan Wakes", publishingYear: 2011},
  {title: "Caliban’s War", publishingYear: 2012}
];

exports.all = books

exports.get = (idx) => {
  return books[idx];
}

exports.add = (book) => {
  books.push(book);
}

exports.update = (book) => {
  books[book.id] = book;
}

exports.upsert = (book) => {
  if (book.id) {
    exports.update(book);
  } else {
    exports.add(book);
  }
}